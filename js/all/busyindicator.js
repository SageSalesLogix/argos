/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Busy Indicator Control (TODO: bitly link to docs)
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

  $.fn.busyindicator = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'busyindicator',
        defaults = {
          blockUI: true, // makes the element that Busy Indicator is invoked on unusable while it's displayed.
          text: null, //Custom Text To Show or Will Show Localized Loading....
          delay: 1000, // number in miliseconds to pass before the markup is displayed.  If 0, displays immediately.
          timeToComplete: 0, // fires the 'complete' trigger at a certain timing interval.  If 0, goes indefinitely.
          timeToClose: 0, // fires the 'close' trigger at a certain timing interval.  If 0, goes indefinitely.
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function BusyIndicator(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Plugin Methods
    BusyIndicator.prototype = {

      init: function() {
        this.inlineLabel = this.element.closest('label');
        this.inlineLabelText = this.inlineLabel.find('.label-text');
        this.isInlineLabel = this.element.parent().is('.inline');

        this
          .setup()
          .handleEvents();
      },

      // Sanitize incoming option values
      setup: function() {
        var blockUI = this.element.attr('data-block-ui'),
          delay = this.element.attr('data-delay'),
          completionTime = this.element.attr('data-completion-time'),
          closeTime = this.element.attr('data-close-time');

        this.blockUI = blockUI !== undefined ? blockUI : this.settings.blockUI;
        this.loadingText = this.settings.text ? this.settings.text : Locale.translate('Loading');
        this.delay = delay !== undefined && !isNaN(delay) && parseInt(delay, 10) > 20 ? delay : !isNaN(this.settings.delay) && this.settings.delay >= 20 ? this.settings.delay : 20;
        this.completionTime = completionTime !== undefined && !isNaN(completionTime) ? parseInt(completionTime, 10) : this.settings.timeToComplete;
        this.closeTime = closeTime !== undefined && !isNaN(closeTime) ? parseInt(closeTime, 10) : this.settings.timeToClose;

        return this;
      },

      handleEvents: function() {
        var self = this;
        self.element.on('start.busyindicator', function(e) {
          e.stopPropagation();
          self.activate();
        }).on('afterstart.busyindicator', function() {
          // Complete event is only active once the indicator is "started"
          self.element.on('complete.busyindicator', function(e) {
            e.stopPropagation();
            self.close();
          });
        }).on('updated.busyindicator', function() {
          self.updated();
        });

        return this;
      },

      // Builds and starts the indicator
      activate: function() {
        var self = this;

        // If the markup already exists don't do anything but clear
        if (this.container) {
          if (self.closeTimeout) {
            clearTimeout(self.closeTimeout);
          }
          this.label.remove();
          this.label = $('<span>' + this.loadingText + '</span>').appendTo(this.container);

          if (this.element.is('input, .dropdown, .multiselect, .busy-xs, .busy-sm')) {
            this.label.addClass('audible');
          }

          this.container
            .removeClass('is-hidden')
            .trigger('afterstart');
          return;
        }

        // Build all the markup
        this.container = $('<div class="busy-indicator-container is-hidden"></div>').attr({
          'aria-live': 'polite',
          'role': 'status'
        });
        this.loader = $('<div class="busy-indicator active"></div>').appendTo(this.container);

        $('<div class="bar one"></div>' +
          '<div class="bar two"></div>' +
          '<div class="bar three"></div>' +
          '<div class="bar four"></div>' +
          '<div class="bar five"></div>').appendTo(this.loader);

        this.label = $('<span>'+ this.loadingText +'</span>').appendTo(this.container);

        if (this.blockUI) {
          this.originalPositionProp = this.element.css('position');
          this.element.css('position', 'relative');
          this.overlay = $('<div class="overlay busy is-hidden"></div>').appendTo(this.element);
          this.container.addClass('blocked-ui');
        }

        if (this.element.is('.busy-xs, .busy-sm')) {
          this.label.addClass('audible');
        }

        // Append the markup to the page
        // Use special positioning logic for compatibility with certain controls
        if (this.element.is('input, .dropdown, .multiselect')) {
          this.label.addClass('audible');

          var target;

          if (this.element.is('input')) {
            target = this.element;
            this.container.insertAfter(this.isInlineLabel ? this.inlineLabel : this.element);
          } else {
            var dd = this.element.data('dropdown');
            target = dd.input;
            this.container.appendTo(target.parent());
          }

          if (this.overlay) {
            this.overlay.insertAfter(this.container);
          }

          var rect = target.position(),
            h = target.outerHeight(),
            w = target.outerWidth();

          this.container.add(this.overlay).css({
            left: rect.left,
            top: rect.top,
            bottom: rect.bottom,
            right: rect.right,
            height: h,
            width: w
          });
        } else {
          // Normal Operations
          this.container.appendTo(this.element);
        }

        // Fade in shortly after adding the markup to the page (prevents the indicator from abruptly showing)
        setTimeout(function() {
          if (self.container) {
            self.container.removeClass('is-hidden');
          }
          if (self.overlay) {
            self.overlay.removeClass('is-hidden');
          }
        }, self.delay);

        // Lets external code know that we've successully kicked off.
        this.element.trigger('afterstart');


        // Start the JS Animation Loop if IE9
        if (!$.fn.cssPropSupport('animation')) {
          self.isAnimating = true;
          self.animateWithJS();
        }


        // Triggers complete if the "timeToComplete" option is set.
        if (this.completionTime > 0) {
          setTimeout(function() {
            self.element.trigger('complete');
          }, self.completionTime);
        }
      },

      // Removes the appended markup and hides any trace of the indicator
      close: function() {
        var self = this;

        if (this.container) {
          this.container.addClass('is-hidden');
        }

        if (this.overlay) {
          this.overlay.addClass('is-hidden');
        }
        // Give the indicator time to fade out before removing all of its components from view
        self.closeTimeout = setTimeout(function() {
          clearTimeout(self.closeTimeout);
          if (self.container) {
            self.container.remove();
          }
          self.container = undefined;
          self.loader = undefined;
          if (self.overlay) {
            self.overlay.remove();
            self.element.css('position', self.originalPositionProp);
            self.originalPositionProp = undefined;
          }
          self.element.trigger('aftercomplete.busyindicator');
          self.element.off('complete.busyindicator');
        }, 500);
      },

      // Browsers that don't support CSS-based animation can still show the animating Busy Indicator.
      animateWithJS: function() {
        var self = this,
          bar1 = this.container.find('.bar.one'),
          bar2 = this.container.find('.bar.two'),
          bar3 = this.container.find('.bar.three'),
          bar4 = this.container.find('.bar.four'),
          bar5 = this.container.find('.bar.five'),
          t = 0,
          interval;

        // Animation Loop
        function animate() {
          if (!self.isAnimating) {
            clearInterval(interval);
            return;
          }

          t += 1;

          if (t === 1) {
            bar1.addClass('half');
          }
          if (t === 13) {
            bar1.removeClass('half').addClass('full');
            bar2.addClass('half');
          }
          if (t === 26) {
            bar1.removeClass('full').addClass('half');
            bar2.removeClass('half').addClass('full');
            bar3.addClass('half');
          }
          if (t === 39) {
            bar1.removeClass('half');
            bar2.removeClass('full').addClass('half');
            bar3.removeClass('half').addClass('full');
            bar4.addClass('half');
          }
          if (t === 51) {
            bar2.removeClass('half');
            bar3.removeClass('full').addClass('half');
            bar4.removeClass('half').addClass('full');
            bar5.addClass('half');
          }
          if (t === 64) {
            bar3.removeClass('half');
            bar4.removeClass('full').addClass('half');
            bar5.removeClass('half').addClass('full');
          }
          if (t === 77) {
            bar4.removeClass('half');
            bar5.removeClass('full').addClass('half');
          }
          if (t === 90) {
            bar5.removeClass('half');
          }

          if (t === 103) {
            t = 0;
          }
        }

        setInterval(animate, 10);
      },

      updated: function() {
        return this.setup();
      },

      // Teardown / Destroy
      destroy: function() {
        this.element.off('start.busyindicator complete.busyindicator afterstart.busyindicator aftercomplete.busyindicator updated.busyindicator');
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, instance.settings, options);
        instance.updated();
      } else {
        instance = $.data(this, pluginName, new BusyIndicator(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
