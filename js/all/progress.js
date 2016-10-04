/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Progress Indicator Control
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

  $.fn.progress = function(options) {

    // Settings and Options
    var pluginName = 'progress',
        defaults = {
          animationLength: 1000
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.element = $(element);
      this.settings = settings;
      this.init();
    }

    // Actual Plugin Code
    Plugin.prototype = {

      init: function() {
        var self = this;
        self.update();

        this.element.off('updated.progress').on('updated.progress', function (e) {
          e.stopPropagation();
          self.update();
        });
      },

      updateAria: function (value) {
        this.element.attr({'role': 'progressbar', 'aria-valuenow': value, 'aria-maxvalue':'100'});

        var container = this.element.parent();
        if (container.data('tooltip')) {
          container.data('tooltip').content = value + '%';
        } else {
          container.attr('title', value + '%').tooltip();
        }
      },

      update: function (value) {

        var perc = this.element.attr('data-value');

        if (value) {
          perc = value;
        }

        this.element.css('width', perc + '%');
        this.updateAria(perc);
      },

      //Teardown
      destroy: function() {
        $.removeData(this.element[0], pluginName);
        this.element.off('updated.progress');
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new Plugin(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
