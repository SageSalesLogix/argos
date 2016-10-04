/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
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

  $.fn.tag = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'tag',
        defaults = {
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Plugin Methods
    Plugin.prototype = {

      init: function() {
        this.handleEvents();
      },

      // Handle Events
      handleEvents: function() {
        var self = this,
          btnDismissable = $(
            '<span class="dismissable-btn">' +
              $.createIcon('close') +
              '<span class="audible"> '+ Locale.translate('Close') +'</span>' +
            '</span>');

        if (self.element.is('.is-dismissable')) {
          self.element.append(btnDismissable);

          // Handle Click
          btnDismissable.on('click.tag', function(event) {
            self.remove(event, self.element);
          });

          // Handle Keyboard
          self.element.on('keydown.tag', function(event) {
            var e = event || window.event;
            if (e.keyCode === 8) { // Backspace
              self.remove(event, this);
            }
          });

        }

      }, // END: Handle Events ---------------------------------------------------------------------

      // Remove from DOM
      remove: function(event, el) {
        el = el instanceof jQuery ? el : $(el);
        var parent = el.parent();
        this.element.triggerHandler('beforetagremove', {event: event, element: el});
        el.remove();
        parent.triggerHandler('aftertagremove', {event: event});
      },

      // Teardown
      destroy: function() {
        this.element.off('keydown.tag');
        $('.dismissable-btn', this.element).off('click.tag').remove();

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
        instance = $.data(this, pluginName, new Plugin(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
