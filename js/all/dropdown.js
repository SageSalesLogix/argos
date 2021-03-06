/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Drop Down Control
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

  $.fn.dropdown = function(options) {

    'use strict';

    // Dropdown Settings and Options
    var pluginName = 'dropdown',
        defaults = {
          closeOnSelect: true, // When an option is selected, the list will close if set to "true".  List stays open if "false".
          cssClass: null,  //Append a css class to dropdown-list
          maxSelected: undefined, //If in multiple mode, sets a limit on the number of items that can be selected
          moveSelectedToTop: false, //When the menu is opened, displays all selected options at the top of the list
          multiple: false, //Turns the dropdown into a multiple selection box
          noSearch: false, //If true, disables the ability of the user to enter text in the Search Input field in the open combo box
          source: undefined,  //A function that can do an ajax call.
          empty: false, //Initialize Empty Value
          delay: 300 //Typing Buffer Delay
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Dropdown(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Actual DropDown Code
    Dropdown.prototype = {
      init: function() {
        var orgId = this.element.attr('id');

        this.inlineLabel = this.element.closest('label');
        this.inlineLabelText = this.inlineLabel.find('.label-text');
        this.isInlineLabel = this.element.parent().is('.inline');

        if (orgId === undefined) {
          orgId = this.element.uniqueId('dropdown');
          this.element.attr('id', orgId);
          this.element.parent().find('label').first().attr('for', orgId);
        }

        var cssClass = this.element.is('.dropdown-xs') ? 'dropdown input-xs' :
            this.element.is('.dropdown-sm') ? 'dropdown input-sm' :
            this.element.is('.dropdown-lg') ? 'dropdown input-lg' : 'dropdown';

        this.isHidden = this.element.css('display') === 'none';
        this.element.hide();

        // Build the wrapper if it doesn't exist
        var baseElement = this.isInlineLabel ? this.inlineLabel : this.element;
        this.wrapper = baseElement.next('.dropdown-wrapper');
        if (!this.wrapper.length) {
          this.wrapper = $('<div class="dropdown-wrapper"></div>').insertAfter(baseElement);
        }

        // Build sub-elements if they don't exist
        this.label = $('label[for="'+ orgId +'"]');

        this.pseudoElem = $('div#'+ orgId + '-shdo');
        if (!this.pseudoElem.length) {
          this.pseudoElem = $('<div class="'+ cssClass +'">').attr({
            'role': 'combobox',
            'aria-autocomplete': 'list',
            'aria-controls': 'dropdown-list',
            'aria-readonly': 'true',
            'aria-expanded': 'false',
            'aria-label': this.label.text()
          });
        }
        this.pseudoElem.append($('<span></span>'));

        // Pass disabled/readonly from the original element, if applicable
        // "disabled" is a stronger setting than "readonly" - should take precedent.
        function handleStates(self) {
          var disabled = self.element.prop('disabled'),
            readonly = self.element.prop('readonly');

          if (disabled) {
            return self.disable();
          }

          if (readonly) {
            return self.readonly();
          }

          return self.enable();
        }
        handleStates(this);

        // Place the elements depending on the configuration
        // if (this.isInlineLabel) {
        //   this.wrapper
        //     .append($('<label></label>')
        //       .attr('for', name + prefix)
        //       .html(this.label.find('.label-text').html())
        //     );
        // }
        this.wrapper.append(this.pseudoElem, this.trigger);

        // Check for and add the icon
        this.icon = this.wrapper.find('.icon');
        if (!this.icon.length) {
          this.icon = $.createIconElement('dropdown');
          this.wrapper.append(this.icon);
        }

        // Setup the incoming options that can be set as properties/attributes
        if (this.element.prop('multiple') && !this.settings.multiple) {
          this.settings.multiple = true;
        }
        if (this.element.attr('data-source') && this.element.attr('data-source') !== 'source') {
          this.settings.source = this.element.attr('data-source');
        }
        if (this.element.attr('data-maxselected') && !isNaN(this.element.attr('data-maxselected'))) {
          this.settings.maxSelected = parseInt(this.element.attr('data-maxselected'), 10);
        }
        if (this.element.attr('data-move-selected') && !this.settings.moveSelectedToTop) {
          this.settings.moveSelectedToTop = this.element.attr('data-move-selected') === 'true';
        }
        if (this.element.attr('data-close-on-select') && !this.settings.closeOnSelect) {
          this.settings.closeOnSelect = this.element.attr('data-close-on-select') === 'true';
        }
        if (this.element.attr('data-no-search') && !this.settings.noSearch) {
          this.settings.noSearch = this.element.attr('data-no-search') === 'true';
        }

        // Persist sizing defintions
        var sizingStrings = ['-xs', '-sm', '-md', '-lg'],
          classString = this.element.attr('class'),
          s;

        for (var i = 0; i < sizingStrings.length; i++) {
          s = sizingStrings[i];
          if (classString.match(s)) {
            this.pseudoElem.addClass('dropdown' + s);
          }
        }

        this.updateList();
        this.setValue();
        this.setInitial();
        this.setWidth();

        this.element.triggerHandler('rendered');

        return this.handleEvents();
      },

      // Used for preventing menus from popping open/closed when they shouldn't.
      // Gets around the need for timeouts everywhere
      inputTimer: function() {
        if (this.inputTimeout) {
          return false;
        }

        var self = this;

        this.inputTimeout = setTimeout(function inputTimeout(){
          clearTimeout(self.inputTimeout);
          self.inputTimeout = null;
        }, 100);

        return true;
      },

      // Set Field Width
      setWidth: function() {
        var style = this.element[0].style;

        if (style.width) {
          this.pseudoElem.width(style.width);
        }
        if (style.position === 'absolute') {
          this.pseudoElem.css({position: 'absolute', left: style.left, top: style.top, bottom: style.bottom, right: style.right});
        }
      },

      // Update List Values
      updateList: function() {
        var self = this,
          isOpen = self.list && self.list.is(':visible'),
          upTopOpts = 0;

        //Keep a list generated and append as needed
        if (isOpen) {
          self.listUl.empty();
        } else {
          self.list = $('<div class="dropdown-list" id="dropdown-list" role="application">');
          self.listUl = $('<ul role="listbox"></ul>').appendTo(self.list);

          // "Close (X)" icon on Mobile.
          // "Collapse" (up-arrow) icon by default.
          var isMobile = self.isMobile();
          self.list.prepend('<span class="trigger">' +
            (isMobile ? $.createIcon({ icon: 'close', classes: ['close'] }) : $.createIcon('dropdown')) +
            '<span class="audible">' + (isMobile ? Locale.translate('Close') : Locale.translate('Collapse')) + '</span>' +
          '</span>');
        }

        function setOptions(option, listOption) {
          //Add a data-val attribute that matches the original option value
          listOption.attr('data-val', option.val());

          //Image Support
          if (option.attr('class')) {
            listOption.addClass(option.attr('class'));
          }
          //Disabled Support
          if (option.attr('disabled')) {
            listOption.addClass('is-disabled');
          }
          //Special Data Attribute
          if (option.attr('data-attr')) {
            listOption.attr('data-attr', option.attr('data-attr'));
          }

          //Tooltip Support
          if (option.attr('title') && $.fn.tooltip) {
            listOption.attr('title', option.attr('title')).tooltip();
          }

          //Badge Support
          self.badges = false;

          if (option.attr('data-badge')) {
            self.badges = true;
            listOption.append('<span class="badge ' + (option.attr('data-badge-color') ? option.attr('data-badge-color') : 'azure07') + '">' + option.attr('data-badge') + '</span>');
          }
        }

        if (self.settings.multiple) {
          self.list.addClass('multiple').attr('aria-multiselectable', 'true');
        }

        // Move all selected options to the top of the list if the setting is true.
        // Also adds a group heading if other option groups are found in the <select> element.
        if (self.settings.moveSelectedToTop) {
          var selectedOpts = self.element.find('option:selected');
          // Show a "selected" header if any options have been selected.
          if (selectedOpts.length > 0) {
            self.listUl.append($('<li role="presentation" class="group-label" focusable="false"></li>').text(Locale.translate('Selected') + ' ' + (self.isInlineLabel ? self.inlineLabelText.text() : this.label.text())));
          }
          selectedOpts.each(function(i) {
            var option = $(this),
              listOption = $('<li role="presentation" class="dropdown-option is-selected" tabindex="-1">' +
                '<a role="option" href="#" id="list-option'+ i +'" >' +
                option.html() +
                '</a>' +
                '</li>');

            setOptions(option, listOption);
            self.listUl.append(listOption);
            upTopOpts++;
          });
          // Only show the "all" header if there are no other optgroups present
          if (selectedOpts.length > 0 && !self.element.find('optgroup').length) {
            self.listUl.append($('<li role="presentation" class="group-label"></li>').text('All ' +
              (self.isInlineLabel ? self.inlineLabelText.text() : this.label.text())));
          }
        }

        self.element.find('option').each(function(i) {
          var count = i + upTopOpts,
            option = $(this),
            listOption;

          // Add Group Header if this is an <optgroup>
          if (option.is(':first-child') && option.parent().is('optgroup')) {
            var groupHeader = $('<li role="presentation" class="group-label" focusable="false"></li>').text(option.parent().attr('label'));
            self.listUl.append(groupHeader);
          }

          if (self.settings.moveSelectedToTop && option.is(':selected')) {
            return;
          }

          listOption = $('<li role="presentation" class="dropdown-option" tabindex="-1">' +
            '<a role="option" href="#" id="list-option'+ count +'">' +
            option.html() +
            '</a>' +
            '</li>');

          self.listUl.append(listOption);
          if (option.is(':selected')) {
            listOption.addClass('is-selected').attr({'tabindex': '0'});
          }

          setOptions(option, listOption);
        });

        // Add the class that switches the UI view to the enlarged "mobile" view in some
        // form factors and operating systems.
        self.list[self.isMobile() ? 'addClass' : 'removeClass']('mobile');
        self.list[self.isFullScreen() ? 'addClass' : 'removeClass']('full-screen');

        //Add Input Element and
        if (!isOpen) {
          this.searchInput = $('<input type="text" class="dropdown-search" role="combobox" aria-expanded="true" id="dropdown-search" aria-autocomplete="list">');
          this.list.prepend(this.searchInput);
          this.searchInput.before('<label for="dropdown-search" class="audible">Search</label>');
        }
      },

      // Set the value based on selected options
      setValue: function () {
        var opts = this.element.find('option:selected'),
          text = this.getOptionText(opts);

        if (this.settings.empty && opts.length === 0) {
          this.pseudoElem.find('span').text('');
          return;
        }

        //Set initial values for the edit box
        this.pseudoElem.find('span').text(text);
        if (this.element.attr('maxlength')) {
           this.pseudoElem.find('span').text(text.substr(0, this.element.attr('maxlength')));
        }

        //Set the "previousActiveDescendant" to the first of the items
        this.previousActiveDescendant = opts.first().val();

        this.setBadge(opts);
      },

      copyClass: function(from, to, prop) {
        if (from.hasClass(prop)) {
          to.addClass(prop);
        }
      },

      // Copy initial stuff from the drop down.
      setInitial: function() {

        if (this.element.is(':disabled')) {
          this.disable();
        }
        if (this.element.is('[readonly]')) {
          this.readonly();
        }
        if (this.isHidden) {
          this.pseudoElem.hide().prev('label').hide();
          this.pseudoElem.next('svg').hide();
        }

        //TODO: Empty Selection
        if (this.element.attr('placeholder')) {
          this.pseudoElem.attr('placeholder', this.element.attr('placeholder'));
          this.element.removeAttr('placeholder');
        }
      },

      //Bind mouse and key events
      handleEvents: function() {
        var self = this;

        this.pseudoElem.on('keydown.dropdown', function(e) {
          self.ignoreKeys($(this), e);
          self.handleKeyDown($(this), e);
        }).on('keypress.dropdown', function(e) {
          self.ignoreKeys($(this), e);
          self.handleAutoComplete(e);
        }).on('click.dropdown', function(e) {
          e.stopPropagation();
        }).on('mouseup.dropdown', function(e) {
          if (e.button === 2) {
            return;
          }

          self.toggleList();
        }).on('touchend.dropdown touchcancel.dropdown', function(e) {
          e.stopPropagation();
          self.toggleList();
          e.preventDefault();
        });

        self.element.on('activated.dropdown', function () {
          self.label.trigger('click');
        }).on('updated.dropdown', function (e) {
          e.stopPropagation();
          self.updated();
        }).on('openlist.dropdown', function() {
          self.toggleList();
        });

        //for form resets.
        self.element.closest('form').on('reset.dropdown', function() {
          setTimeout(function () {
            self.element.triggerHandle('updated');
          }, 1);
        });

        //Handle Label click
        this.label.onTouchClick().on('click', function () {
          self.pseudoElem.focus();
        });

      },

      ignoreKeys: function (input, e) {
        var charCode = e.which;

        //Needed for browsers that use keypress events to manipulate the window.
        if (e.altKey && (charCode === 38 || charCode === 40)) {
          e.stopPropagation();
          e.preventDefault();
          return false;
        }

        if (charCode === 8 && input.hasClass('dropdown')) {
          e.stopPropagation();
          e.preventDefault();
          return false;
        }

        if (input.is(':disabled') || input.hasClass('is-readonly')) {
          return;
        }

        return true;
      },

      //handle events while search is focus'd
      handleSearchEvents: function () {
        var self = this, timer;

        if (this.settings.noSearch) {
          this.searchInput.prop('readonly', true);
        }

        // Used to determine how spacebar should function.  False means space will select/deselect.  True means
        // Space will add a space inside the search input.
        this.searchKeyMode = false;

        this.searchInput.on('keydown.dropdown', function(e) {
          var searchInput = $(this);

          if (!self.ignoreKeys(searchInput, e)) {
            return;
          }

          if (!self.handleKeyDown(searchInput, e)) {
            return;
          }

          if (self.settings.noSearch === false && !self.settings.source) {
            clearTimeout(timer);
            timer = setTimeout(function () {
              if (searchInput.val() === '') {
                self.resetList();
              } else {
                self.filterList(searchInput.val().toLowerCase());
              }
            }, 100);
          }
        }).on('keypress.dropdown', function (e) {
          self.isFiltering = true;
          self.handleAutoComplete(e);
        });

      },

      filterList: function(term) {
        var self = this,
          selected = false;

        if (!term) {
          term = '';
        }

        this.list.addClass('search-mode');
        this.list.find('.icon').attr('class', 'icon search').changeIcon('search');

        this.listUl.find('li').hide();
        this.searchInput.removeAttr('aria-activedescendant');

        this.unhighlightOptions();

        //var highlighted = $();
        $.each(this.element[0].options, function () {
          //Filter List
          var opt = $(this),
            text = opt.text(),
            listOpt = self.listUl.find('li[data-val="'+ opt.val() +'"]'),
            containsTerm = false;

          // Match the search term to a portion or all of the list option
          if (text && text.toString().toUpperCase().indexOf(term.toUpperCase()) !== -1) {
            containsTerm = true;
          }

          //Find List Item - Starts With
          if (containsTerm) {
            if (!selected) {
              self.highlightOption(listOpt);
              selected = true;
            }

            //Highlight Term
            var exp = new RegExp('(' + term + ')', 'i');
            text = listOpt.text().replace(exp, '<i>$1</i>');
            listOpt.show().children('a').html(text);
          }
        });

        term = '';

        //Adjust height / top position
        if (self.list.hasClass('is-ontop')) {
          self.list.css({'top': self.pseudoElem.offset().top - self.list.height() + self.pseudoElem.outerHeight() - 2});
        }
      },

      // Removes filtering from an open Dropdown list and turns off "search mode"
      resetList: function() {
        var cssClass = 'icon' + (this.isMobile() ? ' close' : ''),
          icon = $.getBaseURL(this.isMobile() ? 'close' : 'dropdown');

        this.list.removeClass('search-mode');
        this.list.find('.icon').attr('class', cssClass) // needs to be 'attr' here because .addClass() doesn't work with SVG
          .changeIcon(icon);

        function stripHtml(obj) {
          if (!obj[0]) {
            return '';
          }

          return obj[0].textContent || obj[0].innerText;
        }

        var lis = this.listUl.find('li');
        lis.removeAttr('style').each(function() {
          var a = $(this).children('a');
          a.text(stripHtml(a));
        });

        //Adjust height / top position
        if (this.list.hasClass('is-ontop')) {
          this.list.css({'top': this.pseudoElem.offset().top - this.list.height() + this.pseudoElem.outerHeight() - 2});
        }

        if (this.settings.multiple) {
          this.updateList();
        }
      },

      selectBlank: function() {
        var blank = this.element.find('option').filter(function() {
          return !this.value || $.trim(this.value).length === 0;
        });

        if (blank.length > 0) {
          blank[0].selected = true;
          this.element.triggerHandler('updated').triggerHandler('change');
        }

      },

      handleKeyDown: function(input, e) {
        var selectedIndex = this.element[0].selectedIndex,
            options = this.element[0].options,
            key = e.which,
            self = this,
            excludes = 'li:visible:not(.separator):not(.group-label):not(.is-disabled)',
            next;

        //Down arrow, Up arrow, or Spacebar to open
        if (!self.isOpen() && (key === 38 || key === 40 || key === 32)) {
          self.toggleList();
          return;
        }

        if (self.isOpen()) {
          options = this.listUl.find(excludes);
          selectedIndex = -1;
          $(options).each(function(index) {
            if ($(this).is('.is-focused')) {
              selectedIndex = index;
            }
          });
        }

        switch (key) {
          case 37: //backspace
          case 8: //del & backspace
          case 46: { //del

            if (!self.isOpen()) {
              self.selectBlank();
              // Prevent Backspace from returning to the previous page.
              e.stopPropagation();
              e.preventDefault();
              return false;
            }
            break;
          }
          case 9: {  //tab - save the current selection
            // If "search mode" is currently off, Tab should turn this mode on and place focus back
            // into the SearchInput.  If search mode is on, Tab should 'select' the currently highlighted
            // option in the list, update the SearchInput and close the list.
            if (self.isOpen()) {
              self.closeList(false);
              this.activate();
            }
            // allow tab to propagate otherwise
            return true;
          }
          case 27: { //Esc - Close the Combo and Do not change value
            if (self.isOpen()) {
              // Close the option list
              self.closeList(true);
              self.activate();
              e.stopPropagation();
              return false;
            }
            // Allow Esc to propagate if the menu was closed, since some other Controls
            // that rely on dropdown may need to trigger routines when the Esc key is pressed.
            break;
          }
          case 32: // spacebar // TODO: Figure Out what to do about using Spacebar.
          case 13: { //enter
            if (self.isOpen()) {
              if (key === 32 && self.searchKeyMode === true) {
                break;
              }

              e.preventDefault();
              self.selectOption($(options[selectedIndex])); // store the current selection
              if (self.settings.closeOnSelect) {
                self.closeList(false);  // Close the option list
                self.activate();
              }
            }
            e.stopPropagation();
            return false;
          }
          case 38: {  //up
            if (e.shiftKey) {
              return;
            }
            this.searchKeyMode = false;

            if (selectedIndex > 0) {
              next = $(options[selectedIndex - 1]);
              this.highlightOption(next);
              // NOTE: Do not also remove the ".is-selected" class here!  It's not the same as ".is-focused"!
              // Talk to ed.coyle@infor.com if you need to know why.
              next.parent().find('.is-focused').removeClass('is-focused');
              next.addClass('is-focused');
            }

            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          case 40: {  //down
            if (e.shiftKey) {
              return;
            }
            this.searchKeyMode = false;

            if (selectedIndex < options.length - 1) {
              next = $(options[selectedIndex + 1]);
              this.highlightOption(next);
              // NOTE: Do not also remove the ".is-selected" class here!  It's not the same as ".is-focused"!
              // Talk to ed.coyle@infor.com if you need to know why.
              next.parent().find('.is-focused').removeClass('is-focused');
              next.addClass('is-focused');
            }

            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          case 35: { //end
            this.searchKeyMode = false;

            var last = $(options[options.length - 1]);
            this.highlightOption(last);

            e.stopPropagation();
            return false;
          }
          case 36: {  //home
            this.searchKeyMode = false;

            var first = $(options[0]);
            this.highlightOption(first);

            e.stopPropagation();
            return false;
          }
        }

        if (self.isOpen() && self.isControl(key) && key !== 8) {
          return false;
        }

        self.initialFilter = false;

        if (!self.isOpen() && !self.isControl(key) && !this.settings.source) {
          //Make this into Auto Complete
          self.initialFilter = true;
          self.isFiltering = true;
          self.filterTerm = $.actualChar(e);
          self.searchInput.val($.actualChar(e));
          self.toggleList();
        }

        this.searchKeyMode = true;
        self.searchInput.attr('aria-activedescendant', '');
        return true;
      },

      timer: null,
      filterTerm: '',

      handleAutoComplete: function(e) {
        var self = this;
        clearTimeout(this.timer);

        if (!self.settings.source) {
          return;
        }

        self.initialFilter = true;
        self.filterTerm += $.actualChar(e);

        this.timer = setTimeout(function () {
          if (!self.isOpen()) {
            self.searchInput.val(self.filterTerm);
            self.toggleList();
          } else {
            self.callSource(function () {
              self.filterList(self.searchInput.val().toLowerCase());
            });
          }
        }, self.settings.delay);
      },

      isControl: function(keycode) {
        var valid =
          (keycode > 7 && keycode < 48)   || // control chars
          (keycode > 90 && keycode < 94)   || // windows keys
          (keycode > 111 && keycode < 146);  // function keys

          return valid;
      },

      // Focus the Element
      activate: function (useSearchInput) {
        var self = this,
          input = this.pseudoElem;
        if (useSearchInput) {
          input = this.searchInput;
        }

        if (useSearchInput && (input.hasClass('is-readonly') || input.prop('readonly') === true)) {
          return;
        }

        function selectText() {
          if (self.isMobile()) {
            return;
          }

          if (input[0].setSelectionRange) {
            input[0].setSelectionRange(0, input[0].value.length);  //scroll to left
          } else {
            if (input[0].tagName === 'INPUT') { // using Search Input instead of Pseudo Div
              input[0].select();
            }
          }
        }

        selectText();

        if (document.activeElement !== input[0] && $(document.activeElement).is('body')) {
          input[0].focus();
        }
      },

      // Retrieves a string containing all text for currently selected options delimited by commas
      getOptionText: function(opts) {
        var text = '';

        if (!opts) {
          opts = this.element.find('option:selected');
        }

        opts.each(function() {
          if (text.length > 0) {
            text += ', ';
          }
          text += $(this).text();
        });

        return text;
      },

      // Prep for opening list,make ajax call ect...
      open: function() {
        var self = this;

        if (!this.inputTimer()) {
          return;
        }

        if (this.element.is(':disabled') || this.pseudoElem.hasClass('is-disabled') || this.pseudoElem.hasClass('is-readonly')) {
          return;
        }

        if (!self.callSource(function () {
          self.updateList();
          self.openList();
        })) {
          self.updateList();
          this.openList();
        }
      },

      // Actually Show The List
      openList: function () {
        var current = this.previousActiveDescendant ? this.list.find('.dropdown-option[data-val="'+ this.previousActiveDescendant +'"]') : this.list.find('.is-selected'),
          self =  this,
          touchPrevented = false,
          threshold = 10,
          pos;

        if (current.length > 0) {
          current = current.eq(0);
        }

        $('head').triggerHandler('disable-zoom');

        // Persist the "short" input field
        var isShort = (this.element.closest('.field-short').length === 1);

        this.pseudoElem
          .attr('aria-expanded', 'true')
          .addClass('is-open');

        this.pseudoElem.attr('aria-label', this.label.text());
        this.searchInput.attr('aria-activedescendant', current.children('a').attr('id'));

        //Close oother drop downs.
        $('select').each(function () {
          var data = $(this).data();
          if (data.dropdown) {
            data.dropdown.closeList();
          }
        });

        this.list.appendTo('body').show();

        //In a grid cell
        this.isInGrid = this.pseudoElem.closest('.datagrid-row').length === 1;

        if (this.isInGrid) {
          var rowHeight = this.pseudoElem.closest('.datagrid-row').attr('class').replace('datagrid-row  ', '');
          this.list.addClass('datagrid-dropdown-list ' + rowHeight);
        }

        if (this.pseudoElem.closest('.datagrid-filter-wrapper').length === 1) {
          this.list.addClass('datagrid-filter-dropdown');
        }

        var cssClass = this.settings.cssClass;
        if (cssClass && typeof cssClass === 'string') {
          this.list.addClass(cssClass);
        }

        this.position();

        if (this.initialFilter) {
          setTimeout(function () {
            self.searchInput.val(self.filterTerm);
            self.filterList(self.searchInput.val());
          }, 0);
          this.initialFilter = false;
        } else {
          // Change the values of both inputs and swap out the active descendant
          this.searchInput.val(this.pseudoElem.text());
        }

        var noScroll = this.settings.multiple;
        this.highlightOption(current, noScroll);
        if (this.settings.multiple && this.listUl.find('.is-selected').length > 0) {
          this.highlightOption(this.listUl.find('.dropdown-option').eq(0));
          setTimeout(function() {
            self.listUl.scrollTop(0);
          }, 0);
        }

        if (!this.settings.multiple) {
          this.searchInput.val(current.find('a').text());
        }

        this.handleSearchEvents();
        this.activate(true); // Focus the Search Input
        this.element.trigger('listopened');

        // iOS-specific keypress event that listens for when you click the "done" button
        if (this.isMobile()) {
          self.searchInput.on('keypress.dropdown', function(e) {
            if (e.which === 13) {
              self.closeList();
            }
          });
        }

        function listItemClickHandler(e) {
          var target = $(e.target),
            ddOption = target.closest('li.dropdown-option');

          if (ddOption.length) {
            target = ddOption;
          }

          e.preventDefault();
          e.stopPropagation();

          var val = target.attr('data-val'),
            cur = self.element.find('option[value="'+ val +'"]');
          //Try matching the option's text if 'cur' comes back empty or overpopulated.
          //Supports options that don't have a 'value' attribute.
          if (cur.length === 0 || cur.length > 1) {
            cur = self.element.find('option').filter(function() {
              return $(this).text() === val;
            });
          }

          //Select the clicked item
          if (cur.is(':disabled')) {
            return false;
          }
          self.selectOption(cur);

          if (self.settings.closeOnSelect) {
            self.closeList();
          }

          if (self.isMobile()) {
            return true;
          }

          self.activate(!self.settings.closeOnSelect);
          return true;
        }

        self.list
          .removeClass('dropdown-tall')
          .addClass(isShort ? 'dropdown-short' : '')
          .onTouchClick('list', 'li')
          .on('click.list', 'li', listItemClickHandler)
          .on('mouseenter.list', 'li', function() {
            var target = $(this);

            if (target.is('.separator, .group-label')) {
              return;
            }
          });

        // Some list-closing events are on a timer to prevent immediate list close
        // There would be several things to check with a setTimeout, so this is done with a CSS
        // class to keep things a bit cleaner
        setTimeout(function delayedListCloseEvents() {
          self.list.addClass('is-closable');
        }, 100);

        // Is the jQuery Element a component of the current Dropdown list?
        function isDropdownElement(target) {
          return target.closest('.dropdown, .multiselect').length > 0 ||
            target.closest('.dropdown-list').length > 0 ||
            self.touchmove === true; /*target.is('.dropdown, multiselect') /||
            target.is('.option-text') || target.is('.dropdown-option') ||
            target.is('.group-label') || target.is('.dropdown-search')  ||
            self.touchmove === true;*/
        }

        // Triggered when the user scrolls the page.
        // Ignores Scrolling on Mobile, and will not close the list if accessing an item within the list
        function scrollDocument(e) {
          if (touchPrevented || isDropdownElement($(e.target))) {
            return;
          }
          self.closeList();
        }

        // Triggered when the user clicks anywhere in the document
        // Will not close the list if the clicked target is anywhere inside the dropdown list.

        function clickDocument(e) {
          var target = $(e.target);
          if (touchPrevented || (isDropdownElement(target) && !target.is('.icon'))) {
            e.preventDefault();

            touchPrevented = false;
            return;
          }

          self.closeList();
        }

        function touchStartCallback(e) {
          touchPrevented = false;

          pos = {
            x: e.originalEvent.touches[0].pageX,
            y: e.originalEvent.touches[0].pageY
          };

          $(document).on('touchmove.dropdown', function touchMoveCallback(e) {
            var newPos = {
              x: e.originalEvent.touches[0].pageX,
              y: e.originalEvent.touches[0].pageY
            };

            if ((newPos.x >= pos.x + threshold) || (newPos.x <= pos.x - threshold) ||
                (newPos.y >= pos.y + threshold) || (newPos.y <= pos.y - threshold)) {
              touchPrevented = true;
            }
          });
        }

        function touchEndCallback(e) {
          $(document).off('touchmove.dropdown');
          e.preventDefault();

          if (touchPrevented) {
            return false;
          }

          clickDocument(e);
        }

        // Need to detect whether or not scrolling is happening on a touch-capable device
        // The dropdown list should not close on mobile if scrolling is occuring, but should close
        // if the user is simply tapping outside the list.
        $(document)
          .on('touchstart.dropdown', touchStartCallback)
          .on('touchend.dropdown touchcancel.dropdown', touchEndCallback)
          .on('click.dropdown', clickDocument);

        var parentScroll = self.element.closest('.scrollable').length ? self.element.closest('.scrollable') : $(document);
        parentScroll = self.element.closest('.scrollable-y').length ? self.element.closest('.scrollable-y') : parentScroll;
        parentScroll.on('scroll.dropdown', scrollDocument);

        // In mobile environments, bind against an orientation change.
        // in desktop environments, bind against window.resize
        if (window.orientation === undefined) {
          $('body').on('resize.dropdown', function() {
            self.closeList();
          });
        }

        $('head').triggerHandler('enable-zoom');
      },

      // Set size and positioning of the list
      position: function() {
        var isFixed = false, isAbs = false,
          top = (this.pseudoElem.offset().top),
          left = this.pseudoElem.offset().left - $(window).scrollLeft();

        // If we're lower than the Phone Breakpoint, reset everything for full-screen
        if (this.isFullScreen()) {
          top = 0;
        }

        this.list.css({'top': top, 'left': left});

        //Fixed and Absolute Positioning use cases
        this.pseudoElem.parentsUntil('body').each(function () {
          if ($(this).css('position') === 'fixed' && !$(this).is('.modal')) {
            isFixed = true;
            return;
          }
        });

        if (isFixed) {
          this.list.css('position', 'fixed');
        }

        if (this.pseudoElem.parent('.field').css('position') === 'absolute') {
          isAbs = true;
          this.list.css({'top': this.pseudoElem.parent('.field').offset().top + this.pseudoElem.prev('label').height() , 'left': this.pseudoElem.parent('.field').offset().left});
        }

        this.list.removeClass('is-ontop');

        //Flow up if not enough room on bottom
        var roomTop = top,
          roomBottom = $(window).height() - top - this.pseudoElem.outerHeight();

        if (roomTop > roomBottom && top - $(window).scrollTop() + this.list.outerHeight() > $(window).height()) {
          this.list.css({'top': top - this.list.outerHeight() + this.pseudoElem.outerHeight()});
          this.list.addClass('is-ontop');
          this.listUl.prependTo(this.list);
        }

        // If the menu is off the top of the screen, cut down the size of the menu to make it fit.
        if (this.list.offset().top < 0 ) {
          var listHeight = this.list.outerHeight(),
            diff = this.list.offset().top * -1;
          this.list.css('top', 0);
          this.list.height(listHeight - diff - 5);
        }

        // If the menu is off the bottom of the screen, cut up the size
        if (this.list.offset().top - $(window).scrollTop() + this.list.outerHeight() >  $(window).height()) {
          var newHeight = $(window).height() - this.list.offset().top - 5;
          this.list.height(newHeight);
        }

        //let grow or to field size.
        this.list.find('input').outerWidth(this.pseudoElem.outerWidth()-2);
        if (this.list.width() > this.pseudoElem.outerWidth() && !this.isInGrid) {
           this.list.css('width', '');
           this.list.css({'width': this.list.outerWidth() + 35});
           this.list.find('input').css({'width': this.list.outerWidth() + 35});

           //But not off the left side
           var maxWidth = $(window).width() - parseInt(this.list.css('left'), 10);
           if (this.list.width() > maxWidth) {
            this.list.width(maxWidth - 20);
           }
        } else {
          this.list.width(this.pseudoElem.outerWidth()-2);

          if (this.isInGrid) {
            this.list.width(this.pseudoElem.outerWidth());
          }
        }
      },

      // Alias that works with the global "closeChildren" method.  See "js/lifecycle.js"
      close: function() {
        return this.closeList();
      },

      //Close list and detach events
      closeList: function() {
        if (!this.list || !this.list.is(':visible') || !this.isListClosable()) {
          return;
        }

        if (!this.inputTimer()) {
          return;
        }

        if (this.touchmove) {
          this.touchmove = false;
        }

        this.filterTerm = '';
        this.searchInput.off('keydown.dropdown keypress.dropdown keypress.dropdown');

        this.list.hide().remove();
        this.list
          //.offTouchClick('list')
          .off('click.list touchmove.list touchend.list touchcancel.list mousewheel.list mouseenter.list');
        this.listUl.find('li').show();
        this.pseudoElem.removeClass('is-open').attr('aria-expanded', 'false');
        this.searchInput.removeAttr('aria-activedescendant');

        $(document)
          //.offTouchClick('dropdown')
          .off('click.dropdown scroll.dropdown touchmove.dropdown touchend.dropdown touchcancel.dropdown');

        $(window).off('resize.dropdown');
        this.element.trigger('listclosed');

        this.activate();
        //this.pseudoElem.focus();
      },

      //Set option into view
      scrollToOption: function(current) {
        var self = this;
        if (!current) {
          return;
        }
        if (current.length === 0) {
          return;
        }
        // scroll to the currently selected option
        self.listUl.scrollTop(0);
        self.listUl.scrollTop(current.offset().top - self.listUl.offset().top - self.listUl.scrollTop() - 40);
      },

      //Blur and Close List
      handleBlur: function() {
        var self = this;

        if (this.isOpen()) {
          this.timer = setTimeout(function() {
            self.closeList();
          }, 40);
        }

        return true;
      },

      // Return true/false if the list is open
      isOpen: function() {
        return this.list.is(':visible');
      },

      // Hide or Show list
      toggleList: function() {
        if (this.isOpen()) {
          this.closeList();
          return;
        }
        this.open();
      },

      highlightOption: function(listOption, noScroll) {
        if (!listOption) {
          return listOption;
        }

        if (listOption.length === 0) {
          listOption = this.list.find('.dropdown-option').eq(0);
        }

        // Get corresponding option from the list
        var option = this.element.find('option[value="' + listOption.attr('data-val') + '"]');

        if (option.hasClass('.is-disabled') || option.is(':disabled')) {
          return;
        }

        if (this.isOpen()) {
          this.list.find('.is-focused').removeClass('is-focused').attr({'tabindex':'-1'});
          listOption.addClass('is-focused').attr({'tabindex': '0'});

          // Set activedescendent for new option
          //this.pseudoElem.attr('aria-activedescendant', listOption.attr('id'));
          this.searchInput.attr('aria-activedescendant', listOption.children('a').attr('id'));

          if (!noScroll || noScroll === false || noScroll === undefined) {
            this.scrollToOption(listOption);
          }
        }

        return;
      },

      unhighlightOptions: function(listOptions, noScroll) {
        if (!listOptions || !listOptions.length) {
          listOptions = this.list.find('.is-selected');
        }

        listOptions.removeClass('is-focused').attr({'tabindex': '-1'});

        this.searchInput.removeAttr('aria-activedescendant');

        if (!noScroll || noScroll === false || noScroll === undefined) {
          this.scrollToOption(listOptions.first());
        }
      },

      //Select an option and optionally trigger events
      selectOption: function(option, noTrigger) {

        if (!option) {
          return option;
        }

        var li;
        if (option.is('li')) {
          li = option;
          option = this.element.find('option[value="' + option.attr('data-val') + '"]');

          //Try matching the option's text if 'cur' comes back empty.
          //Supports options that don't have a 'value' attribute.
          if (option.length === 0) {
            option = this.element.find('option').filter(function() {
              return $(this).text() === li.attr('data-val');
            });
          }
        }
        if (!li) {
          li = this.listUl.find('li[data-val="'+ option.val() +'"]');
        }

        if (option.hasClass('.is-disabled') || option.is(':disabled')) {
          return;
        }

        if (!this.settings.multiple && option.index() === this.element[0].selectedIndex) {
          return;
        }

        var code = option.val(),
          val = this.element.val(),
          oldText = this.pseudoElem.text(),
          text = '',
          trimmed = '',
          isAdded = true; // Sets to false if the option is being removed from a multi-select instead of added


        if (this.settings.multiple) {
          // Working with a select multiple allows for the "de-selection" of items in the list
          if (!val) {
            val = [];
          }
          if ($.inArray(code, val) !== -1) {
            val = $.grep(val, function(optionValue) {
              return optionValue !== code;
            });
            li.removeClass('is-selected');
            this.previousActiveDescendant = undefined;
            isAdded = false;
          } else {
            if (!isNaN(this.settings.maxSelected) && this.element.find('option:selected').length >= this.settings.maxSelected) {
              return;
            }

            val = typeof val === 'string' ? [val] : val;
            val.push(code);
            li.addClass('is-selected');
            this.previousActiveDescendant = option.val();
          }

          var newOptions = this.element.find('option').filter(function() {
            return $.inArray($(this)[0].value, val) !== -1;
          });
          text = this.getOptionText(newOptions);
        } else {
          // Working with a single select
          val = code;
          this.listUl.find('li.is-selected').removeClass('is-selected');
          li.addClass('is-selected');
          this.previousActiveDescendant = option.val();
          text = option.text();
        }

        this.element.find('option').each(function () {
          if (this.value === code) {
            this.selected = true;
            return false;
          }
        });

        // If we're working with a single select and the value hasn't changed, just return without
        // firing a change event
        if (text === oldText) {
          return;
        }

        // Change the values of both inputs and swap out the active descendant
        this.pseudoElem.find('span').text(text);
        this.searchInput.val(text);

        if (this.element.attr('maxlength')) {
          trimmed = text.substr(0, this.element.attr('maxlength'));
          this.pseudoElem.find('span').text(trimmed);
          this.searchInput.val(trimmed);
        }

        // Fire the change event with the new value if the noTrigger flag isn't set
        if (!noTrigger) {
          this.element.val(val).trigger('change').triggerHandler('selected', [option, isAdded]);
        }

        // If multiselect, reset the menu to the unfiltered mode
        if (this.settings.multiple) {
          if (this.list.hasClass('search-mode')) {
            this.resetList();
          }
          this.activate(true);
        }

        this.setBadge(option);
      },

      setBadge: function (option) {
        //Badge Support
        if (this.badges) {
          var badge = this.element.parent().find('.badge');

          if (badge.length === 0) {
            this.element.parent().find('.dropdown-wrapper').append('<span class="badge">1</span>');
            badge = this.element.parent().find('.badge');
          }

          badge.attr('class', 'badge ' + (option.attr('data-badge-color') ? option.attr('data-badge-color') : 'azure07'))
            .text(option.attr('data-badge'));
        }
      },

      // Execute the source ajax option
      callSource: function(callback) {
        var self = this, searchTerm = '';

        if (this.settings.source) {
          searchTerm = self.searchInput.val();

          if (!this.isFiltering) {
            searchTerm = '';
          }
          this.isFiltering = false;

          var sourceType = typeof this.settings.source,
            response = function (data) {
            //to do - no results back do not open.
            var list = '',
              val = self.element.val();

            function buildOption(option) {
              var isString = typeof option === 'string';

              if (option !== null && option !== undefined) {
                list += '<option' + (option.id === undefined ? '' : ' id="' + option.id.replace('"', '\'') + '"') +
                        (option.value !== undefined ? ' value="' + option.value.replace('"', '\'') + '"' : isString ? ' value="' + option.replace('"', '\'') + '"' : '') +
                        (option.value === val || option.selected ? ' is-selected ' : '') +
                        '>'+ (option.label !== undefined ? option.label : option.value !== undefined ? option.value : isString ? option : '') + '</option>';
              }
            }

            //populate
            self.element.empty();
            for (var i=0; i < data.length; i++) {
              var opts;

              if (data[i].group) {
                opts = data[i].options;
                list += '<optgroup label="' + data[i].group + '">';
                for (var ii = 0; ii < opts.length; ii++) {
                  buildOption(opts[ii]);
                }
                list += '</optgroup>';
              } else {
                buildOption(data[i]);
              }
            }

            self.element.append(list);
            self.updateList();
            self.pseudoElem.removeClass('is-busy');
            self.element.trigger('requestend', [searchTerm, data]);
            callback();
            return;
          };

          //TODO: show indicator when we have it
          self.pseudoElem.addClass('is-busy');
          self.element.trigger('requeststart');

          if (sourceType === 'function') {
            // Call the 'source' setting as a function with the done callback.
            this.settings.source(response, searchTerm);
          } else if (sourceType === 'object') {
            // Use the 'source' setting as pre-existing data.
            // Sanitize accordingly.
            var sourceData = $.isArray(this.settings.source) ? this.settings.source : [this.settings.source];
            response(sourceData);
          } else {
            // Attempt to resolve source as a URL string.  Do an AJAX get with the URL
            var sourceURL = this.settings.source.toString(),
              request = $.getJSON(sourceURL);

            request.done(function(data) {
              response(data);
            }).fail(function() {
              response([]);
            });
          }

          return true;
        }
        return false;
      },

      // External Facing function to set value by code - Depricated set on select and trigger updated
      setCode: function(code) {
        var self = this,
          doSetting = function ()  {
            var option = null;

            self.element.find('option').each(function () {
              if (this.value === code) {
                option = $(this);
              }
            });

            self.selectOption(option, true);
          };

        if (!self.callSource(doSetting)) {
          doSetting();
        }
      },

      isMobile: function() {
        return $('html').is('.ios, .android');
      },

      // Used to determine whether or not we need to show the full-screen dropdown
      isFullScreen: function() {
        return this.isMobile() && $(window).width() < 767;
      },

      isListClosable: function() {
        return this.list.hasClass('is-closable');
      },

      disable: function() {
        this.element
          .prop('disabled', true)
          .prop('readonly', false);

        if (this.pseudoElem.is($(document.activeElement))) {
          this.pseudoElem.blur();
        }

        this.pseudoElem
          .addClass('is-disabled')
          .removeClass('is-readonly')
          .attr('tabindex', '-1')
          .prop('readonly', false)
          .prop('disabled', true);
        this.closeList();
      },

      enable: function() {
        this.element
          .prop('disabled', false)
          .prop('readonly', false);
        this.pseudoElem
          .prop('disabled', false)
          .prop('readonly', false)
          .attr('tabindex', '0')
          .removeClass('is-disabled')
          .removeClass('is-readonly');
      },

      readonly: function() {
        this.element
          .prop('disabled', false)
          .prop('readonly', true);
        this.pseudoElem
          .removeClass('is-disabled')
          .addClass('is-readonly')
          .attr('tabindex', '0')
          .prop('disabled', false)
          .prop('readonly', true);
        this.closeList();
      },

      // Triggered whenever the plugin's settings are changed
      updated: function() {
        this.closeList();

        // Update the 'multiple' property
        if (this.settings.multiple && this.settings.multiple === true) {
          this.element.prop('multiple', true);
        } else {
          this.element.prop('multiple', false);
        }

        // update "readonly" prop
        if (this.element.prop('readonly') === true) {
          this.readonly();
        } else {
          this.pseudoElem.removeClass('is-readonly')/*.prop('readonly', false)*/;
        }

        // update "disabled" prop
        this.pseudoElem[ this.element.prop('disabled') ? 'addClass' : 'removeClass' ]('is-disabled');

        // update the list and set a new value, if applicable
        this.updateList();
        this.setValue();

        this.element.trigger('has-updated');

        return this;
      },

      destroy: function() {
        $.removeData(this.element[0], pluginName);
        this.closeList();
        this.label.remove();
        this.pseudoElem.off().remove();
        this.icon.remove();
        this.wrapper.remove();
        this.element.removeAttr('style');
      }

    };

    // Keep the Chaining and Init the Controls or Settings
    return this.each(function() {
      var instance = $.data(this, pluginName);

      if (instance) {
        instance.settings = $.extend({}, settings, instance.settings);
        instance.updated();
      } else {
        instance = $.data(this, pluginName, new Dropdown(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
