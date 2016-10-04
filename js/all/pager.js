/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Pager Control
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.pager = function(options) {

    // Settings and Options
    var pluginName = 'pager',
        defaults = {
          type: 'list', //Differet types of pagers: list, table and more
          position: 'bottom',  //Can be on top as well.
          activePage: 1, //Start on this page
          source: null,  //Call Back Function for Pager Data Source
          pagesize: 15, //Can be calculate or a specific number
          pagesizes: [15, 25, 50, 75],
          indeterminate: false // Will not show anything that lets you go to a specific page
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Pager(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Actual Plugin Code
    Pager.prototype = {

      init: function() {
        this.setup();
        this.buttonExpr = 'li:not(.pager-prev):not(.pager-next):not(.pager-first):not(.pager-last)';
        this.createPagerBar();
        this.setActivePage(this.settings.activePage); //Get First Page
        this.renderBar();
        this.renderPages(false, 'initial');
        this.handleEvents();
      },

      setup: function() {

        // Add [pagesize] if not found in [pagesizes]
        if($.inArray(this.settings.pagesize, this.settings.pagesizes) === -1) {
          var sortNumber = function (a, b) {
            return a - b;
          };
          this.settings.pagesizes.push(this.settings.pagesize);
          this.settings.pagesizes = this.settings.pagesizes.sort(sortNumber);
        }

        // Adjust for the possibility of the pager being attached to a Table instead of normal grid markup
        if (this.element.is('tbody')) {
          this.isTable = true;
          this.settings.type = 'table';
          this.mainContainer = this.element.closest('.datagrid-wrapper');
        }

        // If contained by a widget/card container, build some settings for that
        var widgetContainer = this.element.closest('.card, .widget');
        if (widgetContainer.length) {
          this.isList = true;
          this.settings.type = 'list';
          this.mainContainer = widgetContainer;
        }

        return this;
      },

      createPagerBar: function () {
        this.pagerBar = this.element.prev('.pager-toolbar');

        if (this.pagerBar.length === 0) {
          this.pagerBar = $('<ul class="pager-toolbar"></ul>');
          var buttons = '<li class="pager-prev">' +
              '<a href="#" rel="prev" title="PreviousPage">' + $.createIcon({ icon: 'previous-page' }) +
                '<span class="audible">' + Locale.translate('PreviousPage') + '</span>' +
              '</a>' +
            '</li>' +
            '<li class="pager-next">' +
              '<a href="#" rel="next" title="NextPage">' + $.createIcon({ icon: 'next-page' }) +
                '<span class="audible">' + Locale.translate('NextPage') + '</span>' +
              '</a>' +
            '</li>';

          if (this.settings.type === 'table') {
            buttons = '<li class="pager-first">' +
              '<a href="#" title="FirstPage">' + $.createIcon({ icon: 'first-page' }) +
                '<span class="audible">' + Locale.translate('FirstPage') + '</span>' +
              '</a>' +
            '</li>' +
            buttons +
            '<li class="pager-last">' +
              '<a href="#" title="LastPage">' + $.createIcon({ icon: 'last-page' }) +
                '<span class="audible">' + Locale.translate('LastPage') + '</span>' +
              '</a>' +
            '</li>';
          }

          this.pagerBar.html(buttons);

          this.pagerBar.children('li').children('a').button();
        }

        if (this.isTable) {
          this.mainContainer.after(this.pagerBar);
        } else {
          if (this.settings.position ==='bottom') {
            this.element.after(this.pagerBar);
          } else {
            this.element.before(this.pagerBar);
          }
        }

        // Inside of Listviews, place the pager bar inside of the card/widget footer
        if (this.settings.type === 'list') {
          var self = this,
            widgetTypes = ['widget', 'card'];

          widgetTypes.forEach(function(type) {
            var widgetContent = self.element.closest('.' + type + '-content');
            if (!widgetContent.length) {
              return;
            }

            var widgetFooter = widgetContent.next('.' + type + '-footer');
            if (!widgetFooter.length) {
              widgetFooter = $('<div class="'+ type +'-footer"></div>').insertAfter(widgetContent);
            }

            self.pagerBar.appendTo(widgetFooter);
          });
        }

        this.pagerBar.find('a').tooltip();
      },

      // Attach All relevant events
      handleEvents: function () {
        var self = this;

        // Set element to be focused after paging
        self.element.on('afterpaging.pager', function () {
          var isVisible = $('li[tabindex]:visible, td[tabindex]:visible', self.element);
          if (!isVisible.length) {
            $('li:visible:first, td:visible:first', self.element).attr('tabindex', '0');
          }
          // Fix: Firefox by default not allow keyboard focus on links
          $('li a', this.pagerBar).each(function() {
            var a = $(this),
              li = a.closest('li');

            if (!a.is('[disabled]')) {
              li.attr('tabindex', '0').on('focus.pager', function() {
                $('a', this).focus();
              });
            }
          });
        });

        //Adjust buttons on resize
        $(window).on('resize.pager', function () {
          self.renderBar();
        });

        //Attach button click and touch
        this.pagerBar.onTouchClick('pager', 'a').on('click.pager', 'a', function (e) {
          var li = $(this).parent();
          e.preventDefault();

          if (li.is('.pager-prev')) {
            self.setActivePage(self.activePage - 1, false, 'prev');
            return false;
          }

          if (li.is('.pager-next')) {
            self.setActivePage(self.activePage + 1, false, 'next');
            return false;
          }

          if (li.is('.pager-first')) {
            self.setActivePage(1, false, 'first');
            return false;
          }

         if (li.is('.pager-last')) {
            self.setActivePage(self.pageCount(), false, 'last');  //TODO Calculate Last Page?
            return false;
          }

          //Go to the page via the index of the button
          self.setActivePage($(this).parent().index() + (self.settings.type === 'table' ? -1 : 0), false, 'page');

          return false;
        })
        .on('focus.pager', 'a', function() {
          var li = $(this).parent('li');
          li.addClass('is-focused');
        })
        .on('blur.pager', 'a', function() {
          var li = $(this).parent('li');
          li.removeClass('is-focused');
        });

        //Toolbar functionality
        this.pagerBar.on('keydown.pager', 'a', function (e) {
          e = e || window.event;
          var key = e.which || e.keyCode || e.charCode || false,
            parent = $(this).parent(),
            btn = ((key === 37 || key === 9 && e.shiftKey) ? parent.prev() : (key === 39 ? parent.next() : $()));

          if (key === 9 && e.shiftKey && parent.prev().is('.pager-prev, .pager-first, .pager-count') ||
              key === 9 && e.shiftKey && parent.is('.pager-prev, .pager-first')) {
            parent.removeAttr('tabindex');
            setTimeout(function () {
              parent.attr('tabindex', '0');
            }, 0);
          }
          btn = $('a', btn).length ? btn : $(':text', btn);
          if (btn.length && !btn.is('[disabled]')) {
            btn.focus();
          }
        });
      },

      //Set or Get Current Page
      setActivePage: function(pageNum, force, op) {

        var lis = this.pagerBar.find(this.buttonExpr);

        // Check to make sure our internal active page is set
        if (!this.activePage || isNaN(this.activePage)) {
          this.activePage = this.settings.activePage;
        }

        if (pageNum === 0 || pageNum > this.pageCount()) {
          return this.activePage;
        }

        if (pageNum === undefined) {
          return this.activePage;
        }

        if (pageNum === this.activePage && !force) {
          return this.activePage;
        }

        this.activePage = pageNum;

        //Remove selected
        if (!this.settings.source) {
          lis.filter('.selected').removeClass('selected').removeAttr('aria-selected')
            .find('a').removeAttr('aria-disabled')
              .find('.audible').html(Locale.translate('Page'));

          //Set selected Page
          lis.eq(pageNum-1).addClass('selected').attr('aria-selected', true)
            .find('a').attr('aria-disabled', true)
              .find('.audible').html(Locale.translate('PageOn'));
        }

        this.renderBar();
        this.renderPages(false, op);
        return pageNum;
      },

      _pageCount: 0,

      //Get/Set Total Number of pages
      pageCount: function(pages) {
        var self = this;

        if (pages === undefined && this.settings.indeterminate) {
          this._pageCount = this.settings.pagesize;
        }

        if (pages === undefined && !this.settings.source) {
          return this._pageCount;
        }

        if (pages !== undefined) {
          this._pageCount = pages;
        }

        //Add in fake pages
        if (!this.isTable) {
          var i, thisClass, thisText, isAriaSelected, isAriaDisabled;
          this.pagerBar.find(this.buttonExpr).remove();

          for (i = pages; i > 0; i--) {
            if (i === (this.activePage || 1)) {
              thisClass = 'class="selected"';
              thisText = Locale.translate('PageOn');
              isAriaSelected = 'aria-selected="true"';
              isAriaDisabled = 'aria-disabled="true"';
            } else {
              thisClass = '';
              thisText = Locale.translate('Page');
              isAriaSelected = '';
              isAriaDisabled = '';
            }

            $('<li '+ thisClass + isAriaSelected +'><a href="#" '+ isAriaDisabled +'><span class="audible">'+ thisText +' </span>'+ i +'</a></li>').insertAfter(this.pagerBar.find('.pager-prev'));
          }
        }

        if (this.isTable && !this.settings.indeterminate && this.pagerBar.find('.pager-count').length === 0) {
          var text = Locale.translate('PageOf');
          text = text = text.replace('{0}', '<input name="pager-pageno" value="' + this.activePage + '">');
          text = text.replace('{1}', '<span class="pager-total-pages">' + (pages || 1) + '</span>');

          $('<li class="pager-count"><label>'+ text +' </label>').insertAfter(this.pagerBar.find('.pager-prev'));

          //Setup interactivty with the numeric page input
          var lastValue = null;

          this.pagerBar.find('.pager-count input')
          .on('focus', function () {
            lastValue = $(this).val();
          }).on('blur', function () {
            if (lastValue !== $(this).val()) {
              self.setActivePage(parseInt($(this).val()), false, 'page');
            }
          }).on('keydown', function (e) {
            if (e.which === 13) {
              self.setActivePage(parseInt($(this).val()), false, 'page');
            }
          });
        }

        //Add functionality to change page size.
        if (this.isTable && this.pagerBar.find('.btn-menu').length === 0) {
          var pageSize = $('<li class="pager-pagesize"><button type="button" class="btn-menu"> <span>' + Locale.translate('RecordsPerPage').replace('{0}', this.settings.pagesize) +'</span> '+ $.createIcon({ icon: 'dropdown' }) +' </button></li>');
          $(pageSize).insertAfter(this.pagerBar.find('.pager-last'));
          var menu = $('<ul class="popupmenu has-icons"></ul>');

          for (var k = 0; k < self.settings.pagesizes.length; k++) {
            var size = self.settings.pagesizes[k];
            menu.append('<li '+ (size === self.settings.pagesize ? ' class="is-checked"' : '') +'><a href="#">' + size + '</a></li>');
          }

          pageSize.find('button').after(menu);

          this.pagerBar.find('.btn-menu').popupmenu().on('selected.pager', function (e, args) {
            var tag = args;
            tag.closest('.popupmenu').find('.is-checked').removeClass('is-checked');
            tag.parent('li').addClass('is-checked');
            self.settings.pagesize = parseInt(tag.text());
            self.setActivePage(1, true, 'first');
           });

          $('[href="#25"]').parent().addClass('is-checked');
        }

        var pattern = (''+ this._pageCount).replace(/\d/g, '#');
        this.pagerBar.find('.pager-count input').attr('data-mask', pattern).mask();

        this._pageCount = this._pageCount || 1;

        return this._pageCount;
      },

      // Reliably gets all the pre-rendered elements in the container and returns them for use.
      getPageableElements: function() {
        var elements = this.element.children().not('.datagrid-expandable-row');

        // Adjust for cases where the root is a <ul>
        if (elements.is('ul')) {
          elements = elements.children();
        }

        return elements;
      },

      // Render Pages
      renderBar: function() {
        //How many can fit?
        var pb = this.pagerBar,
          elems, pc,
          width = (this.element.parent().width() / pb.find('li:first').width()),
          howMany = Math.floor(width-3);   //Take out the ones that should be visible (buttons and selected)

        //Check Data Attr
        if (this.element.attr('data-pagesize')) {
          this.settings.pagesize = this.element.attr('data-pagesize');
        }

        //Adjust Page count numbers
        if (!this.settings.source) {
          var pageableLength = this.getPageableElements().not('.is-filtered').length;
          pc = Math.ceil(pageableLength/this.settings.pagesize);

          if (this.isTable) {
            var isFiltered = function(value) {
              return !value.isFiltered;
            },
            dataLength = this.settings.dataset.filter(isFiltered).length;

            pc = Math.ceil(dataLength/this.settings.pagesize);
          }
          this.pageCount(pc);
        }

        //Refresh Disabled
        var prev = pb.find('.pager-prev a'),
          next = pb.find('.pager-next a'),
          first = pb.find('.pager-first a'),
          last = pb.find('.pager-last a'),
          prevGroup = prev.add(first).add('.pager-prev').add('.pager-first'),
          nextGroup = next.add(last).add('.pager-next').add('.pager-last');

        // Reset all
        prevGroup.add(nextGroup).removeAttr('disabled tabIndex');

        // First page
        if (this.activePage === 1) {
          prevGroup.attr({'disabled': 'disabled', 'tabIndex': -1});
          nextGroup.attr({'tabIndex': 0});
        }

        // Last page
        if (this.activePage === this.pageCount()) {
          nextGroup.attr({'disabled': 'disabled', 'tabIndex': -1});
          prevGroup.attr({'tabIndex': 0});
        }

        //Remove from the front until selected is visible and we have at least howMany showing
        //rowTemplate
        if (!this.settings.source) {
          elems = pb.find(this.buttonExpr);
          elems.show();
          if (elems.length < howMany) {
            return;
          }

          elems.each(function () {
            var li = $(this);
            if (pb.find('.pager-next').offset().top - pb.offset().top > 1 && !li.is('.selected')) {
              $(this).hide();
            }
          });

        }
      },

      pagerInfo: {},
      setDatagrid: function() {
        this.datagrid = this.mainContainer ? this.mainContainer.children('.datagrid-container').data('datagrid') : null;
      },

      renders: 0,
      // Render Paged Items
      renderPages: function(uiOnly, op) {
      var expr,
          self = this,
          request = {
            activePage: self.activePage,
            pagesize: self.settings.pagesize,
            type: op,
            total: -1
          };

        self.renders ++;

        //Make an ajax call and wait
        setTimeout(function () {
          var doPaging = self.element.triggerHandler('beforepaging', request);

          if (doPaging === false) {
            return;
          }

          if (self.settings.source && !uiOnly) {
            var response;

            // Distinguish between datagrid and listview
            if (self.isTable) {
              self.setDatagrid();
            } else {
              self.datagrid = self.element.data('listview');
            }

            response = function(data, pagingInfo) {
              //Render Data
              pagingInfo.preserveSelected = true;
              self.datagrid.loadData(data, pagingInfo, true);

              //Update Paging Info
              self.updatePagingInfo(pagingInfo);

              setTimeout(function () {
                self.element.trigger('afterpaging', pagingInfo);
              },1);
              return;
            };

            if (self.datagrid.sortColumn && self.datagrid.sortColumn.sortId) {
              request.sortAsc = self.datagrid.sortColumn.sortAsc;
              request.sortField = self.datagrid.sortColumn.sortField;
              request.sortId = self.datagrid.sortColumn.sortId;
            }

            if (self.datagrid.filterExpr) {
               request.filterExpr = self.datagrid.filterExpr;
            }
            self.settings.source(request, response);
          }

          //Make an ajax call and wait
          self.element.trigger('paging', request);
          var elements = self.getPageableElements();

          //Render page objects
          if (!self.settings.source) {
            var rows = self.settings.pagesize;

            self.updatePagingInfo(request);

            self.setDatagrid();
            if (self.datagrid) {
              self.datagrid.renderRows();
            }
            elements.hide();

            //collapse expanded rows
            self.element.children().filter('.datagrid-expandable-row.is-expanded').removeClass('is-expanded').hide();
            self.element.children().find('.datagrid-expand-btn').each(function () {
              $(this).removeClass('.is-expanded');
              $(this).find('.plus-minus').removeClass('active');
            });

            expr = (self.activePage === 1 ? ':not(".is-filtered"):lt('+ rows +')' : ':not(".is-filtered"):lt('+ ((self.activePage) * rows) +'):gt('+ (((self.activePage-1) * rows) -1) +')');

            elements.filter(expr).show();
          } else {
            elements.show();
          }

          if (!self.settings.source) {
            self.element.trigger('afterpaging', request);
          }

        }, 0);
      },

      updatePagingInfo: function(pagingInfo) {
        this.settings.pagesize = pagingInfo.pagesize || this.settings.pagesize;

        if (this.isTable && this.datagrid) {
          this.datagrid.settings.pagesize = this.settings.pagesize;
        }
        this.pagerBar.find('.btn-menu span').text(Locale.translate('RecordsPerPage').replace('{0}', this.settings.pagesize));

        if (this.settings.source) {
          this._pageCount = Math.ceil(pagingInfo.total/this.settings.pagesize);
          this.activePage = pagingInfo.activePage;

          //Set first and last page if passed
          this.setActivePage(this.activePage, false, 'pageinfo');
        }

        //Update the UI
        this.pagerBar.find('.pager-count input').val(this.activePage);

        if (this._pageCount !== '0') {
          this.pagerBar.find('.pager-total-pages').text(this._pageCount);
        }

        if (pagingInfo.firstPage) {
          // this.pagerBar.find('.pager-first a').attr('disabled', 'disabled');
          // this.pagerBar.find('.pager-prev a').attr('disabled', 'disabled');
          this.pagerBar.find('.pager-first a')
            .attr({'disabled':'disabled', 'tabIndex': -1});

          this.pagerBar.find('.pager-prev a')
            .attr({'disabled':'disabled', 'tabIndex': -1});
        }

        if (pagingInfo.lastPage) {
          // this.pagerBar.find('.pager-next a').attr('disabled', 'disabled');
          // this.pagerBar.find('.pager-last a').attr('disabled', 'disabled');

          this.pagerBar.find('.pager-next a')
            .attr({'disabled':'disabled', 'tabIndex': -1});

          this.pagerBar.find('.pager-last a')
            .attr({'disabled':'disabled', 'tabIndex': -1});
        }
      },

      //Teardown
      destroy: function() {
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        instance = $.data(this, pluginName, new Pager(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
