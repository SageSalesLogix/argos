/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Datagrid Control
*/

window.Formatters = {

  Text: function(row, cell, value) {
    var str = ((value === null || value === undefined || value === '') ? '' : value.toString());
    return str;
  },

  Ellipsis: function(row, cell, value, col) {
    var str = ((value === null || value === undefined || value === '') ? '' : value.toString());
    col.textOverflow = 'ellipsis';
    return str;
  },

  Password: function(row, cell, value) {
    var str = ((value === null || value === undefined || value === '') ? '' : value.toString());
    return str.replace(/./g, '*');
  },

  Readonly: function(row, cell, value) {
    return '<span class="is-readonly">' + ((value === null || value === undefined) ? '' : value) + '</span>';
  },

  Date: function(row, cell, value, col) {
    var formatted = ((value === null || value === undefined) ? '' : value);

    if (!value) {
       return '';
    }

    if (typeof value === 'string') {
      var value2 = Locale.parseDate(value, (typeof col.dateFormat === 'string' ? {pattern: col.dateFormat}: col.dateFormat));
      if (value2) {
        formatted = Locale.formatDate(value2, (typeof col.dateFormat === 'string' ? {pattern: col.dateFormat}: col.dateFormat));
      } else {
		    formatted = Locale.formatDate(value, (typeof col.dateFormat === 'string' ? {pattern: col.dateFormat}: col.dateFormat));
      }
    } else {
      formatted = Locale.formatDate(value, (typeof col.dateFormat === 'string' ? {pattern: col.dateFormat}: col.dateFormat));
    }

    if (!col.editor) {
      return formatted;
    }
    return '<span class="trigger">' + formatted + '</span>' + $.createIcon({ icon: 'calendar', classes: ['icon-calendar'] });
  },

  Autocomplete: function(row, cell, value) {
    var formatted = ((value === null || value === undefined) ? '' : value);
    return formatted;
  },

  Lookup: function(row, cell, value, col, item) {
    var formatted = ((value === null || value === undefined) ? '' : value);

    if (!col.editor) {
      return formatted;
    }

    if (col.editorOptions && typeof col.editorOptions.field === 'function') {
      formatted = col.editorOptions.field(item, null, null);
    }

    return '<span class="trigger">' + formatted + '</span>' + $.createIcon({ icon: 'search-list', classes: ['icon-search-list'] });
  },

  Decimal:  function(row, cell, value, col) {
    var formatted;

    formatted = value;

    if (typeof Locale !== undefined) {
       formatted = Locale.formatNumber(value, (col.numberFormat ? col.numberFormat : null));
    }

    formatted = ((formatted === null || formatted === undefined) ? '' : formatted);
    return formatted;
  },

  Integer:  function(row, cell, value, col) {
    var formatted;

    formatted = value;

    if (typeof Locale !== undefined) {
      formatted = Locale.formatNumber(value, (col.numberFormat ? col.numberFormat : {style: 'integer'}));
    }

    formatted = ((formatted === null || formatted === undefined) ? '' : formatted);
    return formatted;
  },

  Hyperlink: function(row, cell, value, col, item) {
    var colHref = (col.href ? col.href : '#');

    //Support for dynamic links based on content
    if (col.href && typeof col.href === 'function') {
      colHref = col.href(row, cell, item, col);
      //Passing a null href will produce "just text" with no link
      if (colHref == null) {
          return col.text ? col.text : value;
      }

    } else  {
      colHref = colHref.replace('{{value}}', value);
    }


    var textValue = (col.text ? col.text : value);
    if (!textValue) {
      return '';
    }

    return '<a href="' + colHref +'" tabindex="-1" role="presentation" class="hyperlink">' + textValue + '</a>';
  },

  Template: function(row, cell, value, col, item) {
    var tmpl = col.template,
      renderedTmpl = '';

    if (Tmpl && item && tmpl) {
      var compiledTmpl = Tmpl.compile('{{#dataset}}'+tmpl+'{{/dataset}}');
      renderedTmpl = compiledTmpl.render({dataset: item});
    }

    return renderedTmpl;
  },

  Drilldown: function () {
    var text = Locale.translate('Drilldown');

    if (text === undefined) {
      text = '';
    }

    return (
      '<button type="button" class="btn-icon small datagrid-drilldown">' +
         $.createIcon({icon: 'drilldown'}) +
        '<span>' + text + '</span>' +
      '</button>'
    );
  },

  Checkbox: function (row, cell, value, col) {
    var isChecked;

    // Use isChecked function if exists
    if (col.isChecked) {
      isChecked = col.isChecked(value);
    } else {
      //treat 1, true or '1' as checked
      isChecked = (value == undefined ? false : value == true); // jshint ignore:line
    }

    return '<div class="datagrid-checkbox-wrapper"><span role="checkbox" aria-label="'+ col.name +'" class="datagrid-checkbox ' +
     (isChecked ? 'is-checked' : '') +'" aria-checked="'+isChecked+'"></span></div>';
  },

  SelectionCheckbox: function (row, cell, value, col) {
    var isChecked = (value==undefined ? false : value == true); // jshint ignore:line
    return '<div class="datagrid-checkbox-wrapper"><span role="checkbox" aria-label="'+ col.name +'" class="datagrid-checkbox datagrid-selection-checkbox' +
     (isChecked ? 'is-checked' : '') +'" aria-checked="'+isChecked+'"></span></div>';
  },

  Actions: function (row, cell, value, col) {
    //Render an Action Formatter
    return (
      '<button type="button" class="btn-actions" aria-haspopup="true" aria-expanded="false" aria-owns="'+ col.menuId +'">' +
        '<span class="audible">'+ col.title +'</span>' +
        $.createIcon({ icon: 'more' }) +
      '</button>'
    );
  },

  // Multi Line TextArea
  Textarea: function (row, cell, value) {
    var formatted = ((value === null || value === undefined) ? '' : value);
    return '<span class="datagrid-textarea">'+ formatted + '</span>';
  },

  // Expand / Collapse Button
  Expander: function (row, cell, value) {
    var button = '<button type="button" class="btn-icon datagrid-expand-btn" tabindex="-1">'+
      '<span class="icon plus-minus"></span>' +
      '<span class="audible">' + Locale.translate('ExpandCollapse') + '</span>' +
      '</button>' + ( value ? '<span> ' + value + '</span>' : '');

    return button;
  },

  // Tree Expand / Collapse Button and Paddings
  Tree: function (row, cell, value, col, item) {
    var isOpen = item.expanded,
      button = '<button type="button" class="btn-icon datagrid-expand-btn' + (isOpen ? ' is-expanded' : '') + '" tabindex="-1"' +  (item.depth ? ' style="margin-left: ' + (item.depth ? (30* (item.depth -1)) + 'px' : '') + '"' : '') + '>'+
      '<span class="icon plus-minus'+ (isOpen ? ' active' : '') + '"></span>' +
      '<span class="audible">' + Locale.translate('ExpandCollapse') + '</span>' +
      '</button>' + ( value ? '<span> ' + value + '</span>' : ''),
      node = '<span class="datagrid-tree-node"' + (item.depth ? ' style="margin-left: ' + (item.depth ? (30* (item.depth-1)) + 'px' : '') + '"' : '') + '> ' + value + '</span>';

    return (item[col.children ? col.children : 'children'] ? button : node);
  },

  // Badge / Tags and Visual Indictors
  ClassRange: function (row, cell, value, col) {
    var ranges = col.ranges,
      classes = '', text='';

    if (!ranges) {
      return {};
    }

    for (var i = 0; i < ranges.length; i++) {
      if (value >= ranges[i].min && value <= ranges[i].max) {
        classes = ranges[i].classes;
        text = (ranges[i].text ? ranges[i].text : classes.split(' ')[0]);
      }

      if (value === ranges[i].value) {
        classes = ranges[i].classes;
        text = (ranges[i].text ? ranges[i].text : value);
      }
    }

    return {'classes': classes, 'text': text};
  },

  // Badge (Visual Indictors)
  Badge: function (row, cell, value, col) {
    var ranges = Formatters.ClassRange(row, cell, value, col);

    return '<span class="badge ' + ranges.classes +'">' + value +' <span class="audible">'+ ranges.text+ '</span></span>';
  },

  // Tags (low priority)
  Tag: function (row, cell, value, col) {
    var ranges = Formatters.ClassRange(row, cell, value, col);
    return '<span class="tag ' + ranges.classes +'">'+ value + '</span>';
  },

  Alert: function (row, cell, value, col) {
    var ranges = Formatters.ClassRange(row, cell, value, col);
    var icon = $.createIcon({
      icon: ranges.classes, classes: [
        'icon',
        'datagrid-alert-icon',
        'icon-' + ranges.classes
      ]
    });
    return icon + '<span class="datagrid-alert-text">' + (ranges.text === 'value' ? value : ranges.text) + '</span>';
  },

  Image: function (row, cell, value, col) {

    return '<img class="datagrid-img"' + ' src="' + value +'" alt= "' + (col.alt ? col.alt : Locale.translate('Image')) +
     '"' + (col.dimensions ? ' style="height:'+col.dimensions.height+';width:'+col.dimensions.height+'"' : '') + '/>';
  },

  Color: function (row, cell, value, col) {
    var ranges = Formatters.ClassRange(row, cell, value, col),
      text = ((value === null || value === undefined || value === '') ? '' : value.toString());

    return '<span class="' + ranges.classes + '">' + text + '</span>';
  },

  Button: function (row, cell, value, col) {
    var text = col.text ? col.text : ((value === null || value === undefined || value === '') ? '' : value.toString()),
      markup ='<button type="button" class="'+ ( col.icon ? 'btn-icon': 'btn') + '  row-btn ' + (col.cssClass ? col.cssClass : '') + '">';

      if (col.icon) {
        markup += $.createIcon({ icon: col.icon, file: col.iconFile });
      }
      markup += '<span>' + text + '</span></button>';
    return markup;
  },

  Dropdown: function (row, cell, value, col) {
    var formattedValue = value, compareValue, i, option, optionValue;

    if (col.options && value !== undefined) {
      compareValue = col.caseInsensitive && typeof value === 'string' ? value.toLowerCase() : value;

      for (i = 0; i < col.options.length; i++) {
        option = col.options[i];
        optionValue = col.caseInsensitive && typeof option.value === 'string' ? option.value.toLowerCase() : option.value;

        if (optionValue === compareValue) {
          formattedValue = option.label;
          break;
        }
      }
    }

    return '<span class="trigger">' + formattedValue + '</span>' + $.createIcon({ icon: 'dropdown' });
  },

  Favorite: function (row, cell, value, col) {
    var isChecked;

    // Use isChecked function if exists
    if (col.isChecked) {
      isChecked = col.isChecked(value);
    } else {
      isChecked = (value == undefined ? false : value == true); // jshint ignore:line
    }

    return !isChecked ? '' : '<span class="audible">'+ Locale.translate('Favorite') + '</span><span class="icon-favorite">' + $.createIcon({ icon: 'star-filled' }) + '</span>';
  },

  Status: function (row, cell, value, col, item) {

    if (!item.rowStatus) {
      return '<span>&nbsp;</span>';
    }

    return $.createIcon({ icon: item.rowStatus.icon, classes: ['icon', 'icon-' + item.rowStatus.icon, 'datagrid-alert-icon'] }) + '<span class="audible">' + item.rowStatus.text + '</span>';
  },

  // Possible future Formatters
  // Image?
  // Tree
  // Multi Select
  // Lookup
  // Re Order - Drag Indicator
  // Sparkline
  // Progress Indicator (n of 100%)
  // Process Indicator
  // Currency
  // Percent
  // File Upload (Simple)
  // Menu Button
  // Icon Button (Approved and SoHo Xi Standard)
  // Toggle Button (No)
  // Color Picker (Low)
};

window.Editors = {

  //Supports, Text, Numeric, Integer via mask
  Input: function(row, cell, value, container, column, e, api, item) {

    this.name = 'input';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<input type="'+ (column.inputType ? column.inputType : 'text') +'"/>')
        .appendTo(container);

      if (column.align) {
        this.input.addClass('l-'+ column.align +'-text');
      }

      if (column.maxLength) {
        this.input.attr('maxlength', column.maxLength);
      }

      if (column.mask && typeof column.mask === 'function') {
        var mask = column.mask(row, cell, value, column, item);
        this.input.mask({pattern: mask, mode: column.maskMode});
      } else if (column.mask) {
        this.input.mask({pattern: column.mask, mode: column.maskMode});
      }
    };

    this.val = function (value) {
      if (value) {
        this.input.val(value);
      }
      return this.input.val();
    };

    this.focus = function () {
      this.input.focus().select();
    };

    this.destroy = function () {
      var self = this;
      setTimeout(function() {
        self.input.remove();
      }, 0);
    };

    this.init();
  },

  Textarea: function(row, cell, value, container, column) {

    this.name = 'textarea';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<textarea class="textarea"></textarea>').appendTo(container);

      if (column.maxLength) {
        this.input.attr('maxlength', column.maxLength);
      }

    };

    this.val = function (value) {
      if (value) {
        //note that focus will help move text to end of input.
        this.input.focus().val(value);
      }
      return this.input.val();
    };

    this.focus = function () {
      this.input.focus();
    };

    this.destroy = function () {
      var self = this;
      setTimeout(function() {
        self.input.remove();
      }, 0);
    };

    this.init();
  },

  Checkbox: function(row, cell, value, container, column, event, grid) {

    this.name = 'checkbox';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<input type="checkbox" class="checkboxn"/>').appendTo(container);
      this.input.after('<label class="checkbox-label">&nbsp;</label>');

      if (column.align) {
        this.input.addClass('l-'+ column.align +'-text');
      }
    };

    this.val = function (value) {
      var isChecked;

      if (value === undefined) {
        return this.input.prop('checked');
      }

      // Use isChecked function if exists
      if (column.isChecked) {
        isChecked = column.isChecked(value);
      } else {
        isChecked = value;
      }

      if (event.type === 'click' || (event.type === 'keydown' && event.keyCode === 32)) {
        //just toggle it
        isChecked = !isChecked;
        grid.setNextActiveCell(event);
      }

      this.input.prop('checked', isChecked);
    };

    this.focus = function () {
      this.input.trigger('focusout');
    };

    this.destroy = function () {
      var self = this;
      setTimeout(function() {
        self.input.next('.checkbox-label').remove();
        self.input.remove();
      }, 0);
    };

    this.init();
  },

  Dropdown: function(row, cell, value, container, column, event, grid) {

    this.name = 'dropdown';
    this.originalValue = value;
    this.useValue = true; //use the data set value not cell value
    this.cell = grid.activeCell;

    this.init = function () {
      //Uses formatter
      this.input = $('<select class="dropdown"></select>').appendTo(container);
      this.select = this.input;

      if (column.options) {
        var html, opt, optionValue;
        var compareValue = column.caseInsensitive && typeof value === 'string' ? value.toLowerCase() : value;

        for (var i = 0; i < column.options.length; i++) {
          html = $('<option></<option>');
          opt = column.options[i];
          optionValue = column.caseInsensitive && typeof opt.value === 'string' ? opt.value.toLowerCase() : opt.value;

          if (opt.selected || compareValue === optionValue) {
            html.attr('selected', 'true');
          }

          html.attr('value', opt.value).attr('id', opt.id).attr('data-type', typeof opt.value);
          html.text(opt.label);
          this.input.append(html);
        }
      }

      var editorOptions = column.editorOptions;
      if (!editorOptions || (editorOptions && !editorOptions.cssClass)) {
        editorOptions = $.extend(column.editorOptions, {'cssClass': 'is-editing'});
      }
      this.input.dropdown(editorOptions);
      this.input = this.input.parent().find('div.dropdown');
    };

    this.val = function (value) {
      var self = this;

      if (value !== undefined) {
        var compareValue = column.caseInsensitive && typeof value === 'string' ? value.toLowerCase() : value;
        this.input.val(value);

        this.select.find('option').each(function () {
          var opt = $(this), valueAttr = opt.attr('value'), type = opt.attr('data-type');
          var optionValue = valueAttr;

          // Get option value in proper type before checking equality
          if (type === 'number') {
            optionValue = parseFloat(valueAttr);
          } else if (type === 'boolean') {
            optionValue = valueAttr === 'true';
          } else if (type === 'string' && column.caseInsensitive) {
            optionValue = valueAttr.toLowerCase();
          }

          if (optionValue === compareValue) {
            opt.attr('selected', 'true');
            self.input.val(opt.text());
          }
        });
      }

      var selected = this.select.find(':selected'),
        val = selected.attr('value'), dataType = selected.attr('data-type');

      // For non-string option values (number, boolean, etc.), convert string attr value to proper type
      if (dataType === 'number') {
        val = parseFloat(val);
      } else if (dataType === 'boolean') {
        val = val === 'true';
      }

      if (val === undefined) {
        val = selected.text();
      }

      return val;
    };

    this.focus = function () {
      var self = this;

      //Check if isClick or cell touch and just open the list
      this.select.trigger('openlist');

      this.select.on('listclosed', function () {
        if (grid.activeCell.cell === self.cell.cell && grid.activeCell.row === self.cell.row) {
         self.input.trigger('focusout');
         container.parent().trigger('focus');
        } else {
          grid.commitCellEdit(self.input);
        }
        grid.setNextActiveCell(event);
      });

    };

    this.destroy = function () {
      //We dont need to destroy since it will when the list is closed
    };

    this.init();
  },

  Date: function(row, cell, value, container, column, event, grid) {

    this.name = 'date';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<input class="datepicker"/>').appendTo(container);
      this.input.datepicker(column.editorOptions ? column.editoroptions : {dateFormat: column.dateFormat});
    };

    this.val = function (value) {
      if (value) {
        //Note that the value should be formatted from the formatter.
        this.input.val(value);
      }

      return this.input.val();
    };

    this.focus = function () {
      var self = this;

      this.input.select().focus();

      //Check if isClick or cell touch and just open the list
      if (event.type === 'click') {
        this.input.parent().find('.icon').trigger('click');
        this.input.closest('td').addClass('is-focused');
      }

      this.input.on('listclosed', function () {
        self.input.closest('td').removeClass('is-focused');

        setTimeout(function () {
          self.input.trigger('focusout');
          container.parent().focus();
          grid.setNextActiveCell(event);
        }, 1);

      });

    };

    this.destroy = function () {
      var self = this;
      setTimeout(function() {
        self.input.remove();
      }, 0);
    };

    this.init();

  },

  Lookup: function(row, cell, value, container, column, event, grid) {
    this.name = 'lookup';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<input class="lookup" data-init="false" />').appendTo(container);

      if (column.maxLength) {
        this.input.attr('maxlength', column.maxLength);
      }

      this.input.lookup(column.editorOptions);
    };

    this.val = function (value) {
      return value ? this.input.val(value) : this.input.val();
    };

    this.focus = function () {
      var self = this,
        api = self.input.data('lookup'),
        td = self.input.closest('td');

      // Using keyboard
      if (event.type === 'keydown') {
        self.input.select().focus();
        td.on('keydown.editorlookup', function (e) {
          if (e.keyCode === 40 && grid.quickEditMode) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
      }

      //Check if isClick or cell touch and just open the list
      if (event.type === 'click') {
        if ($(event.target).is('svg')) {
          api.openDialog(event);
        } else {
          self.input.select().focus();
          td.on('touchcancel.editorlookup touchend.editorlookup', '.trigger', function() {
            api.openDialog();
          });
        }
      }

      // Update on change from lookup
      self.input.on('change', function () {
        setTimeout(function () {
          container.parent().focus();
          grid.setNextActiveCell(event);
          grid.quickEditMode = false;
        }, 1);
      });

    };

    this.destroy = function () {
      var self = this,
        td = this.input.closest('td');
      setTimeout(function() {
        td.off('keydown.editorlookup')
          .find('.trigger').off('touchcancel.editorlookup touchend.editorlookup');
        self.input.remove();
      }, 0);
    };

    this.init();
  },

  Autocomplete: function(ow, cell, value, container, column, event, grid) {
    this.name = 'autocomplete';
    this.originalValue = value;

    this.init = function () {
      this.input = $('<input class="autocomplete datagrid-autocomplete" data-autocomplete="source" />').appendTo(container);

      if (!column.editorOptions) {
        column.editorOptions = {};
      }
      column.editorOptions.width = container.parent().width();
      column.editorOptions.offset = {};
      column.editorOptions.offset.left = -20;
      column.editorOptions.offset.top = 11;

      if (column.maxLength) {
        this.input.attr('maxlength', column.maxLength);
      }

      this.input.autocomplete(column.editorOptions);
    };

    this.val = function (value) {
      return value ? this.input.val(value) : this.input.val();
    };

    this.focus = function () {
      grid.quickEditMode = true;
      this.input.select().focus();
    };

    this.destroy = function () {
      var self = this;
      setTimeout(function() {
        grid.quickEditMode = false;
        self.input.remove();
      }, 0);
    };
    this.init();
  }

};

$.fn.datagrid = function(options) {

  // Settings and Options
  var pluginName = 'datagrid',
      defaults = {
        // F2 - toggles actionableMode "true" and "false"
        // If actionableMode is "true”, tab and shift tab behave like left and right arrow key,
        // if the cell is editable it goes in and out of edit mode
        actionableMode: false,
        cellNavigation: true, // If cellNavigation is "false”, will show border around whole row on focus
        rowNavigation: true, // If rowNavigation is "false”, will NOT show border around the row
        alternateRowShading: false, //Sets shading for readonly grids
        columns: [],
        dataset: [],
        columnReorder: false, // Allow Column reorder
        saveColumns: true, //Save Column Reorder and resize
        editable: false,
        isList: false, // Makes a readonly "list"
        menuId: null,  //Id to the right click context menu
        rowHeight: 'normal', //(short, medium or normal)
        selectable: false, //false, 'single' or 'multiple'
        clickToSelect: true,
        toolbar: false, // or features fx.. {title: 'Data Grid Header Title', results: true, keywordFilter: true, filter: true, rowHeight: true, views: true}
        //Paging Options
        paging: false,
        pagesize: 25,
        pagesizes: [10, 25, 50, 75],
        indeterminate: false, //removed ability to go to a specific page.
        source: null, //callback for paging
        //Filtering Options
        filterable: false,
        resultsText: null  // Can provide a custom function to adjust results text
      },
      settings = $.extend({}, defaults, options);

  // Plugin Constructor
  function Datagrid(element) {
    this.element = $(element);
    this.init();
  }

  // Actual Plugin Code
  Datagrid.prototype = {

    init: function(){
      var self = this;
      this.isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      this.isFirefoxMac = (navigator.platform.indexOf('Mac') !== -1 && navigator.userAgent.indexOf(') Gecko') !== -1);
      this.isIe = $('html').is('.ie');
      this.isIe9 = $('html').is('.ie9');
      this.settings = settings;
      this.initSettings();
      this.originalColumns = this.settings.columns;

      this.appendToolbar();
      this.restoreColumns();
      this.render();
      this.initFixedHeader();
      this.createResizeHandle();
      this.handlePaging();
      this.initTableWidth();
      this.handleEvents();
      this.handleKeys();

      setTimeout(function () {
        self.element.trigger('rendered', [self.element, self.headerRow, self.pagerBar]);
      }, 0);
    },

    initSettings: function () {

      if (this.settings.dataset !== 'table') {
        this.element.wrap( '<div class="datagrid-wrapper" />');
      }

      this.sortColumn = {sortField: null, sortAsc: true};
      this.gridCount = $('.datagrid').length + 1;
      this.lastSelectedRow = 0;// Rember index to use shift key

      this.contextualToolbar = this.element.closest('.datagrid-wrapper').prev('.contextual-toolbar');
      this.contextualToolbar.addClass('datagrid-contextual-toolbar');
    },

    //Initialize as a Table
    initFromTable: function () {
      if (this.settings.dataset === 'table') {
        this.element.remove();
      }
    },

    initTableWidth: function () {
      if (this.element.parents().hasClass('modal')) {
        var el = $('.modal .modal-content'),
          w = this.table.width() +
            parseInt(el.css('padding-left'), 10) +
            parseInt(el.css('padding-right'), 10) +
            parseInt(el.css('margin-left'), 10) +
            parseInt(el.css('margin-right'), 10);

        this.element.css('max-width', w);
        $('.modal').find('.modal-body').css('overflow-x','hidden');
        // $('.modal').css('overflow','hidden').find('.modal-body').css('overflow-x','hidden');
      }

      //initialize row height by a setting
      if (settings.rowHeight !== 'normal') {
        this.element.find('table').addClass(settings.rowHeight + '-rowheight');
      }
    },

    //Render the Header and Rows
    render: function () {
      var self = this;

      //Init from Table
      if (this.settings.dataset === 'table') {
        self.table = $(this.element).addClass('datagrid').attr('role', this.settings.treeGrid ? 'treegrid' : 'grid');

        var wrapper = $(this.element).closest('.datagrid-wrapper');

        if (wrapper.length === 0) {
          this.element.wrap('<div class="datagrid-wrapper"><div class="datagrid-container"></div></div>');
        }
        self.settings.dataset = self.htmlToDataset();
        self.container = this.element.closest('.datagrid-wrapper');
      } else {
        self.table = $('<table></table>').addClass('datagrid').attr('role', this.settings.treeGrid ? 'treegrid' : 'grid');
        self.container = self.element.addClass('datagrid-container');
      }

      //A treegrid is considered editable unless otherwise specified.
      if (this.settings.treeGrid && !this.settings.editable) {
        self.table.attr('aria-readonly', 'true');
      }

      $(this.element).closest('.datagrid-wrapper').addClass(this.settings.isList ? ' is-gridlist' : '');
      self.table.addClass(this.settings.isList ? ' is-gridlist' : '');

      self.table.empty();
      self.renderRows();
      self.element.append(self.table);
      self.renderHeader();

      self.wrapper = self.element.closest('.datagrid-wrapper');

      self.settings.buttonSelector = '.btn, .btn-secondary, .btn-primary, .btn-modal-primary, .btn-tertiary, .btn-icon, .btn-actions, .btn-menu, .btn-split';
      $(self.settings.buttonSelector, self.table).button();
    },

    htmlToDataset: function () {
      var rows = $(this.element).find('tbody tr'),
        self = this,
        specifiedCols = (self.settings.columns.length > 0),
        dataset = [];

      //Geneate the columns if not supplier
      if (!specifiedCols) {
        var headers = $(this.element).find('thead th'),
          firstRow = self.element.find('tbody tr:first()');

        headers.each(function (i, col) {
          var colSpecs = {},
            column = $(col),
            colName = 'column'+i;

          colSpecs.id  = column.text().toLowerCase();
          colSpecs.name = column.text();
          colSpecs.field = colName;

          var link = firstRow.find('td').eq(i).find('a');
          if (link.length > 0) {
            colSpecs.formatter = Formatters.Hyperlink;
            colSpecs.href = link.attr('href');
          }

          self.settings.columns.push(colSpecs);
        });
      }

      rows.each(function () {
        var cols = $(this).find('td'),
          newRow = {};

        cols.each(function (i, col) {
          var column = $(col),
            colName = 'column'+i;

          if (self.settings.columns[i].formatter) {
            newRow[colName] = column.text();
          } else {
            newRow[colName] = column.html();
          }

          if (specifiedCols) {
            self.settings.columns[i].field = colName;
          }

        });

        dataset.push(newRow);
      });

      return dataset;
    },

    // Add a Row
    addRow: function (data, location) {
      var self = this,
        isTop = false,
        row = 0,
        cell = 0,
        args,
        rowNode;

      if (!location || location === 'top') {
        location = 'top';
        isTop = true;
      }
      //Add row status
      data.rowStatus = {icon: 'new', text: 'New', tooltip: 'New'};

      // Add to array
      if (typeof location === 'string') {
        self.settings.dataset[isTop ? 'unshift' : 'push'](data);
      }
      else {
        self.settings.dataset.splice(location, 0, data);
      }

      // Add to ui
      self.renderRows();

      // Sync with others
      self.syncSelectedUI();
      self.updateSelected();

      // Set active and fire handler
      setTimeout(function () {
        row = isTop ? row : self.settings.dataset.length - 1;
        self.setActiveCell(row, cell);

        rowNode = self.tableBody.find('tr').eq(row);
        args = {row: row, cell: cell, target: rowNode, value: data, oldValue: []};

        self.pagerRefresh(location);
        self.element.triggerHandler('addrow', args);
      }, 10);
    },

    pagerRefresh: function (location) {
      if (this.pager) {
        var activePage = this.pager.activePage;
        if (typeof location === 'string') {
          activePage = location === 'top' ? 1 : this.pager._pageCount;
        }
        else if (typeof location === 'number') {
          activePage = Math.floor(location / this.pager.settings.pagesize + 1);
        }
        this.pager.pagingInfo = this.pager.pagingInfo || {};
        this.pager.pagingInfo.activePage = activePage;
        this.renderPager(this.pager.pagingInfo);
      }
    },

    initFixedHeader: function () {
      var self = this;

      if (self.element.hasClass('datagrid-contained')) {
        this.fixHeader();
        this.syncFixedHeader();
      }

    },

    //Fixed Header
    fixHeader: function () {
      var self = this;

      //Already Wrapped
      if (this.wrapper.prev().is('.datagrid-clone')) {
        return;
      }

      //Clone and create a table with one row and the table headers in front
      //make this not readable to screen readers
      this.clone = $('<table class="datagrid datagrid-clone" role="presentation" aria-hidden="true"></table>').append(this.headerRow.clone()).append('<tbody></tbody>');
      this.clone.insertBefore(this.element.closest('.datagrid-wrapper'));
      this.clone.wrap('<div class="datagrid-scrollable-header"></div>');

      this.fixedHeader = true;
      this.headerRow.addClass('audible');
      this.rowHeight();

      var next = this.wrapper.parent().next(),
        prev = this.wrapper.parent().prev(),
        diff = (next.length ===0 ? 0 : next.outerHeight()) + (prev.length ===0 ? 0 : prev.outerHeight()),
        outerHeight = 'calc(100% - '+diff+ 'px)';

      var container = this.wrapper.parent('.contained'),
        isInline = container.prop('style') && container.prop('style')[$.camelCase('height')];

      //Container has a fixed height
      if (isInline) {
        outerHeight = container.css('height');
      } else {
        container.css('height', outerHeight);
      }
      this.wrapper.find('.datagrid-container').css({'height': '100%', 'overflow': 'auto'});

      //Next if exist and the pager toolbar height
      var innerHeight = (this.settings.paging ? (next.length === 0 ? 80 : 48) : 0);
      innerHeight += (next.length === 0 ? 0 : parseInt(next.outerHeight()));

      if (this.wrapper.parent().is('.pane')) {
        innerHeight = 146;
      }

      if (isInline) {
        innerHeight = 18; //header and toolbar - TODO add check
      }

      this.wrapper.css('height', 'calc(100% - '+ (innerHeight)+ 'px)');

      this.container.on('scroll.datagrid', function () {
        self.clone.parent().scrollLeft($(this).scrollLeft());
      });

      this.handleEvents();
    },

    //Revert Fixed Header
    unFixHeader: function () {
      this.fixedHeader = false;

      if (this.wrapper.prev().is('.datagrid-scrollable-header')) {
        this.wrapper.prev().remove();
        this.headerRow.removeClass('audible');
        this.wrapper.css({'height': '', 'overflow': ''});
        this.wrapper.find('.datagrid-container').css({'height': '', 'overflow': ''});
        this.container.off('scroll.datagrid');
      }
    },

    syncFixedHeader: function () {
      if (!this.fixedHeader) {
        return;
      }

      var self = this;
      self.headerRow.find('th').each(function (index) {
        var div = self.table.closest('.datagrid-container').get(0),
          scrollbarWidth = div.offsetWidth - div.clientWidth,
          th = $(this),
          w = th.width();

        w += th.is(':last-child') ? scrollbarWidth : 0;

        th.width(w);
        self.clone.find('th').eq(index).width(w);
      });

      self.clone.width(self.table.width());
    },

    //Delete a Specific Row
    removeRow: function (row, nosync) {
      var rowNode = this.tableBody.find('tr').eq(row),
        rowData = this.settings.dataset[row];

      this.unselectRow(row, nosync);
      this.settings.dataset.splice(row, 1);
      this.renderRows();
      this.element.trigger('rowremove', {row: row, cell: null, target: rowNode, value: [], oldValue: rowData});

    },

    //Remove all selected rows
    removeSelected: function () {

      var self = this,
        selectedRows = this.selectedRows();

      for (var i = selectedRows.length-1; i >= 0; i--) {
        self.removeRow(selectedRows[i].idx, true);
        this.updateSelected();
      }
      this.pagerRefresh();
      this.syncSelectedUI();

    },

    //Method to Reload the data set
    //TODO: Load specific page
    updateDataset: function (dataset, pagerInfo) {
      this.loadData(dataset, pagerInfo);
    },

    loadData: function (dataset, pagerInfo) {
      this.settings.dataset = dataset;

      if (this.pager) {
        this.pager.settings.dataset = dataset;
      }

      if (!pagerInfo) {
        pagerInfo = {};
      }

      if (!pagerInfo.activePage) {
        pagerInfo.activePage = 1;
        pagerInfo.pagesize = this.settings.pagesize;
        pagerInfo.total = -1;
        pagerInfo.type = 'initial';
      }

      //Update Paging and Clear Rows
      this.renderRows();
      this.renderPager(pagerInfo);

      if (pagerInfo && pagerInfo.preserveSelected) {
        this.updateSelected();
        this.syncSelectedUI();
      }
      else {
        this.unSelectAllRows();
      }
    },

    uniqueId: function (suffix) {
      var uniqueid = (window.location.pathname.split('/').pop().replace('.html', '')) + '-' + (this.element.attr('id') ? this.element.attr('id'): 'datagrid') + '-' + this.gridCount + suffix;

      return uniqueid;
    },

    visibleColumns: function () {
      var visible = [];
      for (var j = 0; j < this.settings.columns.length; j++) {
        var column = settings.columns[j];

        if (column.hidden) {
          continue;
        }

        visible.push(column);
      }
      return visible;
    },

    getColumnGroup: function(idx) {
      var total = 0,
        colGroups = this.settings.columnGroups;

      for (var l = 0; l < colGroups.length; l++) {
        total += colGroups[l].colspan;

        if (total >= idx) {
          return this.uniqueId('-header-group-' + l);
        }
      }
    },

    headerText: function (col) {
      var text = col.name ? col.name : '';

      if (!text && col.id === 'drilldown') {
        text = Locale.translate('Drilldown');
        return '<span class="audible">'+ text + '</span>';
      }

      return text;
    },

    //Render the Header
    renderHeader: function() {
      var self = this,
        headerRow = '', uniqueId;

      var colGroups = this.settings.columnGroups;

      if (colGroups) {

        var total = 0;

        headerRow += '<tr role="row" class="datagrid-header-groups">';

        for (var k = 0; k < colGroups.length; k++) {

          total += parseInt(colGroups[k].colspan);
          uniqueId = self.uniqueId( '-header-group-' + k);

          headerRow += '<th colspan="' + colGroups[k].colspan + '" id="' + uniqueId + '"' + '><div class="datagrid-column-wrapper "><span class="datagrid-header-text">'+ colGroups[k].name +'</span></div></th>';
        }

        if (total < this.visibleColumns().length) {
          headerRow += '<th colspan="' + (this.visibleColumns().length - total) + '"></th>';
        }
        headerRow += '</tr><tr>';
      } else {
        headerRow += '<tr role="row">';
      }

      for (var j = 0; j < this.settings.columns.length; j++) {
        var column = settings.columns[j],
          id = self.uniqueId( '-header-' + j),
          isSortable = (column.sortable === undefined ? true : column.sortable),
          isResizable = (column.resizable === undefined ? true : column.resizable),
          isSelection = column.id === 'selectionCheckbox',
          alignmentClass = (column.align === 'center' ? ' l-'+ column.align +'-text' : '');// Disable right align for now as this was acting wierd

        headerRow += '<th scope="col" role="columnheader" class="' + (isSortable ? 'is-sortable' : '') + (isResizable ? ' is-resizable' : '') + (column.hidden ? ' is-hidden' : '') + (column.filterType ? ' is-filterable' : '') + (alignmentClass ? alignmentClass : '') + '"' +
         ' id="' + id + '" data-column-id="'+ column.id + '"' + (column.field ? ' data-field="'+ column.field +'"' : '') +
         (column.headerTooltip ? 'title="' + column.headerTooltip + '"' : '') +
         (colGroups ? ' headers="' + self.getColumnGroup(j) + '"' : '') +
         (column.width ? ' style="width:'+ (typeof column.width ==='number' ? column.width+'px': column.width) +'"' : '') + '>';
         headerRow += '<div class="' + (isSelection ? 'datagrid-checkbox-wrapper ': 'datagrid-column-wrapper') + (column.align === undefined || column.filterType ? '' : ' l-'+ column.align +'-text') + '"><span class="datagrid-header-text'+ (column.required ? ' required': '') + '">' + self.headerText(settings.columns[j]) + '</span>';

        //Removed the alignment - even if the column is right aligned data keep the header left aligned
        //+ (column.align === undefined ? false : ' l-'+ column.align +'-text')

        if (isSelection) {
          headerRow += '<span aria-checked="false" class="datagrid-checkbox" aria-label="Selection" role="checkbox"></span>';
        }
        if (isSortable) {
          headerRow += '<div class="sort-indicator">' +
            '<span class="sort-asc">' + $.createIcon({ icon: 'dropdown' }) + '</span>' +
            '<span class="sort-desc">' + $.createIcon({ icon: 'dropdown' }) + '</div>';
        }

        headerRow += '</div></th>';
      }
      headerRow += '</tr>';

      if (self.headerRow === undefined) {
        self.headerRow = $('<thead>' + headerRow + '</thead>');
        self.table.prepend(self.headerRow);
      } else {
        self.headerRow.empty();
        self.headerRow.append(headerRow);
      }

      self.table.find('th[title]').tooltip();
      self.setColumnWidths();

      if (self.settings.columnReorder) {
        self.createDraggableColumns();
      }

      this.renderFilterRow();

    },

    filterRowRendered: false,

    //Render the Filter Row
    renderFilterRow: function () {
      var self = this;

      if (!this.settings.filterable) {
        return;
      }

      this.headerRow.find('.datagrid-filter-wrapper').remove();

    //Loop the columns looking at the filter types and generate the markup for the various Types
    //Supported Filter Types: text, integer, date, select, decimal, lookup, percent, checkbox, contents
      for (var j = 0; j < this.settings.columns.length; j++) {
        if (this.settings.columns[j].filterType) {
          var col = this.settings.columns[j],
            id = self.uniqueId( '-header-' + j),
            header = this.headerRow.find('#'+id),
            filterId = self.uniqueId( '-header-filter-' + j),
            filterMarkup = '<div class="datagrid-filter-wrapper">'+ this.renderFilterButton(col.filterType, col.filterDisabled) +'<label class="audible" for="'+ filterId +'">' +
              col.name + '</label>';

          switch (col.filterType) {
            case 'checkbox':
              //just the button
              break;
            case 'date':
              filterMarkup += '<input ' + (col.filterDisabled ? ' disabled' : '') + ' type="text" class="datepicker" id="'+ filterId +'"/>';
              break;
            case 'decimal':
              filterMarkup += '<input ' + (col.filterDisabled ? ' disabled' : '') + ' type="text" id="'+ filterId +'"/ data-mask-mode="number" data-mask="'+ (col.mask ? col.mask : '####.00') +'">';
              break;
            case 'contents':
            case 'select':
              filterMarkup += '<select ' + (col.filterDisabled ? ' disabled' : '') + (col.filterType ==='select' ? ' class="dropdown"' : ' multiple class="multiselect"') + 'id="'+ filterId +'">';
              if (col.options) {
                if (col.filterType ==='select') {
                  filterMarkup += '<option>&nbsp;</option>';
                }

                for (var i = 0; i < col.options.length; i++) {
                  var option = col.options[i],
                  optionValue = col.caseInsensitive && typeof option.value === 'string' ? option.value.toLowerCase() : option.value;
                  filterMarkup += '<option value = "' +optionValue + '">' + option.label + '</option>';
                }
              }
              filterMarkup += '</select>';

              break;
            default:
              filterMarkup += '<input' + (col.filterDisabled ? ' disabled' : '') + ' type="text" id="'+ filterId +'"/>';
              break;
          }

          filterMarkup += '</div>';
          header.find('.datagrid-column-wrapper').after(filterMarkup);
          header.find('.datepicker').datepicker(col.editorOptions ? col.editoroptions : {dateFormat: col.dateFormat});
          header.find('.dropdown').dropdown(col.editorOptions);
          header.find('.multiselect').multiselect(col.editorOptions);
          header.find('[data-mask]').mask();
        }
      }

      //Attach Keyboard support
      this.headerRow.addClass('is-filterable');
      this.headerRow.find('.btn-filter').popupmenu({}).on('selected.datagrid', function () {
        self.applyFilter();
      });

      this.headerRow.on('keydown.datagrid', '.datagrid-filter-wrapper input', function (e) {
        e.stopPropagation();

        if (e.which === 13) {
          self.applyFilter();
        }

      }).on('change.datagrid', '.datagrid-filter-wrapper input', function () {
        self.applyFilter();
      });

      this.headerRow.find('.dropdown, .multiselect').on('selected.datagrid', function () {
        self.applyFilter();
      });

      self.filterRowRendered = true;
    },

    //Render one filter item as used in renderFilterButton
    renderFilterItem: function (icon, text, checked) {
      var iconMarkup = $.createIcon({ classes: 'icon icon-filter', icon: 'filter-' + icon });
      return '<li ' + (checked ? 'class="is-checked"' : '') + '><a href="#">' + iconMarkup + '<span>'+ text +'</span></a></li>';
    },

    //Render the Filter Button and Menu based on filterType - which determines the options
    renderFilterButton: function (filterType, isDisabled) {
      var btnMarkup = '<button type="button" class="btn-menu btn-filter" data-init="false" ' + (isDisabled ? ' disabled' : '') + ' type="button"><span class="audible">Filter</span>' + $.createIcon({icon: 'dropdown' , classes: 'icon-dropdown'}) +'</button>' +
        '<ul class="popupmenu has-icons is-translatable is-selectable">';

        //Just the dropdown
        if (filterType === 'contents' || filterType === 'select') {
          return '';
        }

        if (filterType === 'text') {
          btnMarkup += this.renderFilterItem('contains', 'Contains', true);
        }

        if (filterType === 'checkbox') {
          btnMarkup += this.renderFilterItem('selected-notselected', 'EitherSelectedOrNotSelected', true);
          btnMarkup += this.renderFilterItem('selected', 'Selected');
          btnMarkup += this.renderFilterItem('not-selected', 'NotSelected');
        }

        if (filterType !== 'checkbox') {
          btnMarkup += this.renderFilterItem('equals', 'Equals', (filterType === 'integer' || filterType === 'date' ? true : false)) +
            this.renderFilterItem('does-not-equal', 'DoesNotEqual');

          btnMarkup += this.renderFilterItem('is-empty', 'IsEmpty') +
          this.renderFilterItem('is-not-empty', 'IsNotEmpty');
        }

        if (filterType === 'integer' || filterType === 'date' || filterType === 'decimal') {
          btnMarkup += this.renderFilterItem('less-than', 'LessThan');
          btnMarkup += this.renderFilterItem('less-equals', 'LessOrEquals');
          btnMarkup += this.renderFilterItem('greater-than', 'GreaterThan');
          btnMarkup += this.renderFilterItem('greater-equals', 'GreaterOrEquals');
        }

        if (filterType === 'text') {
          btnMarkup += this.renderFilterItem('end-with', 'EndWith');
          btnMarkup += this.renderFilterItem('does-not-end-with', 'DoesNotEndWith');
          btnMarkup += this.renderFilterItem('start-with', 'StartWith');
          btnMarkup += this.renderFilterItem('does-not-start-with', 'DoesNotStartWith');
        }

        btnMarkup += '</ul>';

      return btnMarkup ;
    },

    toggleFilterRow: function () {

      if (this.settings.filterable) {
        this.headerRow.removeClass('is-filterable');
        this.headerRow.find('.is-filterable').removeClass('is-filterable');
        this.headerRow.find('.datagrid-filter-wrapper').hide();
        this.settings.filterable = false;
      } else {
        this.settings.filterable = true;

        if (!this.filterRowRendered) {
          this.renderFilterRow();
        }

        this.headerRow.addClass('is-filterable');
        this.headerRow.find('.is-filterable').addClass('is-filterable');
        this.headerRow.find('.datagrid-filter-wrapper').show();
      }

    },

    //Except conditions from outside or pull from filter row
    applyFilter: function (conditions) {
      var self = this;
      this.filteredDataset = null;

      if (!conditions) {
        conditions = this.filterConditions();
      }

      var checkRow = function (row) {
        var isMatch = true;

        for (var i = 0; i < conditions.length; i++) {
          var field = self.columnById(conditions[i].columnId)[0].field,
            rowValue = self.fieldValue(row, field).toString().toLowerCase(),
            rowValueStr = rowValue.toString(),
            conditionValue = conditions[i].value.toString().toLowerCase();

          if (typeof row[conditions[i].columnId] === 'number') {
            rowValue = row[conditions[i].columnId];
            conditionValue = parseFloat(conditions[i].value);
          }

          if (row[conditions[i].columnId] instanceof Date) {
            rowValue = row[conditions[i].columnId].getTime();
            conditionValue = Locale.parseDate(conditions[i].value, conditions[i].format).getTime();
          }

          switch (conditions[i].operator) {
            case 'equals':

              //This case is multiselect
              if (conditions[i].value instanceof Array) {
                isMatch = false;

                for (var k = 0; k < conditions[i].value.length; k++) {
                  var match = conditions[i].value[k].indexOf(row[conditions[i].columnId]) >= 0 && row[conditions[i].columnId].toString() !== '';
                  if (match) {
                    isMatch = true;
                  }
                }
              } else {
                isMatch = (rowValue === conditionValue && rowValue !== '');
              }

              break;
            case 'does-not-equal':
              isMatch = (rowValue !== conditionValue && rowValue !== '');
              break;
            case 'contains':
              isMatch = (rowValueStr.indexOf(conditionValue) > -1 && rowValue.toString() !== '');
              break;
            case 'end-with':
              isMatch = (rowValueStr.lastIndexOf(conditionValue) === (rowValueStr.length - conditionValue.toString().length)  && rowValueStr !== '');
              break;
            case 'start-with':
              isMatch = (rowValueStr.indexOf(conditionValue) === 0 && rowValueStr !== '');
              break;
            case 'does-not-end-with':
              isMatch = !(rowValueStr.lastIndexOf(conditionValue) === (rowValueStr.length - conditionValue.toString().length)  && rowValueStr !== '');
              break;
            case 'does-not-start-with':
              isMatch = !(rowValueStr.indexOf(conditionValue) === 0 && rowValueStr !== '');
              break;
            case 'is-empty':
              isMatch = (rowValue === '');
              break;
            case 'is-not-empty':
              isMatch = (rowValue !== '');
              break;
            case 'less-than':
              isMatch = (rowValue < conditionValue && rowValue !== '');
              break;
            case 'less-equals':
              isMatch = (rowValue <= conditionValue && rowValue !== '');
              break;
            case 'greater-than':
              isMatch = (rowValue > conditionValue && rowValue !== '');
              break;
            case 'greater-equals':
              isMatch = (rowValue <= conditionValue && rowValue !== '');
              break;
            case 'selected':
              isMatch = (rowValueStr === '1' || rowValueStr ==='true' || rowValue === true || rowValue === 1) && rowValueStr !== '';
              break;
            case 'not-selected':
              isMatch = (rowValueStr === '0' || rowValueStr ==='false' || rowValue === false || rowValue === 0) && rowValueStr !== '';
              break;
            case 'selected-notselected':
              isMatch = true;
              break;
            default:
          }

          if (!isMatch) {
            return false;
          }
        }
        return isMatch;
      };

      for (var i = 0; i < this.settings.dataset.length; i++) {
        var isFiltered = !checkRow(this.settings.dataset[i]);
        this.settings.dataset[i].isFiltered = isFiltered;
      }

      this.renderRows();
      this.resetPager('filtered');

    },

    //Clear and reset the filter
    clearFilter: function () {
      this.renderFilterRow();
      this.applyFilter();
    },

    //Get filter conditions in array form from the UI
    filterConditions: function () {
      var self = this;
      this.filterExpr = [];

      //Create an array of objects with: field, id, filterType, operator, value
      this.headerRow.find('th').each(function () {
        var rowElem = $(this),
          btn = rowElem.find('.btn-filter'),
          input = rowElem.find('input, select'),
          isDropdown = input.is('select'),
          svg = btn.find('.icon-dropdown:first'),
          op;


        if (!btn.length && !isDropdown) {
          return;
        }

        op = isDropdown ? 'equals' : svg.getIconName().replace('filter-', '');

        if (op === 'selected-notselected') {
          return;
        }

        if (input.val() === '' && ['is-not-empty', 'is-empty', 'selected', 'not-selected'].indexOf(op) === -1) {
          return;
        }

        if (input.val() instanceof Array && input.val().length ===0) {
          return;
        }

        var condition = {columnId: rowElem.attr('data-column-id'),
          operator: op,
          value: input.val() ? input.val() : '',
          ignorecase: 'yes'};

        if (input.data('datepicker')) {
          var format = input.data('datepicker').settings.dateFormat;
          if (format === 'locale') {
            format = Locale.calendar().dateFormat.short;
          }
          condition.format = format;
        }

        self.filterExpr.push(condition);

      });

      return self.filterExpr;
    },

    // Create draggable columns
    createDraggableColumns: function () {
      var self = this,
        headers = self.headerNodes();

      headers.prepend('<span class="is-draggable-target"></span><span class="handle">&#8286;</span>');
      headers.last().append('<span class="is-draggable-target last"></span>');
      self.element.addClass('has-draggable-columns');

      self.element.on('scroll.datagrid', function() {
        self.adjustDraggablePosition();
      });

      // Initialize Drag api
      $('.handle', headers).each(function() {
        var handle = $(this),
          hader = handle.parent();

        handle.on('mousedown.datagrid', function(e) {
          e.preventDefault();

          hader.drag({clone: true, cloneAppentTo: headers.first().parent().parent()})

            // Drag start =======================================
            .on('dragstart.datagrid', function (e, pos, clone) {
              var index;

              clone.removeAttr('id').addClass('is-dragging-clone').css({left: pos.left, top: pos.top});
              $('.is-draggable-target', clone).remove();

              self.setDraggableColumnTargets();
              index = self.targetColumn(pos);
              self.draggableStatus.startIndex = index;
            })

            // While dragging ===================================
            .on('drag.datagrid', function (e, pos) {
              var i, l, n, target,
                index = self.targetColumn(pos);

              $('.is-draggable-target', headers).removeClass('is-over');

              if (index !== -1) {
                for (i=0, l=self.draggableColumnTargets.length; i<l; i++) {
                  target = self.draggableColumnTargets[i];
                  n = i + 1;

                  if (target.index === index && target.index !== self.draggableStatus.startIndex) {
                    if (target.index > self.draggableStatus.startIndex && (n < l)) {
                      target = self.draggableColumnTargets[n];
                    }
                    target.el.addClass('is-over');
                  }
                }
              }
            })

            // Drag end =========================================
            .on('dragend.datagrid', function (e, pos) {
              var index = self.targetColumn(pos),
               dragApi = hader.data('drag'),
               tempArray = [],
               i, l, indexFrom, indexTo;

              // Unbind drag from header
              if (dragApi && dragApi.destroy) {
                dragApi.destroy();
              }

              self.draggableStatus.endIndex = index;
              $('.is-draggable-target', headers).removeClass('is-over');

              if (self.draggableStatus.endIndex !== -1) {
                if (self.draggableStatus.startIndex !== self.draggableStatus.endIndex) {
                  // Start to Swap columns

                  for (i=0, l=self.settings.columns.length; i < l; i++) {
                    if (!self.settings.columns[i].hidden) {
                      tempArray.push(i);
                    }
                  }

                  indexFrom = tempArray[self.draggableStatus.startIndex] || 0;
                  indexTo = tempArray[self.draggableStatus.endIndex] || 0;

                  self.arrayIndexMove(self.settings.columns, indexFrom, indexTo);
                  self.updateColumns(self.settings.columns);
                }
                else {
                  // No need to swap here since same target area, where drag started
                }
              }
              else {
                //Did not drop in target area
              }

            });
        });
      });
    },

    // Adjust draggable position
    adjustDraggablePosition: function(header) {
      var self = this,
        adjust = function(header) {
          $('.is-draggable-target, .handle', header).css('left', header.position().left);
          $('.is-draggable-target.last', header).css('left', header.position().left + header.outerWidth());
        },
        adjustAll = function() {
          self.headerNodes().not('.is-hidden').each(function() {
            adjust($(this));
          });
        };

      if (header) {
        adjust(header);
      } else {
        adjustAll();
      }
    },

    // Set draggable columns target
    setDraggableColumnTargets: function () {
      var self = this,
        headers = self.headerNodes().not('.is-hidden'),
        target, pos, extra;

      self.draggableColumnTargets = [];
      self.draggableStatus = {};

      $('.is-draggable-target', headers).each(function (index) {
        var idx = ($(this).is('.last')) ? index - 1 : index; // Extra target for last header th
        target = headers.eq(idx);
        pos = target.position();
        // Extra space around, if dropped item bit off from drop area
        extra = 20;

        self.draggableColumnTargets.push({
          el: $(this),
          index: idx,
          pos: pos,
          width: target.outerWidth(),
          height: target.outerHeight(),
          dropArea: {
            x1: pos.left - extra, x2: pos.left + target.outerWidth() + extra,
            y1: pos.top - extra, y2: pos.top + target.outerHeight() + extra
          }
        });
      });
    },

    // Get column index
    targetColumn: function (pos) {
      var self = this,
        index = -1,
        target, i, l;

      for (i=0, l=self.draggableColumnTargets.length-1; i<l; i++) {
        target = self.draggableColumnTargets[i];
        if (pos.left > target.dropArea.x1 && pos.left < target.dropArea.x2 &&
            pos.top > target.dropArea.y1 && pos.top < target.dropArea.y2) {
          index = target.index;
        }
      }
      return index;
    },

    // Move an array element position
    arrayIndexMove: function(arr, from, to) {
      arr.splice(to, 0, arr.splice(from, 1)[0]);
    },

    //Return Value from the Object handling dotted notation
    fieldValue: function (obj, field) {
      if (!field || !obj) {
        return '';
      }

      if (field.indexOf('.') > -1) {
        return field.split('.').reduce(function(o, x) {
          return (o ? o[x] : '');
        }, obj);
      }

      var rawValue = obj[field],
        value = (rawValue || rawValue === 0 || rawValue === false ? rawValue : '');

      value = $.escapeHTML(value);
      return value;
    },

    //Render the Rows
    renderRows: function() {
      var tableHtml = '',
        self = this, i,
        activePage = self.pager ? self.pager.activePage : 1,
        pagesize = self.settings.pagesize,
        dataset = self.settings.dataset;

      var body = self.table.find('tbody');
      if (body.length === 0) {
        self.tableBody = $('<tbody></tbody>');
        self.table.append(self.tableBody);
      }

      //Save the height during render
      self.tableHeight = self.tableBody.height();
      self.tableBody.css({'height': self.tableHeight, 'display': 'block'});
      self.tableBody.empty();
      self.recordCount = 0;
      self.filteredCount = 0;

      for (i = 0; i < dataset.length; i++) {

        //For better performance dont render out of page
        if (this.settings.paging && !this.settings.source) {

          if (activePage === 1 && (i - this.filteredCount) >= pagesize){
            this.recordCount++;
            continue;
          }

          if (activePage > 1 && !((i - this.filteredCount) >= pagesize*(activePage-1) && (i - this.filteredCount) < pagesize*activePage)) {
            this.recordCount++;
            continue;
          }
        }

        //Exclude Filtered Rows
        if (dataset[i].isFiltered) {
          this.filteredCount++;
          continue;
        }

        this.recordCount++;
        tableHtml += self.rowHtml(dataset[i]);
      }

      self.tableBody.append(tableHtml);
      self.tableBody.css({'height': '', 'display': ''});
      self.setupTooltips();
      self.tableBody.find('.dropdown').dropdown();

      //Set Tab Index and active Cell
      setTimeout(function () {
        if (!self.settings.source) {
          self.displayCounts();
        }
        self.activeCell = {node: self.cellNode(0, 0).attr('tabindex', '0'), isFocused: false, cell: 0, row: 0};
      }, 100);
    },

    recordCount: 0,

    rowHtml: function (rowData, renderHidden) {

      var isEven = (this.recordCount % 2 === 0),
        self = this,
        activePage = self.pager ? self.pager.activePage : 1,
        pagesize = self.settings.pagesize,
        rowHtml = '';

      rowHtml = '<tr role="row" aria-rowindex="' + ((this.recordCount) + (self.settings.source  ? ((activePage-1) * pagesize) : 0)) + '"' +
                (self.settings.treeGrid && rowData.children ? ' aria-expanded="' + (rowData.expanded ? 'true"' : 'false"') : '') +
                (self.settings.treeGrid ? ' aria-level= "' + rowData.depth + '"' : '') +
                ' class="datagrid-row'+
                (self.settings.rowHeight !== ' normal' ? ' ' + self.settings.rowHeight + '-rowheight' : '') +
                (renderHidden ? ' is-hidden' : '') +
                (self.settings.alternateRowShading && !isEven ? ' alt-shading' : '') +
                (!self.settings.cellNavigation ? ' is-clickable' : '' ) +
                (self.settings.treeGrid ? (rowData.children ? ' datagrid-tree-parent' : (rowData.depth > 1 ? ' datagrid-tree-child' : '')) : '') +
                 '"' + '>';

      for (var j = 0; j < self.settings.columns.length; j++) {
        var col = self.settings.columns[j],
            cssClass = '',
            formatter = (col.formatter ? col.formatter : self.defaultFormatter),
            formatted = '';

        if (typeof formatter ==='string') {
          formatted = window.Formatters[formatter](this.recordCount, j, self.fieldValue(rowData, self.settings.columns[j].field), self.settings.columns[j], rowData, self).toString();
        } else {
          formatted = formatter(this.recordCount, j, self.fieldValue(rowData, self.settings.columns[j].field), self.settings.columns[j], rowData, self).toString();
        }

        if (formatted.indexOf('<span class="is-readonly">') === 0) {
          col.readonly = true;
        }

        if (formatted.indexOf('datagrid-checkbox') > -1 ||
          formatted.indexOf('btn-actions') > -1) {
          cssClass += ' l-center-text';
        }

        if (formatted.indexOf('trigger') > -1) {
          cssClass += ' datagrid-trigger-cell';
        }

        if (col.expanded) {
          self.treeExpansionField = col.expanded;
        }

        if (col.align) {
          cssClass += ' l-'+ col.align +'-text';
        }

        if (col.textOverflow === 'ellipsis') {
          cssClass += ' text-ellipsis';
        }

        // Add Column Css Classes

        //Add a readonly class if set on the column
        cssClass += (col.readonly ? ' is-readonly' : '');
        cssClass += (col.hidden ? ' is-hidden' : '');

        //Run a function that helps check if editable
        if (col.isEditable && !col.readonly) {
          var canEdit = col.isEditable(this.recordCount-1, j, self.fieldValue(rowData, self.settings.columns[j].field), col, rowData);

          if (!canEdit) {
            cssClass += ' is-readonly';
          }
        }

        //Run a function that helps check if readonly
        var ariaReadonly = ((col.readonly || col.editor === undefined) ? 'aria-readonly="true"': '');

        if (col.isReadonly && !col.readonly) {
          var isReadonly = col.isReadonly(this.recordCount, j, self.fieldValue(rowData, self.settings.columns[j].field), col, rowData);

          if (isReadonly) {
            cssClass += ' is-cell-readonly';
            ariaReadonly = 'aria-readonly="true"';
          }
        }

        var cellValue = self.fieldValue(rowData, self.settings.columns[j].field);

        //Run a function that dynamically adds a class
        if (col.cssClass && typeof col.cssClass === 'function') {
          cssClass += col.cssClass(this.recordCount, j, cellValue, col, rowData);
        }

        cssClass += (col.focusable ? ' is-focusable' : '');

        rowHtml += '<td role="gridcell" ' + ariaReadonly + ' aria-colindex="' + (j+1) + '" '+
            ' aria-describedby="' + self.uniqueId( '-header-' + j) + '"' +
           (cssClass ? ' class="' + cssClass + '"' : '') + 'data-idx="' + (j) + '"' +
           (col.tooltip ? ' title="' + col.tooltip.replace('{{value}}', cellValue) + '"' : '') +
           (col.id === 'rowStatus' && rowData.rowStatus && rowData.rowStatus.tooltip ? ' title="' + rowData.rowStatus.tooltip + '"' : '') +
             (self.settings.columnGroups ? 'headers = "' + self.uniqueId( '-header-' + j) + ' ' + self.getColumnGroup(j) + '"' : '') +
           '><div class="datagrid-cell-wrapper">';

        if (col.contentVisible) {
          var canShow = col.contentVisible(this.recordCount, j, cellValue, col, rowData);
          if (!canShow) {
            formatted = '';
          }
        }

        rowHtml += formatted + '</div></td>';
      }

      rowHtml += '</tr>';

      if (self.settings.rowTemplate) {
        var tmpl = self.settings.rowTemplate,
          item = rowData,
          renderedTmpl = '';

        if (Tmpl && item) {
          var compiledTmpl = Tmpl.compile('{{#dataset}}'+tmpl+'{{/dataset}}');
          renderedTmpl = compiledTmpl.render({dataset: item});
        }

        rowHtml += '<tr class="datagrid-expandable-row"><td colspan="'+ this.visibleColumns().length +'">' +
          '<div class="datagrid-row-detail"><div class="datagrid-row-detail-padding">'+ renderedTmpl + '</div></div>' +
          '</td></tr>';
      }

      //Render Tree Children
      if (rowData.children) {

        for (var l = 0; l < rowData.children.length; l++) {
          this.recordCount++;
          rowHtml += self.rowHtml(rowData.children[l], !rowData[self.treeExpansionField]);
        }
      }

      return rowHtml;
    },

    setupTooltips: function () {

      // Implement Tooltip on cells with title attribute
      this.tableBody.find('td[title]').tooltip({placement: 'left', offset: {left: -5, top: 0}});

      // Implement Tooltip on cells with ellipsis
      this.table.find('td.text-ellipsis').tooltip({content: function() {
        var cell = $(this),
          text = cell.text(),
          inner = cell.children('.datagrid-cell-wrapper');

        if (cell[0] && inner[0] && (inner[0].offsetWidth)< inner[0].scrollWidth) {
          var w = inner.width();
          $(this).data('tooltip').settings.maxWidth = w;
          return text;
        }

        return '';
      }});
    },

    setColumnWidths: function () {
      var total = 0, self = this, widthProvided, widthPercent;

      for (var i = 0; i < self.settings.columns.length; i++) {
        var column = self.settings.columns[i],
          header = self.headerNodes().eq(i);

        if (column.hidden) {
          continue;
        }

        if (column.width) {
          widthProvided = true;
        }

        if (typeof column.width === 'string' && column.width.indexOf('px') === -1) {
          widthPercent = true;
        }

        var colWidth =  parseInt(column.width) || header.outerWidth();
        total+= colWidth;

        if (widthProvided && colWidth) {
          header.css('width', colWidth);
        }

        if (widthPercent && column.width) {
          header.css('width', parseInt(column.width) + '%');
        }

        self.adjustDraggablePosition(header);
      }

      if (widthProvided) {
        this.table.css('width', total);
      }

      if (widthPercent) {
        this.table.css('width', '100%');
      }

      //Make a one time event to resize next time visible on tabs
      if (!this.element.is(':visible')) {
        this.element.closest('.tab-container').one('afteractivated', function () {
          self.setColumnWidths();
        });
      }
    },

    //Returns all header nodes (not the groups)
    headerNodes: function () {
      return this.headerRow.find('tr:not(.datagrid-header-groups) th');
    },

    cloneHeaderNodes: function () {
      if (!this.clone) {
        return [];
      }

      return this.clone.find('thead').find('tr:not(.datagrid-header-groups) th');
    },

    firstRowNodes: function () {
      return this.tableBody.find('tr:first td');
    },

    //Refresh one row in the grid
    updateRow: function (idx, data) {
      var rowData = (data ? data : this.settings.dataset[idx]);

      for (var j = 0; j < this.settings.columns.length; j++) {
        var col = this.settings.columns[j];

        if (col.hidden) {
          continue;
        }

        if (col.id && ['selectionCheckbox', 'expander'].indexOf(col.id) > -1) {
          continue;
        }

        this.updateCellNode(idx, j, this.fieldValue(rowData, col.field), true);
      }

    },

    //given a new column set update the rows and reload
    updateColumns: function(columns, columnGroups) {
      this.settings.columns = columns;

      if (columnGroups) {
        this.settings.columnGroups = columnGroups;
      }

      this.renderRows();
      this.renderHeader();
      this.setColumnWidths();

      this.resetPager('updatecolumns');
      this.element.trigger('columnchange', [{type: 'updatecolumns', columns: this.settings.columns}]);
      this.saveColumns();

    },

    saveColumns: function () {
      if (!this.settings.saveColumns) {
        return;
      }

      //Save to local storage
      if (localStorage) {
        localStorage[this.uniqueId('columns')] = JSON.stringify(this.settings.columns);
      }
    },

    //Restore the columns from a saved list or local storage
    restoreColumns: function (cols) {
      if (!localStorage || !this.settings.saveColumns) {
        return;
      }

      if (cols) {
        this.updateColumns(cols);
        return;
      }

      //Done on load as apposed to passed in
      var lsCols = localStorage[this.uniqueId('columns')];

      if (!cols && lsCols) {
        lsCols = JSON.parse(lsCols);
        this.originalColumns = this.settings.columns;

        //Map back the missing functions/objects
        for (var i = 0; i < lsCols.length; i++) {
          var isHidden,
            orgCol = this.columnById(lsCols[i].id);

          if (orgCol) {
            orgCol = orgCol[0];
            isHidden = lsCols[i].hidden;

            $.extend(lsCols[i], orgCol);

            if (isHidden !== undefined) {
              lsCols[i].hidden = isHidden;
            }
          }
        }

        this.settings.columns = lsCols;
        return;
      }

    },

    resetColumns: function () {
      localStorage.clear();
      localStorage[this.uniqueId('columns')] = '';

      if (this.originalColumns) {
        this.updateColumns(this.originalColumns);
      }
    },

    //Hide a column
    hideColumn: function(id) {
      var idx = this.columnIdxById(id);
      this.settings.columns[idx].hidden = true;
      this.headerRow.find('th').eq(idx).addClass('is-hidden');
      this.tableBody.find('td:nth-child('+ (idx+1) +')').addClass('is-hidden');

      this.element.trigger('columnchange', [{type: 'hidecolumn', index: idx, columns: this.settings.columns}]);
      this.saveColumns();
    },

    //Show a hidden column
    showColumn: function(id) {
      var idx = this.columnIdxById(id);
      this.settings.columns[idx].hidden = false;
      this.headerRow.find('th').eq(idx).removeClass('is-hidden');
      this.tableBody.find('td:nth-child('+ (idx+1) +')').removeClass('is-hidden');

      this.element.trigger('columnchange', [{type: 'showcolumn', index: idx, columns: this.settings.columns}]);
      this.saveColumns();
    },

    // Eexport To Excel
    exportToExcel: function (fileName, worksheetName) {
      var self = this,
        template = ''+
          '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">'+
            '<head>'+
              '<!--[if gte mso 9]>'+
                '<xml>'+
                  '<x:ExcelWorkbook>'+
                    '<x:ExcelWorksheets>'+
                      '<x:ExcelWorksheet>'+
                        '<x:Name>{worksheet}</x:Name>'+
                        '<x:WorksheetOptions>'+
                          '<x:Panes></x:Panes>'+
                          '<x:DisplayGridlines></x:DisplayGridlines>'+
                        '</x:WorksheetOptions>'+
                      '</x:ExcelWorksheet>'+
                    '</x:ExcelWorksheets>'+
                  '</x:ExcelWorkbook>'+
                '</xml>'+
              '<![endif]-->'+
              '<meta http-equiv="content-type" content="text/plain; charset=UTF-8"/>'+
            '</head>'+
            '<body>'+
              '<table border="1px">{table}</table>'+
            '</body>'+
          '</html>',

        cleanExtra = function(table) {
          $('tr, th, td, div, span', table).each(function () {
            var el = this,
              elm = $(this);

            if(elm.is('.is-hidden')) {
              elm.remove();
              return;
            }

            $('.is-hidden, .is-draggable-target, .handle, .sort-indicator', el).remove();
            while(el.attributes.length > 0) {
              el.removeAttribute(el.attributes[0].name);
            }
          });
          return table;
        },

        base64 = function(s) {
          if (window.btoa) {
            return 'data:application/vnd.ms-excel;base64,' + window.btoa(unescape(encodeURIComponent(s)));
          } else {
            return 'data:application/vnd.ms-excel;,' + unescape(encodeURIComponent(s));
          }
        },

        format = function(s, c) {
          return s.replace(/{(\w+)}/g, function(m, p) {
            return c[p];
          });
        },

        table = cleanExtra(self.table.clone()),
        ctx = { worksheet: (worksheetName || 'Worksheet'), table: table.html() };

      fileName = (fileName ||
        self.element.closest('.datagrid-container').attr('id') ||
        'datagrid') +'.xls';

      if (this.isIe) {
        if (this.isIe9) {
          var IEwindow = window.open();
          IEwindow.document.write('sep=,\r\n' + format(template, ctx));
          IEwindow.document.close();
          IEwindow.document.execCommand('SaveAs', true, fileName);
          IEwindow.close();
        }
        else if (window.navigator.msSaveBlob) {
          var blob = new Blob([format(template, ctx)], {
            type: 'application/csv;charset=utf-8;'
          });
          navigator.msSaveBlob(blob, fileName);
        }
      }
      else {
        var link = document.createElement('a');
        link.href = base64(format(template, ctx));
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },

    //Open Column Personalization Dialog
    personalizeColumns: function () {
      var self = this,
        markup = '<div class="listview-search alternate-bg"><label class="audible" for="gridfilter">Search</label><input class="searchfield" placeholder="'+ Locale.translate('SearchColumnName') +'" name="searchfield" id="gridfilter"></div>';

        markup += '<div class="listview alternate-bg" id="search-listview"><ul>';

        for (var i = 0; i < this.settings.columns.length; i++) {
          var col = this.settings.columns[i];

          if (col.name) {
            markup += '<li><a href="#" target="_self" tabindex="-1"> <label class="inline"><input tabindex="-1" ' + (col.hideable ===false ? 'disabled' : '') + ' type="checkbox" class="checkbox" '+ (col.hidden ? '' : ' checked') +' data-column-id="'+ (col.id || i) +'"><span class="label-text">' + col.name + '</span></label></a></li>';
          }
        }
        markup += '</ul></div>';

        $('body').modal({
          title: Locale.translate('PersonalizeColumns'),
          content: markup,
          cssClass: 'full-width datagrid-columns-dialog',
          buttons: [{
              text: Locale.translate('Close'),
              click: function(e, modal) {
                modal.close();
                $('body').off('open.datagrid');
              }
            }]
        }).on('beforeopen.datagrid', function () {
          self.isColumnsChanged = false;
        }).on('open.datagrid', function (e, modal) {
          modal.element.find('.searchfield').searchfield({clearable: true});
          modal.element.find('.listview').listview({searchable: true, selectOnFocus: false});

          modal.element.on('selected', function (e, args) {
            var chk = args.elem.find('.checkbox'),
                id = chk.attr('data-column-id'),
                isChecked = chk.prop('checked');

            args.elem.removeClass('is-selected');

            if (chk.is(':disabled')) {
              return;
            }
            self.isColumnsChanged = true;

            if (!isChecked) {
              self.showColumn(id);
              chk.prop('checked', true);
            } else {
              self.hideColumn(id);
              chk.prop('checked', false);
            }
          }).on('close.datagrid', function () {
            if (self.isColumnsChanged) {
              self.updateColumnsAndTableWidth();
            }
            self.isColumnsChanged = false;
          });
      });
    },

    updateColumnsAndTableWidth: function() {
      var self = this;
      self.table.css({'width': ''});
      self.headerNodes().not('.is-hidden').each(function () {
        var header = $(this);
        self.setColumnWidth(header.attr('data-column-id'), header.width());
      });
    },

    // Explicitly Set the Width of a column (reset: optional set "true" to reset table width)
    setColumnWidth: function(id, width, reset) {
      var self = this,
        total = 0,
        percent = parseFloat(width);

      if (!percent) {
        return;
      }

      //Handles min width on some browsers
      if (width < 50) {
        return;
      }

      self.table.css('width', self.element.width());

      if (reset && self.fixedHeader) {
        self.clone.css('width', self.element.width());
      }

      if (typeof width !=='number') { //calculate percentage
        width = percent / 100 * self.element.width();
      }

      self.headerNodes().not('.is-hidden').each(function () {
        var col = $(this);

        if (col.attr('data-column-id') === id) {
          col.css('width', width);
          total += width;
        } else {
          total += col.outerWidth();
        }

        self.adjustDraggablePosition(col);
      });

      var columnSettings = this.columnById(id);
      if (columnSettings[0] && columnSettings[0].width) {
        columnSettings[0].width = width;
      }

      if (self.fixedHeader) {
        self.headerNodes().each(function (i) {
          var cloneHeader = self.cloneHeaderNodes().eq(i);
          cloneHeader.css('width', $(this).outerWidth());
          self.adjustDraggablePosition(cloneHeader);
        });
      }

      self.table.css('width', total);

      if (self.fixedHeader) {
        self.clone.css('width', total);
      }
    },

    // Get child offset
    getChildOffset: function(obj) {
      var childPos = obj.offset(),
        parentPos = obj.parent().offset();
      return {
        top: childPos.top - parentPos.top,
        left: childPos.left - parentPos.left
      };
    },

    //Generate Resize Handles
    createResizeHandle: function() {
      var self = this;

      this.resizeHandle = $('<div class="resize-handle" aria-hidden="true"></div>');
      if (this.settings.columnGroups) {
        this.resizeHandle.css('height', '80px');
      }

      if (this.settings.filterable) {
        this.resizeHandle.css('height', '62px');
      }

      this.table.before(this.resizeHandle);

      this.resizeHandle.drag({axis: 'x', containment: 'parent'}).on('drag.datagrid', function (e, ui) {
        if (!self.currentHeader) {
          return;
        }

        var id = self.currentHeader.attr('data-column-id'),
          offset = (self.element.parent().css('position')!=='static') ?
            self.getChildOffset(self.currentHeader) :
            self.currentHeader.offset();

        self.dragging = true;
        self.setColumnWidth(id, ui.left - offset.left - 6 + self.element.scrollLeft());
        self.syncFixedHeader();
      })
      .on('dragend.datagrid', function () {
        self.dragging = false;
      });
    },

    //Show Summary and any other count info
    displayCounts: function(totals) {
      var self = this,
        count = self.tableBody.find('tr:visible').length;

      //Consitutues Client Side Paging
      if (self.settings.source === null) {
        count = self.recordCount;
      }

      if (totals && totals !== -1) {
        count = totals;
      }

      var countText = '(' + count + ' ' + Locale.translate('Results') + ')';
      if (self.settings.resultsText && typeof self.settings.resultsText === 'function') {
        countText = self.settings.resultsText(self, count);
      }

      if (self.toolbar) {
        self.toolbar.find('.datagrid-result-count').html(countText);
        self.toolbar.attr('aria-label',  self.toolbar.find('.title').text());
        self.toolbar.find('.datagrid-row-count').text(count);
      }
      self.element.closest('.modal').find('.datagrid-result-count').html(countText);

      if (self.contextualToolbar) {
        self.contextualToolbar.find('.selection-count').text(self._selectedRows.length + ' ' + Locale.translate('Selected'));
      }
    },

    //Trigger event on parent and compose the args
    triggerRowEvent: function (eventName, e, stopPropagation) {
      var self = this,
          cell = $(e.target).closest('td').index(),
          row = $(e.target).closest('tr').index(),
          item = self.settings.dataset[row];

      if ($(e.target).is('a')) {
        stopPropagation = false;
      }

      if (stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
      }

      self.element.trigger(eventName, [{row: row, cell: cell, item: item, originalEvent: e}]);
      return false;
    },

    //Returns a cell node
    cellNode: function (row, cell) {
      var rowNode = this.tableBody.find('tr[role="row"]').eq(row);
      if (row instanceof jQuery) {
        rowNode = row;
      }

      if (cell === -1) {
        return $();
      }

      return rowNode.find('td[role="gridcell"]:not(.is-hidden)').eq(cell);
    },

    // Attach All relevant events
    handleEvents: function() {
      var self = this,
        isMultiple = this.settings.selectable === 'multiple';

      // Set Focus on rows
      self.table
        .on('focus.datagrid', 'tbody > tr', function () {
          if (!self.settings.cellNavigation && self.settings.rowNavigation) {
            $(this).addClass('is-active-row');
          }
        })
        .on('blur.datagrid', 'tbody > tr', function () {
          $('tbody > tr', self.table).removeClass('is-active-row');
        });

      //Handle Sorting
      this.element.add(this.clone)
        .off('click.datagrid')
        .on('click.datagrid', 'th.is-sortable', function (e) {
          if ($(e.target).parent().is('.datagrid-filter-wrapper')) {
            return;
          }

          self.setSortColumn($(this).attr('data-column-id'));
        });

      //Prevent redirects
      this.table.off('mouseup.datagrid touchstart.datagrid').on('mouseup.datagrid touchstart.datagrid', 'a', function (e) {
        e.preventDefault();
      });

      //Handle Clicking Buttons and links in formatters
      this.table.off('mouseup.datagrid touchstart.datagrid').on('mouseup.datagrid touchstart.datagrid', 'td', function (e) {

        var elem = $(this).closest('td'),
          btn = $(this).find('button'),
          cell = elem.index(),
          rowNode = $(this).closest('tr'),
          row = self.visualRowIndex(rowNode),
          col = self.columnSettings(cell),
          item = self.settings.dataset[self.dataRowIndex(rowNode)];

        function handleClick() {
          if (e.type === 'mouseup' && e.button !== 0) {
            return;
          }

          if (elem.hasClass('is-focusable')) {
            if (!$(e.target).is(self.settings.buttonSelector)) {
              return;
            }
          }

          if (!elem.hasClass('is-cell-readonly')) {
            col.click(e, [{row: row, cell: cell, item: item, originalEvent: e}]);
          }
        }

        if (col.click && typeof col.click === 'function') {
          handleClick();
        }

        if (col.menuId) {
          btn.popupmenu({menuId: col.menuId, trigger: 'immediate'});

          if (col.selected) {
            btn.on('selected.datagrid', col.selected);
          }
        }

        if (btn.is('.datagrid-expand-btn')) {
          var idx = rowNode.index()+1;
          self.toggleRowDetail(idx);
          self.toggleChildren(idx);
        }

        if (self.isCellEditable(row, cell)) {
          setTimeout(function() {
            if (self.isContainTextfield(elem) && self.notContainTextfield(elem)) {
              self.quickEditMode = true;
            }
          }, 0);
        }

      });

      var body = this.table.find('tbody');
      body.off('touchcancel.datagrid touchend.datagrid').on('touchcancel.datagrid touchend.datagrid', 'td', function (e) {
        if (!$('input, button, a', this).length) {
          e.preventDefault();
        }
        e.stopPropagation();
        $(this).trigger('click');
      }).off('click.datagrid').on('click.datagrid', 'td', function (e) {
        var target = $(e.target);

        if (target.closest('.datagrid-row-detail').length === 1) {
          return;
        }

        self.triggerRowEvent('click', e, true);
        self.setActiveCell(target.closest('td'));

        //Dont Expand rows or make cell editable when clicking expand button
        if (target.is('.datagrid-expand-btn') || (target.is('.datagrid-cell-wrapper') && target.find('.datagrid-expand-btn').length)) {
          return;
        }

        var canSelect = self.settings.clickToSelect ? true : $(target).is('.datagrid-selection-checkbox') || $(target).find('.datagrid-selection-checkbox').length ===1;

        if (canSelect && isMultiple && e.shiftKey) {
          self.selectRowsBetweenIndexes([self.lastSelectedRow, target.closest('tr').index()]);
          e.preventDefault();
        } else if (canSelect) {
          self.toggleRowSelection(target.closest('tr'));
        }

        self.makeCellEditable(self.activeCell.row, self.activeCell.cell, e);

      });

      body.off('dblclick.datagrid').on('dblclick.datagrid', 'tr', function (e) {
        self.triggerRowEvent('dblclick', e, true);
      });

      //Handle Context Menu Option
      body.off('contextmenu.datagrid').on('contextmenu.datagrid', 'tr', function (e) {

        if (!self.isSubscribedTo(e, 'contextmenu')) {
          return;
        }

        self.triggerRowEvent('contextmenu', e, (self.settings.menuId ? true : false));
        e.preventDefault();

        if (self.settings.menuId) {
          $(e.currentTarget).popupmenu({menuId: self.settings.menuId, eventObj: e, trigger: 'immediate'});
        }

        return false;
      });

      // Move the drag handle to the end or start of the column
      this.headerRow
        .add((this.clone ? this.clone.find('thead') : []))
        .off('mouseenter.datagrid').on('mouseenter.datagrid', 'th', function() {
          if (!self.draggableStatus) {
            self.adjustDraggablePosition();
          }
        })
        .off('mousemove.datagrid touchstart.datagrid touchmove.datagrid')
        .on('mousemove.datagrid touchstart.datagrid touchmove.datagrid', 'th', function (e) {
          if (self.dragging) {
            return;
          }

          self.currentHeader = $(e.target).closest('th');

          if (!self.currentHeader.hasClass('is-resizable')) {
            return;
          }

          var isClone = self.currentHeader.closest('.datagrid-clone').length,
            headerDetail = self.currentHeader.closest('.header-detail'),
            extraMargin = headerDetail.length ? parseInt(headerDetail.css('margin-left'), 10) : 0,
            leftEdge = parseInt(self.currentHeader.position().left) - (extraMargin || 0),
            rightEdge = leftEdge + self.currentHeader.outerWidth(),
            alignToLeft = (e.pageX - leftEdge > rightEdge - e.pageX),
            leftPos = 0;

          //TODO: Test Touch support - may need handles on each column
          leftPos = (alignToLeft ? (rightEdge - 6): (leftEdge - 6));

          if (self.currentHeader.index() === 0 && !alignToLeft) {
            leftPos = '-999';
          }

          if (!alignToLeft) {
             self.currentHeader = self.currentHeader.prev();
          }

          if (!self.currentHeader.hasClass('is-resizable')) {
            return;
          }

          self.resizeHandle.css('left', leftPos + 'px');
          self.resizeHandle.css('top', (isClone ? '-40px' : 'auto'));
        });

      // Handle Clicking Header Checkbox
      this
        .headerRow
        .off('click.datagrid')
        .on('click.datagrid', 'th .datagrid-checkbox', function () {
          var checkbox = $(this);

          if (!checkbox.hasClass('is-checked')) {
            checkbox.addClass('is-checked').attr('aria-checked', 'true');

            self.selectAllRows();

          } else {
            checkbox.removeClass('is-checked').attr('aria-checked', 'true');
            self.unSelectAllRows();
          }
        });

      // Implement Editing Commit Functionality
      body.off('focusout.datagrid').on('focusout.datagrid', 'td input, td textarea, div.dropdown', function () {
        //Popups are open
        if ($('#calendar-popup, .autocomplete.popupmenu.is-open').is(':visible') ||
          $('.lookup-modal.is-visible').length) {
          return;
        }

        if (self.editor && self.editor.input) {
          self.commitCellEdit(self.editor.input);
        }

      });

      //=== BEGIN: isScrolling setup for touch device ==========================
      var touchPrevented = false,
      threshold = 10,
      pos;

      // Is the jQuery Element a component of the current Datagrid?
      function isDatagridElement(target) {
        return !!target.closest('.datagrid, .datagrid-container').length;
      }

      // Triggered when the user clicks anywhere in the document
      function clickDocument(e) {
        var target = $(e.target);
        self.isScrolling = false;

        if (touchPrevented && isDatagridElement(target)) {
          e.preventDefault();
          touchPrevented = false;
          self.isScrolling = true;
        }
      }

      function touchStartCallback(e) {
        touchPrevented = false;

        pos = {
          x: e.originalEvent.touches[0].pageX,
          y: e.originalEvent.touches[0].pageY
        };

        $(document).on('touchmove.datagrid', function touchMoveCallback(e) {
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
        $(document).off('touchmove.datagrid');
        if (touchPrevented) {
          e.preventDefault();
          return false;
        }
        clickDocument(e);
      }

      // Need to detect whether or not scrolling is happening on a touch-capable device
      $(document)
        .on('touchstart.datagrid', touchStartCallback)
        .on('touchend.datagrid touchcancel.datagrid', touchEndCallback)
        .on('click.datagrid', clickDocument);

      //=== END: Isscrolls setup for touch device ==============================
    },

    //Check if the event is subscribed to
    isSubscribedTo: function (e, eventName) {
      var self = this;

      for (var event in $._data(self.element[0]).events) {
        if (event === eventName) {
          return true;
        }
      }

      return false;
    },

    appendToolbar: function () {
      var toolbar, title = '', more, self = this;

      if (!settings.toolbar) {
        return;
      }

      //Allow menu to be added manually
      if (this.element.parent().parent().find('.toolbar:not(.contextual-toolbar)').length === 1) {
        toolbar = this.element.parent().parent().find('.toolbar:not(.contextual-toolbar)');
      } else {
        toolbar = $('<div class="toolbar" role="toolbar"></div>');

        if (settings.toolbar.title) {
          title = $('<div class="title">' + settings.toolbar.title + '  </div>');
        }

        if (!title) {
          title = toolbar.find('.title');
        }
        toolbar.append(title);

        if (settings.toolbar.results) {
          //Actually value filled in displayResults
          title.append('<span class="datagrid-result-count"></span>');
        }

        var buttonSet = $('<div class="buttonset"></div>').appendTo(toolbar);

        if (settings.toolbar.keywordFilter) {
          var labelMarkup = $('<label class="audible" for="gridfilter">'+ Locale.translate('Keyword') +'</label>'),
            searchfieldMarkup = $('<input class="searchfield" name="searchfield" placeholder="' + Locale.translate('Keyword') + '" id="gridfilter">');

          buttonSet.append(labelMarkup);

          if (!settings.toolbar.collapsibleFilter) {
            searchfieldMarkup.attr('data-options', '{ collapsible: false }');
          }

          buttonSet.append(searchfieldMarkup);
        }

        if (settings.toolbar.dateFilter) {
          buttonSet.append('<button class="btn" type="button">' + $.createIcon({ icon: 'calendar' }) + '<span>' + Locale.translate('Date') + '</span></button>');
        }

        if (settings.toolbar.actions) {
          more = $('<div class="more"></div>').insertAfter(buttonSet);
          more.append('<button class="btn-actions" title="More" type="button">' + $.createIcon({ icon: 'more' }) + '<span class="audible">Grid Features</span></button>');
          toolbar.addClass('has-more-button');
        }

        var menu = $('<ul class="popupmenu"></ul>');

        if (settings.toolbar.personalize) {
          menu.append('<li><a href="#" data-option="personalize-columns">' + Locale.translate('PersonalizeColumns') + '</a></li>');
        }

        if (settings.toolbar.exportToExcel) {
          menu.append('<li><a href="#" data-option="export-to-excel">' + Locale.translate('ExportToExcel') + '</a></li>');
        }

        if (settings.toolbar.advancedFilter) {
          menu.append('<li><a href="#">' + Locale.translate('AdvancedFilter') + '</a></li>');
        }

        if (settings.toolbar.views) {
          menu.append('<li><a href="#">' + Locale.translate('SaveCurrentView') + '</a></li> ' +
            '<li class="separator"></li> ' +
            '<li class="heading">' + Locale.translate('SavedViews') + '</li>' +
            '<li><a href="#">View One</a></li>');
        }

        if (settings.toolbar.rowHeight) {
          menu.append('<li class="separator single-selectable-section"></li>' +
            '<li class="heading">' + Locale.translate('RowHeight') + '</li>' +
            '<li class="is-selectable' + (this.settings.rowHeight === 'short' ? ' is-checked' : '') + '"><a data-option="row-short">' + Locale.translate('Short') + '</a></li>' +
            '<li class="is-selectable' + (this.settings.rowHeight === 'medium' ? ' is-checked' : '') + '"><a data-option="row-medium">' + Locale.translate('Medium') + '</a></li>' +
            '<li class="is-selectable' + (this.settings.rowHeight === 'normal' ? ' is-checked' : '') + '"><a data-option="row-normal">' + Locale.translate('Normal') + '</a></li>');
        }

        if (settings.toolbar.filterRow) {
          menu.append('<li class="separator"></li>' +
            '<li class="heading">' + Locale.translate('Filter') + '</li>' +
            '<li class="' + (settings.filterable ? 'is-checked ' : '') + 'is-toggleable"><a data-option="show-filter-row">' + Locale.translate('ShowFilterRow') + '</a></li>' +
            '<li class="is-indented"><a data-option="run-filter">' + Locale.translate('RunFilter') + '</a></li>' +
            '<li class="is-indented"><a data-option="clear-filter">' + Locale.translate('ClearFilter') + '</a></li>');
        }

        if (settings.toolbar.actions) {
          more.append(menu);
        }

        this.element.parent('.datagrid-wrapper').parent().prepend(toolbar);
      }

      toolbar.find('.btn-actions').popupmenu().on('selected', function(e, args) {
        var action = args.attr('data-option');
        if (action === 'row-short' || action === 'row-medium' || action === 'row-normal') {
          self.rowHeight(action.substr(4));
        }

        if (action === 'personalize-columns') {
          self.personalizeColumns();
        }

        if (action === 'export-to-excel') {
          self.exportToExcel();
        }

        //Filter actions
        if (action === 'show-filter-row') {
          self.toggleFilterRow();
        }
        if (action === 'run-filter') {
          self.applyFilter();
        }
        if (action === 'clear-filter') {
          self.clearFilter();
        }
      });

      if (!toolbar.data('toolbar')) {
        var opts = $.fn.parseOptions(toolbar);

        if (settings.toolbar.fullWidth) {
          opts.rightAligned = true;
        }

        toolbar.toolbar(opts);
      }

      toolbar.find('.searchfield').off('keypress.datagrid').on('keypress.datagrid', function (e) {
        if (e.keyCode === 13 || e.type==='change') {
          self.keywordSearch($(this).val());
        }
      });

      this.toolbar = toolbar;
    },

    //Get or Set the Row Height
    rowHeight: function(height) {
      if (height) {
        settings.rowHeight = height;
      }

      //TODO: Save in Grid Personalization
      this.table.removeClass('short-rowheight medium-rowheight normal-rowheight')
        .addClass(settings.rowHeight + '-rowheight');

      if (this.clone) {
        this.clone.removeClass('short-rowheight medium-rowheight normal-rowheight')
        .addClass(settings.rowHeight + '-rowheight');
      }

      return settings.rowHeight;
    },

    //Search a Term across all columns
    keywordSearch: function(term) {
      this.tableBody.find('tr[role="row"]').removeClass('is-filtered').show();
      this.filterExpr = [];

        this.tableBody.find('.datagrid-expandable-row').each(function () {
          var row = $(this);
          //Collapse All rows
          row.prev().find('.datagrid-expand-btn').removeClass('is-expanded');
          row.prev().find('.plus-minus').removeClass('active');
          row.removeClass('is-expanded').css('display', '');
          row.find('.datagrid-row-detail').css('height', '');
        });

      this.tableBody.find('.search-mode').each(function () {
        var cell = $(this),
          text = cell.text();
        cell.text(text.replace('<i>','').replace('</i>',''));
      });

      if (!term || term.length === 0) {
        this.displayCounts();

        if (this.pager) {
          this.resetPager('sorted');
        }

        return;
      }

      term = term.toLowerCase();
      this.filterExpr.push({column: 'all', operator: 'contains', value: term, ignorecase: 'yes'});

      this.highlightSearchRows(term);
      this.displayCounts();

      if (this.pager) {
        this.pager.setActivePage(1, true);
      }
    },

    highlightSearchRows: function (term) {
      // Move across all visible cells and rows, highlighting
      this.tableBody.find('tr').each(function () {
        var found = false,
          row = $(this);

          row.find('td').each(function () {
            var cell =  $(this),
              cellText = cell.text().toLowerCase();

            if (cellText.indexOf(term) > -1) {
              found = true;
              cell.find('*').each(function () {
                if (this.innerHTML === this.textContent) {
                  var contents = this.textContent,
                    node = $(this),
                    exp = new RegExp('(' + term + ')', 'i');

                  node.addClass('search-mode').html(contents.replace(exp, '<i>$1</i>'));
                }
              });
            }

          });

        // Hide non matching rows

        if (!found) {
          row.addClass('is-filtered').hide();
        } else if (found && row.is('.datagrid-expandable-row')) {
          row.prev().show();
          row.prev().find('.datagrid-expand-btn').addClass('is-expanded');
          row.prev().find('.plus-minus').addClass('active');
          row.addClass('is-expanded').css('display', 'table-row');
          row.find('.datagrid-row-detail').css('height', 'auto');
        }

      });
    },

    //Get or Set Selected Rows
    _selectedRows: [],

    selectAllRows: function () {
      var rows = [];

      for (var i = 0; i < this.settings.dataset.length; i++) {
        rows.push(i);
      }

      this.dontSyncUi = true;
      this.selectedRows(rows, true, true);
      this.dontSyncUi = false;
      this.syncSelectedUI();
      this.element.trigger('selected', [this._selectedRows]);
    },

    unSelectAllRows: function () {
      this.dontSyncUi = true;
      this.selectedRows([], true, true);
      this.dontSyncUi = false;
      this.syncSelectedUI();
      this.element.trigger('selected', [this._selectedRows]);
    },

    //Toggle selection on a single row
    selectRow: function (idx, selectAll) {
      var checkbox = null, rowNode, dataRowIndex;

      if (idx === undefined || idx === -1 || !this.settings.selectable) {
        return;
      }

      rowNode = this.visualRowNode(idx);
      dataRowIndex = this.dataRowIndex(rowNode);

      if (isNaN(dataRowIndex)) {
        dataRowIndex = idx;
      }

      if (!rowNode) {
        return;
      }

      // if scrolling NOT click on touch device
      if (this.isTouch && this.isScrolling) {
        rowNode.removeClass('is-active-row')
          .find('td:not(.is-editing)').css({'background-color': 'transparent'});
        return;
      }

      if (this.settings.selectable === 'single' && this._selectedRows.length > 0) {
        this.unselectRow(this._selectedRows[0].idx);
      }

      if (!rowNode.hasClass('is-selected')) {
        checkbox = this.cellNode(rowNode, this.columnIdxById('selectionCheckbox'));

        //Select It
        var rowData = this.settings.dataset[dataRowIndex];
        if (this.pager && this.settings.source) {
          rowData = this.settings.dataset[rowNode.index()];
        }
        this._selectedRows.push({idx: dataRowIndex, data: rowData, elem: rowNode});
        this.lastSelectedRow = idx;// Rememeber index to use shift key

        rowNode.addClass('is-selected').attr('aria-selected', 'true');
        rowNode.find('td').attr('aria-selected', 'true');
        checkbox.find('.datagrid-cell-wrapper .datagrid-checkbox').addClass('is-checked').attr('aria-checked', 'true');
      }

      this.syncSelectedUI();

      if (!selectAll) {
        this.element.trigger('selected', [this._selectedRows]);
      }
    },

    dontSyncUi: false,

    // Select rows between indexes
    selectRowsBetweenIndexes: function(indexes) {
      indexes.sort(function(a, b) { return a-b; });
      for (var i = indexes[0]; i <= indexes[1]; i++) {
        this.selectRow(i);
      }
    },

    //Set ui elements based on selected rows
    syncSelectedUI: function () {

      var headerCheckbox = this.headerRow.find('.datagrid-checkbox'),
        self = this;

      //Sync the header checkbox
      if (this._selectedRows.length > 0) {
        headerCheckbox.addClass('is-checked is-partial');
      }

      if (this._selectedRows.length === this.settings.dataset.length) {
        headerCheckbox.addClass('is-checked').removeClass('is-partial');
      }

      if (this._selectedRows.length === 0) {
        headerCheckbox.removeClass('is-checked').removeClass('is-partial');
      }

      //Open or Close the Contextual Toolbar.
      if (self.contextualToolbar.length !== 1 || self.dontSyncUi) {
        return;
      }

      if (self._selectedRows.length === 0) {
        self.contextualToolbar.animateClosed();

      }

      if (self._selectedRows.length > 0 && self.contextualToolbar.height() === 0) {
        self.contextualToolbar.css('display', 'block').animateOpen();
      }

    },

    toggleRowSelection: function (idx) {
      var row = (typeof idx === 'number' ? this.tableBody.find('tr[role="row"]').eq(idx) : idx),
        isSingle = this.settings.selectable === 'single',
        rowIndex = (typeof idx === 'number' ? idx : this.dataRowIndex(row));

      if (this.settings.selectable === false) {
        return;
      }

      if (this.editor && row.hasClass('is-selected')) {
        return;
      }

      if (isSingle && row.hasClass('is-selected')) {
        this.unselectRow(rowIndex);
        this._selectedRows = [];
        this.displayCounts();
        return this._selectedRows;
      }

      if (row.hasClass('is-selected')) {
        this.unselectRow(rowIndex);
      } else {
        this.selectRow(rowIndex);
      }

      this.displayCounts();

      return this._selectedRows;
    },

    unselectRow: function (idx, nosync, selectAll) {
      var rowNode = this.visualRowNode(idx),
        checkbox = null, selIdx;

      if (!rowNode || idx === undefined) {
        return;
      }

      checkbox = this.cellNode(rowNode, this.columnIdxById('selectionCheckbox'));

      selIdx = undefined;
      for (var i = 0; i < this._selectedRows.length; i++) {
        if (this._selectedRows[i].idx === idx) {
          selIdx = i;
        }
      }

      if (selIdx !== undefined) {
        this._selectedRows.splice(selIdx, 1);
      }

      rowNode.removeClass('is-selected').removeAttr('aria-selected');
      rowNode.find('td').removeAttr('aria-selected');

      checkbox.find('.datagrid-checkbox').removeClass('is-checked').attr('aria-checked', 'false');

      if (!nosync) {
        this.syncSelectedUI();
      }

      if (!selectAll) {
        this.element.trigger('selected', [this._selectedRows]);
      }
    },

    //Set the selected rows by passing the row index or an array of row indexes
    selectedRows: function (row, nosync, selectAll) {
      var idx = -1,
          isSingle = this.settings.selectable === 'single',
          isMultiple = this.settings.selectable === 'multiple';

      if (!row) {
        return this._selectedRows;
      }

      if (row.length === 0 && this._selectedRows.length === 0) {
        return;
      }

      if (isSingle) {
        //Unselect
        if (this._selectedRows[0]) {
          this.unselectRow(this._selectedRows[0].idx, nosync, selectAll);
        }

        //Select - may be passed array or int
        idx = ((Object.prototype.toString.call(row) === '[object Array]' ) ? row[0] : row.index());
        this.selectRow(idx, selectAll);
      }

      if (isMultiple) {
        if (Object.prototype.toString.call(row) === '[object Array]' ) {
          for (var i = 0; i < row.length; i++) {
            this.selectRow(row[i], selectAll);
          }

          if (row.length === 0) {
            for (var j = 0; j < this.settings.dataset.length; j++) {
              this.unselectRow(j, nosync, selectAll);
            }
            this._selectedRows = [];
          }

        } else {
          this.selectRow(row.index(), selectAll);
        }
      }

      this.displayCounts();

      return this._selectedRows;
    },

    //Set the row status
    rowStatus: function(idx, status, tooltip) {
      var rowStatus;

      if (!status) {
        delete this.settings.dataset[idx].rowStatus;
        this.updateRow(idx);
        return;
      }

      if (!this.settings.dataset[idx]) {
        return;
      }

      this.settings.dataset[idx].rowStatus = {};
      rowStatus = this.settings.dataset[idx].rowStatus;

      rowStatus.icon = status;
      status = status.charAt(0).toUpperCase() + status.slice(1);
      status = status.replace('-progress', 'Progress');
      rowStatus.text = Locale.translate(status);

      tooltip = tooltip ? tooltip.charAt(0).toUpperCase() + tooltip.slice(1) : rowStatus.text;
      rowStatus.tooltip = tooltip;

      this.updateRow(idx);
    },

    //Get the column object by id
    columnById: function(id) {
      return $.grep(this.settings.columns, function(e) { return e.id === id; });
    },

    //Get the column index from the col's id
    columnIdxById: function(id) {
      var cols = this.settings.columns,
        idx = -1;

      for (var i = 0; i < cols.length; i++) {
       if (cols[i].id === id) {
        idx = i;
       }
      }
      return idx;
    },

    // Current Active Cell
    activeCell: {node: null, cell: null, row: null},

    // Handle all keyboard behavior
    handleKeys: function () {
      var self = this,
        isMultiple = self.settings.selectable === 'multiple',
        checkbox = $('th .datagrid-checkbox', self.headerRow);

      // Handle header navigation
      self.table.on('keydown.datagrid', 'th', function (e) {
        var key = e.which || e.keyCode || e.charCode || 0,
          th = $(this),
          index = th.siblings(':visible').addBack().index(th),
          last = self.visibleColumns().length -1,
          triggerEl, move;

        if ($(e.target).closest('.popupmenu').length > 0) {
          return;
        }

        // Enter or Space
        if (key === 13 || key === 32) {
          triggerEl = (isMultiple && index === 0) ? $('.datagrid-checkbox', th) : th;
          triggerEl.trigger('click.datagrid').focus();

          if (key === 32) { // Prevent scrolling with space
            e.preventDefault();
          }
        }

        //Press Home, End, Left and Right arrow to move to first, last, previous or next
        if ([35, 36, 37, 39].indexOf(key) !== -1) {
          move = index;

          //Home, End or Ctrl/Meta + Left/Right arrow to move to the first or last
          if (/35|36/i.test(key) || ((e.ctrlKey || e.metaKey) && /37|39/i.test(key))) {
            if (Locale.isRTL()) {
              move = (key === 36 || ((e.ctrlKey || e.metaKey) && key === 37)) ? last : 0;
            } else {
              move = (key === 35 || ((e.ctrlKey || e.metaKey) && key === 39)) ? last : 0;
            }
          }

          // Left and Right arrow
          else {
            if (Locale.isRTL()) {
              move = key === 39 ? (index > 0 ? index-1 : index) : (index < last ? index+1 : last);
            } else {
              move = key === 37 ? (index > 0 ? index-1 : index) : (index < last ? index+1 : last);
            }
          }

          // Makeing move
          th.removeAttr('tabindex').removeClass('is-active');
          $('th:not(.is-hidden)', this.header).eq(move).attr('tabindex', '0').addClass('is-active').focus();
          e.preventDefault();
        }

        // Down arrow
        if (key === 40) {
          th.removeAttr('tabindex');
          self.setActiveCell(0, index);
          e.preventDefault();
        }

      });


      //Set clone's focus state
      self.table.on('focus.datagrid', 'th', function () {
        var th = $(this);

        if (self.fixedHeader) {
          self.clone.find('thead th').eq(th.index()).addClass('is-focused');
        }
      });

      self.table.on('blur.datagrid', 'th', function () {
        var th = $(this);

        if (self.fixedHeader) {
          self.clone.find('thead th').eq(th.index()).removeClass('is-focused');
        }
      });

      //Handle Editing / Keyboard
      self.table.on('keydown.datagrid', 'td, input', function (e) {
        var key = e.which || e.keyCode || e.charCode || 0,
          handled = false;

        // F2 - toggles actionableMode "true" and "false"
        if (key === 113) {
          self.settings.actionableMode = self.settings.actionableMode ? false : true;
          handled = true;
        }

        if (handled) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      });

      //TODO: Press Alt+Up or Alt+Down to set focus to the first or last row on the current page.
      //Press PageUp or PageDown to open the previous or next page and set focus to the first row.
      //Press Alt+PageUp or Alt+PageDown to open the first or last page and set focus to the first row.

      //Handle rest of the keyboard
      self.table.on('keydown.datagrid', 'td', function (e) {
        var key = e.which || e.keyCode || e.charCode || 0,
          handled = false,
          isRTL = Locale.isRTL(),
          node = self.activeCell.node,
          row = self.activeCell.row,
          cell = self.activeCell.cell,
          col = self.columnSettings(cell),
          item = self.settings.dataset[self.dataRowIndex(row)],
          visibleCols = self.visibleColumns(),
          isSelectionCheckbox = !!($('.datagrid-selection-checkbox', node).length),
          lastRow, lastCell;

        lastCell = visibleCols.length-1;
        lastRow = node.closest('tbody').find('tr:last').index();

        //Tab, Left and Right arrow keys.
        if ([9, 37, 39].indexOf(key) !== -1) {
          if (key === 9 && !self.settings.actionableMode) {
            return;
          }

          if (key !== 9 && e.altKey) {
            //[Alt + Left/Right arrow] to move to the first or last cell on the current row.
            cell = ((key === 37 && !isRTL) || (key === 39 && isRTL)) ? 0 : lastCell;
            self.setActiveCell(row, cell);
          }
          //Tab, Shift-tab, Left and Right arrow keys to navigate by cell.
          else if (!self.quickEditMode || (key === 9)) {
            if ((!isRTL && (key === 37 || key === 9 && e.shiftKey)) ||
                (isRTL && (key === 39 || key === 9))) {
              cell--;
            } else {
              cell = (cell+1 > lastCell) ? lastCell : cell+1;
            }
            self.setActiveCell(row, cell);
            self.quickEditMode = false;
            handled = true;
          }
        }

        //Up arrow key
          if (key === 38 && !self.quickEditMode) {
          //Press [Control + Up] arrow to move to the first row on the first page.
          if (e.altKey) {
            self.setActiveCell(0, cell);
          }
          //Up arrow key to navigate by row.
          else {
            if (row === 0) {
              node.removeAttr('tabindex');
              $('th:not(.is-hidden)', this.header).eq(cell).attr('tabindex', '0').focus();
            }
            self.setActiveCell(row-1, cell);
            handled = true;
          }
        }

        //Down arrow key
        if (key === 40 && !self.quickEditMode) {
          //Press [Control + Down] arrow to move to the last row on the last page.
          if (e.altKey) {
            self.setActiveCell(lastRow, cell);
          }
          //Down arrow key to navigate by row.
          else {
            // if ($('.autocomplete.popupmenu.is-open').is(':hidden')) {
              self.setActiveCell(((row+1 > lastRow) ? lastRow : row+1), cell);
              handled = true;
            // }
          }
        }

        //Press Control+Spacebar to announce the current row when using a screen reader.
        if (key === 32 && e.ctrlKey && node) {
          var string = '';
          row = node.closest('tr');

          row.children().each(function () {
            var cell = $(this);
            //Read Header
            //string += $('#' + cell.attr('aria-describedby')).text() + ' ' + cell.text() + ' ';
            string += cell.text() + ' ';
          });

          $('body').toast({title: '', audibleOnly: true, message: string});
          handled = true;
        }

        //Press Home or End to move to the first or last cell on the current row.
        if (key === 36) {
          self.setActiveCell(row, 0);
        }

        if (key === 35) {
          // lastCell = self.activeCell.node.closest('tr').find('td:last').index();
          self.setActiveCell(row, lastCell);
        }

        // For mode 'Selectable':
        // Press Space to toggle row selection, or click to activate using a mouse.
        if (key === 32 && (!self.settings.editable || isSelectionCheckbox)) {
          e.preventDefault();
          row = node.closest('tr');

          if ($(e.target).closest('.datagrid-row-detail').length === 1) {
            return;
          }

          // Toggle datagrid-expand with Space press
          var btn = $(e.target).find('.datagrid-expand-btn');
          if (btn && btn.length) {
            btn.trigger('mouseup.datagrid');
            e.preventDefault();
            return;
          }

          if (isMultiple && e.shiftKey) {
            self.selectRowsBetweenIndexes([self.lastSelectedRow, row.index()]);
          } else {
            self.toggleRowSelection(row);
          }

        }

        // For Editable mode - press Enter or Space to edit or toggle a cell, or click to activate using a mouse.
        if (self.settings.editable && key === 32) {
          if (!self.editor) {
            self.makeCellEditable(row, cell, e);
          }
        }

        // if column have click function to fire [ie. action button]
        if (key === 13 && col.click && typeof col.click === 'function') {
          if (node.hasClass('is-focusable')) {
            if ($(e.target).is(self.settings.buttonSelector)) {
              if (!node.hasClass('is-cell-readonly')) {
                col.click(e, [{row: row, cell: cell, item: item, originalEvent: e}]);
              }
            }
          }
        }

        if (self.settings.editable && key === 13) {
          //Allow shift to add a new line
          if ($(e.target).is('textarea') && e.shiftKey) {
            return;
          }

          if (self.editor) {
            self.quickEditMode = false;
            self.commitCellEdit(self.editor.input);
            self.setNextActiveCell(e);
          }
          else {
            self.makeCellEditable(row, cell, e);
            if (self.isContainTextfield(node) && self.notContainTextfield(node)) {
              self.quickEditMode = true;
            }
          }
          handled = true;
        }

        //A printable character navigatable
        if ([9, 13, 32, 35, 36, 37, 38, 39, 40, 113].indexOf(key) === -1 &&
          !e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey && self.settings.editable) {
          if (!self.editor) {
            self.makeCellEditable(row, cell, e);
          }
        }

        // If multiSelect is enabled, press Control+A to toggle select all rows
        if (isMultiple && !self.editor && ((e.ctrlKey || e.metaKey) && key === 65)) {
          if (!checkbox.hasClass('is-checked') || checkbox.hasClass('is-partial')) {
            checkbox.removeClass('is-partial').addClass('is-checked').attr('aria-checked', 'true');
            self.selectAllRows();
          } else {
            checkbox.removeClass('is-checked').attr('aria-checked', 'true');
            self.unSelectedRows([]);
          }
          handled = true;
        }

        if (handled) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

      });
    },

    isContainTextfield: function(container) {
      var noTextTypes = ['image', 'button', 'submit', 'reset', 'checkbox', 'radio'],
        selector = 'textarea, input',
        l = noTextTypes.length, i;

      selector += l ? ':not(' : '';
      for(i = 0; i < l; i++) {
        selector += '[type='+ noTextTypes[i] +'],';
      }
      selector = l ? (selector.slice(0, -1) + ')') : '';

      return !!($(selector, container).length);
    },

    notContainTextfield: function(container) {
      var selector = '.dropdown, .datepicker';
      return !($(selector, container).length);
    },

    //Current Cell Editor thats in Use
    editor: null,

    isCellEditable: function(row, cell) {
      if (!this.settings.editable) {
        return false;
      }

      var col = this.columnSettings(cell);
      if (col.readonly) {
        return false;
      }

      //Check if cell is editable via hook function
      var cellNode = this.activeCell.node.find('.datagrid-cell-wrapper'),
        cellValue = (cellNode.text() ? cellNode.text() : this.fieldValue(this.settings.dataset[row], col.field));

      if (col.isEditable) {
        var canEdit = col.isEditable(row, cell, cellValue, col, this.settings.dataset[row]);

        if (!canEdit) {
          return false;
        }
      }

      if (!col.editor) {
        return false;
      }

      return true;
    },

    // Invoked in three cases: 1) a row click, 2) keyboard and enter, 3) In actionable mode and tabbing
    makeCellEditable: function(row, cell, event) {

      if (!this.isCellEditable(row, cell)) {
        return;
      }

      //Locate the Editor
      var col = this.columnSettings(cell);
      if (!col.editor) {
        if (event.keyCode === 32) {
          this.toggleRowSelection(this.activeCell.node.closest('tr'));
        }
        return;
      }

      // Put the Cell into Focus Mode
      this.setActiveCell(row, cell);

      var dataRowIndex = this.dataRowIndex(this.visualRowNode(row)),
        cellNode = this.activeCell.node.find('.datagrid-cell-wrapper'),
        cellParent = cellNode.parent('td'),
        cellValue = (cellNode.text() ? cellNode.text() : this.fieldValue(this.settings.dataset[dataRowIndex], col.field));

      if (cellParent.hasClass('is-editing')) {
        //Already in edit mode
        //Editor.focus
        cellNode.find('input').focus();
        return false;
      }

      //Editor.init
      cellParent.addClass('is-editing');
      cellNode.empty();
      this.editor = new col.editor(dataRowIndex, cell, cellValue, cellNode, col, event, this, this.settings.dataset[dataRowIndex]);

      if (this.editor.useValue) {
        cellValue = this.fieldValue(this.settings.dataset[dataRowIndex], col.field);
      }
      this.editor.val(cellValue);
      this.editor.focus();
      this.element.triggerHandler('entereditmode');
    },

    commitCellEdit: function(input) {
      var newValue, cellNode;

      if (!this.editor) {
        return;
      }

      //Editor.getValue
      newValue = this.editor.val();
      newValue = $.escapeHTML(newValue);

      //Format Cell again
      cellNode = input.closest('td').removeClass('is-editing');

      //Editor.destroy
      this.editor.destroy();
      this.editor = null;

      //Save the Cell Edit back to the data set
      this.updateCellNode(this.dataRowIndex(cellNode.parent()) , cellNode.index(), newValue);
      this.element.triggerHandler('exiteditmode');
    },

    //Returns Column Settings from a cell
    columnSettings: function (cell) {
      var cellNode = this.tableBody.find('tr:first').find('td:not(.is-hidden)').eq(cell),
        column = settings.columns[parseInt(cellNode.attr('data-idx'))];

      return column;
    },

    //Attempt to serialize the value back
    coerceValue: function (value, oldVal, col) {
      var newVal;

      if (col.serialize) {
        newVal = col.serialize(value);
        return newVal;
      }

      return newVal;
    },

    updateCell: function(row, cell, value) {
      var col = this.columnSettings(cell);

      if (value === undefined) {
        value = this.fieldValue(this.settings.dataset[row], col.field);
      }

      this.updateCellNode(row, cell, value, true);
    },

    updateCellNode: function (row, cell, value, fromApiCall) {
      var rowNode = this.visualRowNode(row),
        cellNode = rowNode.find('td').eq(cell),
        col = this.settings.columns[cell],
        formatted = '',
        formatter = (col.formatter ? col.formatter : this.defaultFormatter);

      var oldVal = (col.field ? this.settings.dataset[row][col.field] : ''),
        coercedVal, escapedVal;

      //Coerce/Serialize value if from cell edit
      if (!fromApiCall) {
        coercedVal = this.coerceValue(value, oldVal, col, row, cell);

        //coerced value may be coerced to empty string, null, or 0
        if (coercedVal === undefined) {
          coercedVal = value;
        }
      } else {
        coercedVal = value;
      }

      //Setup/Sync tooltip
      if (cellNode.data('tooltip')){
        cellNode.data('tooltip').destroy();
      }

      //Update the value in the dataset
      var rowData = this.settings.dataset[row];
      if (col.id === 'rowStatus' && rowData.rowStatus && rowData.rowStatus.tooltip) {
        cellNode.attr('title', rowData.rowStatus.tooltip);
        cellNode.tooltip({placement: 'right',
          isErrorColor: rowData.rowStatus.icon === 'error'
        });
      }

      coercedVal = $.unescapeHTML(coercedVal);

      if (col.field && coercedVal !== oldVal) {
        if (col.field.indexOf('.') > -1 ) {
          var parts = col.field.split('.');
          if (parts.length === 2) {
            this.settings.dataset[row][parts[0]][parts[1]] = coercedVal;
          }

          if (parts.length === 3) {
            this.settings.dataset[row][parts[0]][parts[1]][parts[2]] = coercedVal;
          }

        } else {
          this.settings.dataset[row][col.field] = coercedVal;
        }
      }

      //update cell value
      escapedVal = $.escapeHTML(coercedVal);
      if (typeof formatter ==='string') {
        formatted = window.Formatters[formatter](row, cell, escapedVal, col, settings.dataset[row]).toString();
      } else {
        formatted = formatter(row, cell, escapedVal, col, settings.dataset[row]).toString();
      }

      if (col.contentVisible) {
        var canShow = col.contentVisible(row, cell, escapedVal, col, settings.dataset[row]);
        if (!canShow) {
          formatted = '';
        }
      }

      cellNode.find('.datagrid-cell-wrapper').html(formatted);

      if (coercedVal !== oldVal && !fromApiCall) {
        this.element.trigger('cellchange', {row: row, cell: cell, target: cellNode, value: coercedVal, oldValue: oldVal, column: col});
      }
    },

    //For the row node get the index - adjust for paging / invisible rowsCache
    visualRowIndex: function (row) {
     var rowIdx = (row.attr('aria-rowindex')-1);
     if (this.pager) {
      rowIdx = rowIdx - ((this.pager.activePage -1) * this.settings.pagesize);
     }
     return rowIdx;
    },

    visualRowNode: function (idx) {
      var node = this.tableBody.find('tr[role="row"]').eq(idx);

      if (this.pager) {
        idx = idx - ((this.pager.activePage -1) * this.settings.pagesize);
        node = this.tableBody.find('tr[role="row"]').eq(idx);
      }
      return node;
    },

    dataRowIndex: function (row) {
     var rowIdx = (row.attr('aria-rowindex')-1);

     return rowIdx;
    },

    // Update a specific Cell
    setActiveCell: function (row, cell) {
      var self = this,
        prevCell = self.activeCell;

      //Support passing the td in
      if (row instanceof jQuery) {
        cell = row.siblings(':visible').addBack().index(row);
        row = this.visualRowIndex(row.parent());
      }

      if (row < 0 || cell < 0) {
        return;
      }

      //Remove previous tab index
      if (prevCell.node && prevCell.node.length ===1) {
        self.activeCell.node.removeAttr('tabindex');
      }

      //Find the cell if it exists
      self.activeCell.node = self.cellNode(row, cell).attr('tabindex', '0');

      if (self.activeCell.node && prevCell.node.length === 1) {
        self.activeCell.row = row;
        self.activeCell.cell = cell;
      } else {
        self.activeCell = prevCell;
      }

      if (!$('input, button:not(.datagrid-expand-btn)', self.activeCell.node).length) {
        self.activeCell.node.focus();
      }
      if (self.activeCell.node.hasClass('is-focusable')) {
        self.activeCell.node.find('button').focus();
      }

      // var headers = self.headerNodes();
      var headers = self.headerNodes().not('.is-hidden');
      headers.removeClass('is-active');
      headers.eq(cell).addClass('is-active');

      this.activeCell.isFocused = true;

      self.element.trigger('activecellchange', [{node: this.activeCell.node, row: this.activeCell.row, cell: this.activeCell.cell}]);
    },

    setNextActiveCell: function (e) {
      if (e.type === 'keydown') {
        if (this.settings.actionableMode) {
          var evt = $.Event('keydown.datagrid');
          evt.keyCode = 40; // move down
          this.activeCell.node.trigger(evt);
        }
        else {
          this.setActiveCell(this.activeCell.row, this.activeCell.cell);
        }
      }
    },

    //expand the tree rows
    toggleChildren: function(rowIndex) {
      var rowElement = this.table.find('tr').eq(rowIndex),
        expandButton = rowElement.find('.datagrid-expand-btn'),
        level = rowElement.attr('aria-level'),
        children = rowElement.nextAll(),
        isExpanded = expandButton.hasClass('is-expanded');

      if (!rowElement.hasClass('datagrid-tree-parent')) {
        return;
      }

      if (isExpanded) {
        expandButton.removeClass('is-expanded')
          .find('.plus-minus').removeClass('active');
      } else {
        expandButton.addClass('is-expanded')
          .find('.plus-minus').addClass('active');
      }

      var restCollapsed = false;

      children.each(function () {
        var node = $(this);

        if (node.hasClass('datagrid-tree-parent') && node.attr('aria-level') > level) {
          restCollapsed = node.find('.datagrid-expand-btn.is-expanded').length === 0;

          if (isExpanded) {
            node.addClass('is-hidden');
          } else {
            node.removeClass('is-hidden');
          }

          return;
        }

        if (restCollapsed) {
          node.addClass('is-hidden');
          return;
        }

        if (node.attr('aria-level') > level) {

          if (isExpanded) {
            node.addClass('is-hidden');
          } else {
            node.removeClass('is-hidden');
          }
        }

        if (node.attr('aria-level') === level) {
          return false;
        }

     });

    },

    //Expand Detail Row Or Tree Row
    toggleRowDetail: function(rowIndex) {

      var self = this,
        rowElement = this.table.find('tr').eq(rowIndex),
        expandRow = this.table.find('tr').eq(rowIndex+1),
        expandButton = rowElement.find('.datagrid-expand-btn'),
        detail = expandRow.find('.datagrid-row-detail'),
        dataRowIndex = self.dataRowIndex(rowElement),
        item = self.settings.dataset[dataRowIndex];

      if (rowElement.hasClass('datagrid-tree-parent')) {
        return;
      }

      if (expandRow.hasClass('is-expanded')) {
        expandRow.removeClass('is-expanded');
        expandButton.removeClass('is-expanded')
          .find('.plus-minus').removeClass('active');

        detail.animateClosed().on('animateclosedcomplete', function () {
          expandRow.css('display', 'none');
          self.element.trigger('collapserow', [{grid: self, row: dataRowIndex, detail: detail, item: item}]);
        });

      } else {
        expandRow.addClass('is-expanded');
        expandButton.addClass('is-expanded')
          .find('.plus-minus').addClass('active');

        expandRow.css('display', 'table-row');

        //Optionally Contstrain the width
        expandRow.find('.constrained-width').css('max-width', this.element.outerWidth());

        detail.animateOpen();
        self.element.trigger('expandrow', [{grid: self, row: dataRowIndex, detail: detail, item: item}]);
      }
    },

    //Api Event to set the sort Column
    setSortColumn: function(id, ascending) {
      var sort;
      //Set Direction based on if passed in or toggling existing field
      if (ascending !== undefined) {
        this.sortColumn.sortAsc = ascending;
      } else {
        if (this.sortColumn.sortId === id) {
          this.sortColumn.sortAsc = !this.sortColumn.sortAsc;
        } else {
           this.sortColumn.sortAsc = true;
        }
        ascending = this.sortColumn.sortAsc;
      }

      this.sortColumn.sortId = id;
      this.sortColumn.sortField = (this.columnById(id)[0] ? this.columnById(id)[0].field : id);

      //Do Sort on Data Set
      this.setSortIndicator(id, ascending);
      sort = this.sortFunction(this.sortColumn.sortField, ascending);
      settings.dataset.sort(sort);

      var wasFocused = this.activeCell.isFocused;
      this.tableBody.addClass('is-loading');
      this.renderRows();
      // Update selected and Sync header checkbox
      this.updateSelected();
      this.syncSelectedUI();

      if (wasFocused && this.activeCell.node.length === 1) {
        this.setActiveCell(this.activeCell.row, this.activeCell.cell);
      }

      this.syncFixedHeader();
      this.resetPager('sorted');
      this.tableBody.removeClass('is-loading');
      this.element.trigger('sorted', [this.sortColumn]);
    },

    setSortIndicator: function(id, ascending) {
      //Set Visual Indicator
      this.headerRow.find('.is-sorted-asc, .is-sorted-desc').removeClass('is-sorted-asc is-sorted-desc').attr('aria-sort', 'none');
      this.headerRow.find('[data-column-id="' +id + '"]')
        .addClass(ascending ? 'is-sorted-asc' : 'is-sorted-desc')
        .attr('aria-sort', ascending ? 'ascending' : 'descending');

      if (this.fixedHeader && this.clone) {
        this.clone.find('.is-sorted-asc, .is-sorted-desc').removeClass('is-sorted-asc is-sorted-desc').attr('aria-sort', 'none');
        this.clone.find('[data-column-id="' +id + '"]')
          .addClass(ascending ? 'is-sorted-asc' : 'is-sorted-desc')
          .attr('aria-sort', ascending ? 'ascending' : 'descending');
      }
    },

    //Overridable function to conduct sorting
    sortFunction: function(id, ascending) {
      var key, self = this,
      primer = function(a) {
        a = (a === undefined || a === null ? '' : a);

        if (typeof a === 'string') {
          a = a.toUpperCase();

          var isNumber = /^\d+$/.test(a);
          if (isNumber && !isNaN(parseFloat(a))) {
            a = parseFloat(a);
          }

        }
        return a;
      };

      key = function(x) { return primer(self.fieldValue(x, id)); };

      ascending = !ascending ? -1 : 1;

      return function (a, b) {
        a = key(a);
        b = key(b);

        if (typeof a !== typeof b) {
          a = a.toString().toLowerCase();
          b = b.toString().toLowerCase();
        }

        return ascending * ((a > b) - (b > a));
      };
    },

    // Update Selection
    updateSelected: function() {
      var self = this;

      $('tr[role="row"]', self.tableBody).each(function() {
        var row = $(this),
          newIdx = self.dataRowIndex(row),
          checkbox = self.cellNode(row, self.columnIdxById('selectionCheckbox'));

        $.each(self._selectedRows, function(index, val) {
          if (self.isEquals(val.data, self.settings.dataset[newIdx])) {
            val.idx = newIdx;
            val.elem = row;
            checkbox.find('.datagrid-cell-wrapper .datagrid-checkbox').addClass('is-checked').attr('aria-checked', 'true');
            row.addClass('is-selected').attr('aria-selected', 'true').find('td').attr('aria-selected', 'true');
            return false;
          }
        });
      });
    },

    // Determine equality for two JavaScript objects
    isEquals: function(obj1, obj2) {
      function _equals(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify($.extend(true, {}, obj1, obj2));
      }
      return _equals(obj1, obj2) && _equals(obj2, obj1);
    },

    //Default formatter just plain text style
    defaultFormatter: function(row, cell, value) {
      return ((value === null || value === undefined || value === '') ? '' : value.toString());
    },

    //Handle Adding Paging
    handlePaging: function () {
      var self = this;

      if (!this.settings.paging) {
        return;
      }

      var pagerElem = this.tableBody.addClass('paginated');
      pagerElem.pager({dataset: this.settings.dataset, source: this.settings.source, pagesize: this.settings.pagesize, indeterminate: this.settings.indeterminate, rowTemplate: this.settings.rowTemplate, pagesizes: this.settings.pagesizes});
      this.pager = pagerElem.data('pager');

      pagerElem.on('afterpaging', function (e, args) {

        self.displayCounts(args.total);

        //Handle row selection across pages
        self.updateSelected();
        self.syncSelectedUI();

        if (self.filterExpr && self.filterExpr[0] && self.filterExpr[0].column === 'all') {
          self.highlightSearchRows(self.filterExpr[0].value);
        }
      });

    },

    renderPager: function (pagingInfo) {
      if (!this.pager) {
        return;
      }

      if (pagingInfo) {
        this.pager.activePage = pagingInfo.activePage;
      }

      if (pagingInfo) {
        this.pager.updatePagingInfo(pagingInfo);
      }

      this.pager.renderBar();
      this.pager.renderPages((pagingInfo.type === 'sorted' ? false : true), 'initial');

      // Update selected and Sync header checkbox
      this.updateSelected();
      this.syncSelectedUI();
    },

    //Reset the pager to page 1
    resetPager: function(type) {
      if (!this.pager) {
        return;
      }

      if (!this.pager.pagingInfo) {
        this.pager.pagingInfo = {};
      }

      this.pager.pagingInfo.type = type;
      this.pager.pagingInfo.activePage = 1;
      this.renderPager(this.pager.pagingInfo, type);
    },

    destroy: function() {
      //Remove the toolbar, clean the div out and remove the pager
      this.element.off().empty().removeClass('datagrid-container').unwrap();
      this.element.prev('.toolbar').remove();
      this.element.prev('.datagrid-scrollable-header').prev('.toolbar').remove();
      this.element.prev('.datagrid-scrollable-header').remove();
      this.element.next('.pager-toolbar').remove();
      $.removeData(this.element[0], pluginName);

      $(document).off('touchstart.datagrid touchend.datagrid touchcancel.datagrid click.datagrid touchmove.datagrid');
    }

  };

  // Initialize the plugin (Once) or set settings
  return this.each(function() {
    var instance = $.data(this, pluginName);
    if (instance) {
      instance.settings = $.extend({}, defaults, options);
    } else {
      instance = $.data(this, pluginName, new Datagrid(this, settings));
    }
  });

};
