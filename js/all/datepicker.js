/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Datepicker Control (TODO link to docs)
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

  $.fn.datepicker = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'datepicker',
        defaults = {
          showTime: false,
          timeFormat: undefined, // The time format
          minuteInterval: undefined, // Integer from 1 to 60. Multiples of this value are displayed as options in the minutes dropdown.
          mode: undefined, // options: 'standard', 'range',
          roundToInterval: undefined, // If a non-matching minutes value is entered, rounds the minutes value to the nearest interval when the field is blurred.
          timepickerMarkup: '<label class="label"><input class="timepicker" name="calendar-timepicker" type="text"></label>',
          dateFormat: 'locale', //or can be a specific format like 'yyyy-MM-dd' iso8601 format
          placeholder: false,
          /*  disable:
          **    dates: 'M/d/yyyy' or
          **      ['M/d/yyyy'] or
          **      ['M/d/yyyy', new Date('M/d/yyyy')] or
          **      ['M/d/yyyy', new Date('M/d/yyyy'), new Date(yyyy,(M-0),d)]
          **    minDate: 'M/d/yyyy'
          **    maxDate: 'M/d/yyyy'
          **    dayOfWeek: [2] or [0,6] - {0-sun, 1-mon, 2-tue, 3-wed, 4-thu, 5-fri, 6-sat}
          **    isEnable: false or true
          **/
          disable: {
            'dates'     : [],
            'minDate'   : '',
            'maxDate'   : '',
            'dayOfWeek' : [],
            'isEnable' : false
          }
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function DatePicker(element) {
      this.element = $(element);
      this.settings = settings;
      this.init();
    }

    // Plugin Methods
    DatePicker.prototype = {

      init: function() {
        this.build();
        this.handleEvents();
      },

      //Add any markup
      build: function() {

        // Add "is-disabled" css class to closest ".field" if element is disabled
        if (this.element.is(':disabled')) {
          this.element.closest('.field').addClass('is-disabled');
        }

        //Append a Button
        this.trigger = $.createIconElement('calendar').insertAfter(this.element);

        this.addAria();
      },

      addAria: function () {
        this.label = $('label[for="'+ this.element.attr('id') + '"]');
        this.label.append('<span class="audible">' + Locale.translate('PressDown') + '</span>');
      },

      //Attach Events used by the Control
      handleEvents: function () {
        var self = this;

        this.trigger.on('click.datepicker', function () {
          if (self.isOpen()) {
            self.closeCalendar();
          } else {
            self.openCalendar();
          }
        });

        self.mask();
        this.handleKeys(this.element);
      },

      // Handle Keyboard Stuff
      handleKeys: function (elem) {
        var self = this;

        elem.off('keydown.datepicker').on('keydown.datepicker', function (e) {
          var handled = false,
            key = e.keyCode || e.charCode || 0,
            focused = $(':focus'),
            focusedlabel = focused.attr('aria-label');

          if (focusedlabel) {
            var focusedDate = new Date(focusedlabel);
            self.currentDate = new Date(focusedDate.getTime());
          }
          else if (focused.hasClass('alternate')) {
              var year = parseInt(self.header.find('.year').text()),
              month = parseInt(self.header.find('.month').attr('data-month')),
              day = parseInt(focused.text());

            if (focused.hasClass('prev-month')) {
              if(month === 0) {
                month = 11;
                year--;
              }
              else {
                month--;
              }
            }
            else if (focused.hasClass('next-month')) {
              if(month === 11) {
                month = 0;
                year++;
              }
              else {
                month++;
              }
            }
            self.currentDate = new Date(year, month, day);
          }

         //Arrow Down or Alt first opens the dialog
          if (key === 40 && !self.isOpen()) {
            handled = true;
            self.openCalendar();

            setTimeout(function() {
              self.setFocusAfterOpen();
            }, 200);
          }

          //Arrow Down: select same day of the week in the next week
          if (key === 40 && self.isOpen()) {
              handled = true;
              self.currentDate.setDate(self.currentDate.getDate() + 7);
              self.insertDate(self.currentDate);
          }

          //Arrow Up: select same day of the week in the previous week
          if (key === 38 && self.isOpen()) {
            handled = true;
            self.currentDate.setDate(self.currentDate.getDate() - 7);
            self.insertDate(self.currentDate);
          }

          //Arrow Left
          if (key === 37 && self.isOpen()) {
            handled = true;
            self.currentDate.setDate(self.currentDate.getDate() - 1);
            self.insertDate(self.currentDate);
          }

          //Arrow Right
          if (key === 39 && self.isOpen()) {
            handled = true;
            self.currentDate.setDate(self.currentDate.getDate() + 1);
            self.insertDate(self.currentDate);
          }

          //Page Up Selects Same Day Next Month
          if (key === 33 && !e.altKey && self.isOpen()) {
            handled = true;
            self.currentDate.setMonth(self.currentDate.getMonth() + 1);
            self.insertDate(self.currentDate);
          }

          //Page Down Selects Same Day Prev Month
          if (key === 34 && !e.altKey && self.isOpen()) {
            handled = true;
            self.currentDate.setMonth(self.currentDate.getMonth() - 1);
            self.insertDate(self.currentDate);
          }

          //Alt + Page Up Selects Same Day Next Year
          if (key === 33 && e.altKey && self.isOpen()) {
            handled = true;
            self.currentDate.setFullYear(self.currentDate.getFullYear() + 1);
            self.insertDate(self.currentDate);
          }

          //Alt + Page Down Selects Same Day Prev Year
          if (key === 34 && e.altKey && self.isOpen()) {
            handled = true;
            self.currentDate.setFullYear(self.currentDate.getFullYear() - 1);
            self.insertDate(self.currentDate);
          }

          //Home Moves to End of the month
          if (key === 35 && self.isOpen()) {
            handled = true;
            var lastDay =  new Date(self.currentDate.getFullYear(), self.currentDate.getMonth()+1, 0);
            self.currentDate = lastDay;
            self.insertDate(self.currentDate);
          }

          //End Moves to Start of the month
          if (key === 36 && self.isOpen()) {
            var firstDay =  new Date(self.currentDate.getFullYear(), self.currentDate.getMonth(), 1);
            self.currentDate = firstDay;
            self.insertDate(self.currentDate);
          }

          // 't' selects today
          if (key === 84) {
            handled = true;
            self.currentDate = new Date();

            if (self.isOpen()) {
              self.insertDate(self.currentDate, true);
            } else {
              self.element.val(Locale.formatDate(self.currentDate, {pattern: self.pattern})).trigger('change');
            }
          }

          // Space or Enter closes Date Picker, selecting the Date
          if (key === 32 && self.isOpen() || key === 13 && self.isOpen()) {
            self.closeCalendar();
            self.element.focus();
            handled = true;
          }

          // Tab closes Date Picker and goes to next field
          if (key === 9 && self.isOpen()) {
            if (!self.settings.showTime) {
              self.element.focus();
              self.closeCalendar();
            }
          }

          // Esc closes Date Picker and goes back to field
          if (key === 27 && self.isOpen()) {
            self.closeCalendar();
            self.element.focus();
          }

          if (handled) {
            e.stopPropagation();
            e.preventDefault();
            return false;
          }

        });
      },

      setFormat: function () {
        var localeDateFormat = ((typeof Locale === 'object' && Locale.calendar().dateFormat) ? Locale.calendar().dateFormat : null),
          localeTimeFormat = ((typeof Locale === 'object' && Locale.calendar().timeFormat) ? Locale.calendar().timeFormat : null);

        if (this.settings.dateFormat === 'locale') {
          this.pattern = localeDateFormat.short + (this.settings.showTime ? ' ' + localeTimeFormat: '');
        } else {
          this.pattern = this.settings.dateFormat + (this.settings.showTime ? ' ' + this.settings.timeFormat : '');
        }

        this.show24Hours = (this.pattern.match('HH') || []).length > 0;
      },

      // Add masking with the mask function
      mask: function () {
        this.setFormat();

        var validation = 'date availableDate',
          events = {'date': 'blur', 'availableDate': 'blur'},
          customValidation = this.element.attr('data-validate'),
          customEvents = this.element.attr('data-validation-events'),
          mask = this.pattern.toLowerCase()
                   .replace(/yyyy/g,'####')
                   .replace(/mmm/g,'***')
                   .replace(/mm/g,'##')
                   .replace(/dd/g,'##')
                   .replace(/hh/g,'##')
                   .replace(/[mdh]/g,'##')
                   .replace(/[a]/g,'am');

        //TO DO - Time seperator
        // '##/##/#### ##:## am' -or- ##/##/#### ##:##' -or- ##/##/####'
        mask = (this.settings.showTime ? (this.show24Hours ? mask.substr(0, 16) : mask) : mask);

        if (customValidation === 'required' && !customEvents) {
          validation = customValidation + ' ' + validation;
          $.extend(events, {'required': 'change blur'});
        }
        else if (!!customValidation && !!customEvents) {
          // Remove default validation, if found "no-default-validation" string in "data-validate" attribute
          if (customValidation.indexOf('no-default-validation') > -1) {
            validation = customValidation.replace(/no-default-validation/g, '');
            events = $.fn.parseOptions(this.element, 'data-validation-events');
          }
          // Keep default validation along custom validation
          else {
            validation = customValidation + ' ' + validation;
            $.extend(events, $.fn.parseOptions(this.element, 'data-validation-events'));
          }
        }

        this.element
          .attr({
            'data-mask': mask,
            'data-validate': validation,
            'data-validation-events': JSON.stringify(events),
            'data-mask-mode': 'date'
          }).mask().validate();

        if (this.settings.placeholder && (!this.element.attr('placeholder') ||  this.element.attr('placeholder') === 'M / D / YYYY')) {
          this.element.attr('placeholder', this.pattern);
        }
      },

      // Return whether or not the calendar div is open.
      isOpen: function () {
        return (this.popup && this.popup.is(':visible') &&
          !this.popup.hasClass('is-hidden'));
      },

      open: function() {
        return this.openCalendar();
      },

      // Open the calendar in a popup
      openCalendar: function () {
        var self = this;

        if (this.element.is(':disabled') || this.element.attr('readonly')) {
          return;
        }

        $('#validation-tooltip').addClass('is-hidden');

        if (this.popup && this.popup.is(':visible')) {
          self.closeCalendar();
        }

        this.element.addClass('is-active');
        this.element.trigger('listopened');

        // Calendar Html in Popups
        this.table = $('<table class="calendar-table" aria-label="'+ Locale.translate('Calendar') +'" role="application"></table>');
        this.header = $('<div class="calendar-header"><span class="month">november</span><span class="year"> 2015</span><button type="button" class="btn-icon prev" tabindex="-1">' + $.createIcon('caret-left') + '<span>'+ Locale.translate('PreviousMonth') +'</span></button><button type="button" class="btn-icon next" tabindex="-1">' + $.createIcon('caret-right') + '<span>'+ Locale.translate('NextMonth') +'</span></button></div>');
        this.dayNames = $('<thead><tr><th>SU</th> <th>MO</th> <th>TU</th> <th>WE</th> <th>TH</th> <th>FR</th> <th>SA</th> </tr> </thead>').appendTo(this.table);
        this.days = $('<tbody> <tr> <td class="alternate">26</td> <td class="alternate">27</td> <td class="alternate">28</td> <td class="alternate">29</td> <td class="alternate" >30</td> <td class="alternate">31</td> <td>1</td> </tr> <tr> <td>2</td> <td>3</td> <td>4</td> <td>5</td> <td>6</td> <td>7</td> <td>8</td> </tr> <tr> <td>9</td> <td>10</td> <td>11</td> <td>12</td> <td>13</td> <td>14</td> <td>15</td> </tr> <tr> <td>16</td> <td>17</td> <td>18</td> <td>19</td> <td class="is-today">20</td> <td>21</td> <td>22</td> </tr> <tr> <td>23</td> <td>24</td> <td>25</td> <td>26</td> <td>27</td> <td>28</td> <td class="alternate">1</td> </tr> <tr> <td class="alternate">2</td> <td class="alternate">3</td> <td class="alternate">4</td> <td class="alternate">5</td> <td class="alternate">6</td> <td class="alternate">7</td> <td class="alternate">8</td> </tr> </tbody>').appendTo(this.table);
        this.timepickerInput = $(this.settings.timepickerMarkup);
        this.footer = $('<div class="popup-footer"> <button type="button" class="cancel btn-tertiary" tabindex="-1">'+ Locale.translate('Clear') +'</button> <button type="button" tabindex="-1" class="is-today btn-tertiary">'+Locale.translate('Today')+'</button> </div>');

        // Timepicker options
        if (this.settings.showTime) {
          var timeOptions = {};

          if (this.settings.timeFormat !== undefined) {
            timeOptions.timeFormat = this.settings.timeFormat;
          }
          if (this.settings.minuteInterval !== undefined) {
            timeOptions.minuteInterval = this.settings.minuteInterval;
          }
          if (this.settings.mode !== undefined) {
            timeOptions.mode = this.settings.mode;
          }
          if (this.settings.roundToInterval !== undefined) {
            timeOptions.roundToInterval = this.settings.roundToInterval;
          }
          $('.timepicker', this.timepickerInput).attr('data-options', JSON.stringify(timeOptions));
        }

        this.calendar = $('<div class="calendar'+ (this.settings.showTime ? ' is-timepicker' : '') +'"></div')
          .append(
            this.header,
            this.table,
            (this.settings.showTime ? this.timepickerInput : ''),
            this.footer
          );

        var leftOffset = Locale.isRTL() ? -163 : 160;
        if (this.element.closest('.datagrid-filter-wrapper').length) {
          leftOffset = Locale.isRTL() ? -179 : 176;
        }

        this.trigger.popover({content: this.calendar, popover: true, trigger: 'immediate',
            placement: 'offset', offset: {top: 23, left: leftOffset},
            tooltipElement: '#calendar-popup'})
            .on('hide.datepicker', function () {
              self.closeCalendar();
            }).on('open.datepicker', function () {
              self.days.find('.is-selected').attr('tabindex', 0).focus();
            });

        // ICONS: Right to Left Direction
        setTimeout(function() {
          if (Locale.isRTL()) {
            Locale.flipIconsHorizontally();
          }
        }, 0);

        this.handleKeys($('#calendar-popup'));
        $('.calendar-footer a', this.calendar).button();

        // Show Month
        var currentVal = Locale.parseDate(this.element.val(), this.pattern);

        this.currentDate = currentVal || new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.currentDay = this.currentDate.getDate();

        // Set timepicker
        if (this.settings.showTime) {

          // Wait for timepicker
          setTimeout(function() {
            var timepickerInput = $('.timepicker', this.calendar);

            self.timepickerControl = timepickerInput.data('timepicker');
            self.time = self.getTimeString(currentVal, self.show24Hours);
            self.timepickerInput.css({'margin': '10px 0 25px'}).find('.timepicker').val(self.time);
            self.timepickerControl.toggleTimePopup();

            // Wait for timepicker popup
            setTimeout(function() {
              var timepickerPopup = $('#timepicker-popup').css({'border': 0, 'box-shadow': 'none', 'width': ''}),
                position = timepickerInput.offset();

              position.top -= timepickerPopup.parent().is('body') ? 0 : timepickerPopup.height()/2 - 2;
              position.left -= ((timepickerPopup.width() - timepickerInput.width())/2) - 30;

              timepickerPopup.css(position);

              self.timepickerInput.css({'visibility': 'hidden'});

              $('.arrow, .modal-buttonset', timepickerPopup).hide();
              $('.time-parts', timepickerPopup).css({'padding': 0});

              if (self.isOpen()) {
                var timepickerInputs = timepickerPopup.find('input.dropdown');

                // Keydown Events
                timepickerInputs.on('keydown.datepicker', function(e) {
                  var key = e.keyCode || e.charCode || 0;

                  // Press Esc on timpicker -or- Tab-out from AM/PM field on timpicker go back to selected date
                  if (key === 27 || (key === 9 && this === timepickerInputs.last().get(0))) {
                    self.calendar.find('.is-selected').focus();
                    return false;
                  }

                  // Do nothing when pressing Spacebar
                  if (key === 32) {
                    return false;
                  }
                });
                // Change the order were bound for execute (run this first {0})
                self.changeEventOrder(timepickerInputs, 'keydown.timepicker', 0);

                // On change time
                self.timepickerControl.element.on('change.datepicker', function() {
                  var t, fields;

                  self.timepickerControl.settings.roundToInterval = self.settings.roundToInterval;
                  self.timepickerControl.roundMinutes();
                  t = self.timepickerControl.getTimeFromField();
                  fields = {
                    '#timepicker-hours': t.hours,
                    '#timepicker-period': t.period
                  };
                  if (self.getBoolean(self.settings.roundToInterval)) {
                    fields['#timepicker-minutes'] = t.minutes;
                  }
                  $.each(fields, function(key, val) {
                    $(key, timepickerPopup).val(val).triggerHandler('updated');
                  });
                });
                self.timepickerControl.element.trigger('change.datepicker');
              }

            }, 1);
          }, 1);
        }


        // Fix: for small view port, where not enough space to show calendar
        // bring the calendar in center (i.e. inside modal)
        setTimeout(function() {
          // self.getClosestParent({elem}, {position: 'fixed'|'relative'|'absolute'})
          var fixedParent = self.getClosestParent(self.element.closest('.field'), 'fixed'),
            absoluteParent = self.getClosestParent(self.element.closest('.field'), 'absolute'),
            triggerRect = self.trigger[0].getBoundingClientRect(),
            offset = self.getAbsoluteOffset(self.popup[0], $('body')[0]),
            popupCss = {
              'top': parseInt(self.popup.css('top'), 10),
              'left': parseInt(self.popup.css('left'), 10)
            },
            arrow = self.popup.find('.arrow'),
            arrowRect = arrow[0].getBoundingClientRect(),
            extra = 50 + arrowRect.height,
            pagescroll = $('.page-container.scrollable').scrollTop(),
            top, left, method;

          if ((absoluteParent[0] && !absoluteParent.is('.page-container')) ||
            fixedParent[0] || popupCss.top < 0 || popupCss.left < 0) {

            arrow.show(); //default
            if (popupCss.top < 0 || popupCss.left < 0) {
              if (popupCss.top < 0) {
                top = 5;
                self.popup.css({'top': top +'px'});
              }
              if (popupCss.left < 0) {
                left = triggerRect.left - self.popup.outerWidth() - 20;
                self.popup.css({'left': left +'px'});
              }
            }
            else {
              if (offset.top < 0 ||
                  (offset.top + self.popup.outerHeight() > window.innerHeight)) {
                top = offset.top - self.popup.outerHeight() + pagescroll - (extra*2);
                if ((popupCss.top < 0 || offset.top > 0) && top > 0) {
                  method = 'show';
                } else {
                  top = (window.innerHeight - self.popup.outerHeight())/2;
                  method = 'hide';
                }
                if (absoluteParent[0] && self.popup.is('.bottom')) {
                  self.popup.removeClass('bottom').addClass('top');
                }
                self.popup.css({'top': top +'px'});
                arrow[method]();
              }
              if (offset.left < 0 ||
                  (offset.left + self.popup.outerWidth() > window.innerWidth)) {
                if (popupCss.left < 0 || (offset.left > 0 && (offset.left - self.popup.outerWidth()) > extra)) {
                  left = offset.left + self.popup.outerWidth() + extra;
                  method = 'show';
                } else {
                  left = (window.innerWidth - self.popup.outerWidth())/2;
                  method = 'hide';
                }
                if (absoluteParent[0] && self.popup.is('.left, .right')) {
                  if (self.popup.is('.left')) {
                    self.popup.removeClass('left').addClass('right');
                  } else {
                    self.popup.removeClass('right').addClass('left');
                  }
                }
                self.popup.css({'left': left +'px'});
                arrow[method]();
              }
            }
          }

        }, 1);


        this.todayDate = new Date();
        this.todayMonth = this.todayDate.getMonth();
        this.todayYear = this.todayDate.getFullYear();
        this.todayDay = this.todayDate.getDate();

        this.showMonth(this.currentMonth, this.currentYear);
        this.popup = $('#calendar-popup');
        this.popup.attr('role', 'dialog');
        this.originalDate = this.element.val();

        // Calendar Day Events
        this.days.off('click.datepicker').on('click.datepicker', 'td', function () {
          var td = $(this);
          if (td.hasClass('is-disabled')) {
            td.attr('tabindex', 0).focus();
          }
          else {
            self.days.find('.is-selected').removeClass('is-selected').removeAttr('aria-selected');

            var cell = $(this),
              year = parseInt(self.header.find('.year').text()),
              month = parseInt(self.header.find('.month').attr('data-month')),
              day = parseInt(cell.addClass('is-selected').attr('aria-selected', 'true').text());

            if (cell.hasClass('prev-month')) {
              if(month === 0) {
                month = 11;
                year--;
              }
              else {
                month--;
              }
            }
            else if (cell.hasClass('next-month')) {
              if(month === 11) {
                month = 0;
                year++;
              }
              else {
                month++;
              }
            }

            self.currentDate = new Date(year, month, day);
            self.insertDate(self.currentDate);
            self.closeCalendar();
            self.element.focus();
          }
        });

        // Calendar Footer Events
        this.footer.off('click.datepicker').on('click.datepicker', 'button', function (e) {
          var btn = $(this);

          if (btn.hasClass('cancel')) {
            self.element.val('');
            self.currentDate = null;
            self.closeCalendar();
          }

          if (btn.hasClass('is-today')) {
            self.insertDate(new Date(), true);
            self.closeCalendar();
          }
          self.element.focus();
          e.preventDefault();
        });

        // Change Month Events
        this.header.off('click.datepicker').on('click.datepicker', 'button', function () {
          self.showMonth(self.currentMonth + ($(this).hasClass('next') ? 1 : -1), self.currentYear);
        });

        setTimeout(function() {
          self.setFocusAfterOpen();
        }, 200);

      },

      // Alias for _closeCalendar()_ that works with the global "closeChildren" method
      close: function() {
        return this.closeCalendar();
      },

      // Close the calendar in a popup
      closeCalendar: function () {
        // Close timepicker
        if (this.settings.showTime && this.timepickerControl && this.timepickerControl.isOpen()) {
          this.timepickerControl.closeTimePopup();
        }

        if (this.popup && this.popup.length) {
          this.popup.hide().remove();
        }

        this.element.removeClass('is-active');
        this.element.trigger('listclosed');
      },

      // Get the closest parent by position type
      // elem: jQuery element
      // position: 'fixed'|'relative'|'absolute'
      getClosestParent: function(elem, position) {
        var closestParent = elem.parents().filter(function() {
          return $(this).css('position') === position;
        }).slice(0,1); // grab only the "first"
        return closestParent;
      },

      // Finds the offset of el from relativeEl
      // http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
      getAbsoluteOffset: function(el, relativeEl) {
        var x = 0, y = 0;

        while(el && el !== relativeEl && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          x += el.offsetLeft - el.scrollLeft + el.clientLeft;
          y += el.offsetTop - el.scrollTop + el.clientTop;
          el = el.offsetParent;
        }
        return { top: y, left: x };
      },

      // Check date in obj, return: true|false
      checkDates: function (year, month, date) {
        var d, i, l,
          self = this,
          d2 = new Date(year, month, date),
          min = (new Date(this.settings.disable.minDate)).setHours(0,0,0,0),
          max = (new Date(this.settings.disable.maxDate)).setHours(0,0,0,0);

        //dayOfWeek
        if(this.settings.disable.dayOfWeek.indexOf(d2.getDay()) !== -1) {
          return true;
        }

        d2 = d2.setHours(0,0,0,0);

        //min and max
        if((d2 <= min) || (d2 >= max)) {
          return true;
        }

        //dates
        if (this.settings.disable.dates.length && typeof this.settings.disable.dates === 'string') {
          this.settings.disable.dates = [this.settings.disable.dates];
        }

        for (i=0, l=this.settings.disable.dates.length; i<l; i++) {
          d = new Date(self.settings.disable.dates[i]);
          if(d2 === d.setHours(0,0,0,0)) {
            return true;
          }
        }

        return false;
      },

      // Set disable Date
      setDisable: function (elem, year, month, date) {
        var checkDates = this.checkDates(year, month, date);
        elem.removeClass('is-disabled').removeAttr('aria-disabled');

        if ((checkDates && !this.settings.disable.isEnable) || (!checkDates && this.settings.disable.isEnable)) {
          elem
            .addClass('is-disabled').attr('aria-disabled','true')
            .removeClass('is-selected').removeAttr('aria-selected');
        }
      },

      // Set focus after opening the calendar
      setFocusAfterOpen: function () {
        if (!this.calendar) {
          return;
        }
        this.calendar.find('.is-selected').attr('tabindex', 0).focus();
      },

      // Update the calendar to show the month (month is zero based)
      showMonth: function (month, year) {
        var self = this;

        var elementDate = this.currentDate.getDate() ?
          this.currentDate : (new Date()).setHours(0,0,0,0);

        if (year.toString().length < 4) {
          year = new Date().getFullYear();
        }

        if (month === 12) {
          year ++;
          this.currentMonth = month = 0;
          this.currentYear = year;
          this.header.find('.year').text(' ' + year);
        }

        if (month < 0) {
          year --;
          this.currentMonth = month = 11;
          this.currentYear = year;
          this.header.find('.year').text(' ' + year);
        }

        var days = Locale.calendar().days.narrow || Locale.calendar().days.narrow || Locale.calendar().days.abbreviated,
          monthName = Locale.calendar().months.wide[month];

        this.currentMonth = month;
        this.currentYear = year;

        // Set the Days of the week
        this.dayNames.find('th').each(function (i) {
          $(this).text(days[i]);
        });

        //Localize Month Name
        this.header.find('.month').attr('data-month', month).text(monthName);
        this.header.find('.year').text(' ' + year);

        //Adjust days of the week
        //lead days
        var leadDays = (new Date(year, month, 1)).getDay();
        var lastMonthDays = (new Date(year, month+0, 0)).getDate(),
          thisMonthDays = (new Date(year, month+1, 0)).getDate(),
          dayCnt = 1, nextMonthDayCnt = 1, exYear, exMonth, exDay;

        this.days.find('td').each(function (i) {
          var th = $(this).removeClass('alternate prev-month next-month is-selected is-today');
          th.removeAttr('aria-selected');

          if (i < leadDays) {
            exDay = lastMonthDays - leadDays + 1 + i;
            exMonth = (month === 0) ? 11 : month - 1;
            exYear = (month === 0) ? year - 1 : year;

            self.setDisable(th, exYear, exMonth, exDay);
            th.addClass('alternate prev-month').html('<span aria-hidden="true">' + exDay + '</span>');
          }

          if (i >= leadDays && dayCnt <= thisMonthDays) {
            th.html('<span aria-hidden="true">' + dayCnt + '</span>');
            var tHours = elementDate.getHours(),
              tMinutes = elementDate.getMinutes();

            if ((new Date(year, month, dayCnt)).setHours(tHours, tMinutes, 0,0) === elementDate.setHours(tHours, tMinutes, 0,0)) {
              th.addClass('is-selected').attr('aria-selected', 'true');
            }

            if (dayCnt === self.todayDay && self.currentMonth === self.todayMonth &&
              self.currentYear === self.todayYear) {
              th.addClass('is-today');
            }

            th.attr('aria-label', Locale.formatDate(new Date(self.currentYear, self.currentMonth, dayCnt), {date: 'full'}));

            self.setDisable(th, year, month, dayCnt);

            th.attr('role', 'link');
            dayCnt++;
            return;
          }

          if (dayCnt >= thisMonthDays + 1) {
            exDay = nextMonthDayCnt;
            exMonth = (month === 11) ? 0 : month + 1;
            exYear = (month === 11) ? year + 1 : year;

            self.setDisable(th, exYear, exMonth, exDay);
            th.addClass('alternate next-month').html('<span aria-hidden="true">' + nextMonthDayCnt + '</span>');
            nextMonthDayCnt++;
          }

        });

        //Hide 6th Row if all disabled
        var row = this.days.find('tr').eq(5);
        if (row.find('td.alternate').length === 7) {
          row.hide();
        } else {
          row.show();
        }
      },

      // Put the date in the field and select on the calendar
      insertDate: function (date, isReset) {
        var input = this.element;

        // Make sure Calendar is showing that month
        if (this.currentMonth !== date.getMonth() || this.currentYear !== date.getFullYear()) {
          this.showMonth(date.getMonth(), date.getFullYear());
        }

        if (!this.isOpen()) {
          return;
        }

        // Show the Date in the UI
        var dateTd = this.days.find('td:not(.alternate)').filter(function() {
          return $(this).text().toLowerCase() === date.getDate().toString();
        });

        if (dateTd.hasClass('is-disabled')) {
          dateTd.attr({'tabindex': 0}).focus();
        } else {
          if (this.settings.showTime) {
            if (isReset) {
              this.time = this.getTimeString(date, this.show24Hours);
              this.timepickerInput.find('.timepicker').val(this.time).trigger('change');

              if (this.settings.roundToInterval) {
                $('#timepicker-minutes').val('');
                date = this.setTime(date);
              }
            }
            else {
              date = this.setTime(date);
            }
          }

          input.val(Locale.formatDate(date, {pattern: this.pattern})).trigger('change');
          this.days.find('.is-selected').removeClass('is-selected').removeAttr('aria-selected').removeAttr('tabindex');
          dateTd.addClass('is-selected').attr({'aria-selected': true, 'tabindex': 0}).focus();
        }
      },

      // Convert a string to boolean
      getBoolean: function(val) {
        var num = +val;
        return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0, '');
      },

      // Helper Function
      setValue: function(date) {
        this.currentDate = date;
        this.element.val(Locale.formatDate(date, {pattern: this.pattern}));
      },

      // Set time
      setTime: function(date) {
        var hours = $('#timepicker-hours').val(),
          minutes = $('#timepicker-minutes').val(),
          period = $('#timepicker-period');

        var timepicker = $('.timepicker.is-active');
        if (!minutes && timepicker.length) {
          var d = new Date(date);
          var time = timepicker.val().match(/(\d+)(?::(\d\d))?\s*(p?)/);
          d.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
          d.setMinutes( parseInt(time[2]) || 0 );
          minutes = d.getMinutes();
        }

        hours = (period.length && period.val() === 'PM' && hours < 12) ? (parseInt(hours, 10) + 12) : hours;
        hours = (period.length && period.val() === 'AM' && parseInt(hours, 10) === 12) ? 0 : hours;

        date.setHours(hours, minutes, 0);
        return date;
      },

      // Get Time String
      getTimeString: function (date, isHours24) {
        var twodigit = function (number) {
            return (number < 10 ? '0' : '') + number;
          },
          d = (date || new Date()),
          h = d.getHours(),
          h12 = (h % 12 || 12) + ':' + twodigit(d.getMinutes()) + ' ' + (h < 12 ? 'AM' : 'PM'),
          h24 = h + ':' + twodigit(d.getMinutes());

        return isHours24 ? h24 : h12;
      },

      // Change the order for execution jquery events were bound
      // http://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
      changeEventOrder: function (elements, names, newIndex) {
        // Allow for multiple events.
        $.each(names.split(' '), function (idx, name) {
          elements.each(function () {
            var handlers = $._data(this, 'events')[name.split('.')[0]];
            // console.log(handlers);
            // Validate requested position.
            newIndex = Math.min(newIndex, handlers.length - 1);
            handlers.splice(newIndex, 0, handlers.pop());
          });
        });
      }

    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new DatePicker(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
