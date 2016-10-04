/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* MultiSelect Control (TODO: bitly link to soho xi docs)
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

  $.fn.multiselect = function(options) {

    'use strict';

    // Settings and Options
    var pluginName = 'multiselect',
        defaults = {
          maxSelected: undefined,
          source: undefined
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function MultiSelect(element) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Plugin Methods
    MultiSelect.prototype = {

      init: function() {
        this.build();
      },

      build: function() {
        var ddOpts = {
            closeOnSelect: false,
            empty: true,
            moveSelectedToTop: true,
            multiple: true
          };

        if (this.settings.source) {
          ddOpts.source = this.settings.source;
        }

        if (this.settings.maxSelected) {
          ddOpts.maxSelected = this.settings.maxSelected;
        }

        this.element.dropdown(ddOpts);
        this.dropdown = this.element.data('dropdown');

        return this;
      },

      enable: function() {
        this.dropdown.enable();
      },

      disable: function() {
        this.dropdown.disable();
      },

      // Teardown - Remove added markup and events
      destroy: function() {
        this.dropdown.destroy();
        this.element.off();
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, instance.settings, options);
      } else {
        instance = $.data(this, pluginName, new MultiSelect(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
