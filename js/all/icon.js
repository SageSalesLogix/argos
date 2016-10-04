/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Icon Control (TODO: bitly link to soho xi docs)
* Wraps SVG Icons with a Javascript control that can change the icon type, reference
* relative or absolute URLs, and clean up after itself.  Works with the Base tag.
*/

// NOTE:  There are AMD Blocks available

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

  //NOTE: Just this part will show up in SoHo Xi Builds.

  $.fn.icon = function(options) {
    'use strict';

    // Settings and Options
    var pluginName = 'icon',
        defaults = {
          use: 'user-profile', // Match this to one of the SoHo Xi icons, prefixed with an ID of '#icon-'
          iconFileLocation: null, // If defined, this will be prepended to the <use> tag's xlink:href attribute, causing it to be loaded from an external file instead of locally on the page.
          focusable: false
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Icon(element, settings) {
      this.settings = $.extend({}, settings);
      this.element = $(element);
      this.init();
    }

    // Plugin Methods
    Icon.prototype = {
      init: function() {
        this.getExistingUseTag();

        //Do other init (change/normalize settings, load externals, etc)
        return this
          .render()
          .handleEvents();
      },

      // Add markup to the control
      render: function() {
        var self = this;
        this.element.addClass('icon');

        if (!this.element.is('svg')) {
          // TODO: Possibly work with span-based icons here?
          return this;
        }

        // Get a "base-tag-proof" version of the Use tag's definition.
        // jQuery can't work with SVG elements, so we just modify it with regular DOM APIs
        var use = this.element[0].getElementsByTagName('use')[0];
        if (!use) {
          return this;
        }

        if (use.getAttribute('xlink:href') !== self.getBasedUseTag()) {
          setTimeout(function () {
            use.setAttribute('xlink:href', self.getBasedUseTag());
          }, 0);
        }
        return this;
      },

      getBasedUseTag: function() {
        return $.getBaseURL((this.settings.iconFileLocation || '') + '#icon-' + this.settings.use);
      },

      // In the event that a <use> tag exists on an icon, we want to retain it
      // and replace the settings.
      getExistingUseTag: function() {
        if (!this.element.is('svg')) {
          return;
        }

        var useTag = this.element.children('use');
        if (!useTag.length) {
          return this;
        }

        var xlinkHref = useTag.attr('xlink:href');

        // detect if there is an external file location in the use tag, and store it
        if (xlinkHref.indexOf('#') > 0) {
          this.settings.iconFileLocation = xlinkHref.substring(0, xlinkHref.indexOf('#'));
          xlinkHref = xlinkHref.substring(xlinkHref.indexOf('#'), xlinkHref.length);
        }
        this.settings.use = xlinkHref.replace('#icon-', '');

        return this;
      },

      // Sets up event handlers for this control and its sub-elements
      handleEvents: function() {
        var self = this;

        this.element.on('updated.' + pluginName, function() {
          self.updated();
        });

        return this;
      },

      //Handle Updating Settings
      updated: function() {
        return this
          .teardown()
          .init();
      },

      // Simple Teardown - remove events & rebuildable markup.
      teardown: function() {
        this.element.off('updated.' + pluginName);
        return this;
      },

      // Teardown - Remove added markup and events
      destroy: function() {
        this.teardown();
        $.removeData(this.element[0], pluginName);
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
        var instance = $.data(this, pluginName);
      if (!instance) {
        instance = $.data(this, pluginName, new Icon(this, settings));
      }
    });
  };

  // Factory Function for instantly building icons.
  // Use this for building icons that don't exist yet.
  // Scoped Privately on purpose...
  (function (){
    'use strict';

    function normalizeIconOptions(options) {
      //Recheck for backwards compatibility
      var inlineSvg = $('.svg-icons > .svg-icons').length > 0;

      if (options.file && options.file.indexOf('/','') -1 ) {
        options.file = window.Soho.svgPath + options.file;
      }

      var defaults = {
        file: inlineSvg ? '' : window.Soho.svgPath + 'icons.svg',
        icon: 'user-profile', // omit the "icon-" if you want; this code strips it out.
        classes: ['icon']
      };
      options = options || $.extend({}, defaults);

      if (typeof options === 'string') {
        options = $.extend({}, defaults, {
          icon: options.replace('icon-', '')
        });
      }

      if (!options.classes) {
        options.classes = [].concat(defaults.classes);
      }

      if (!options.file) {
        options.file = defaults.file;
      }

      if (typeof options.classes === 'string') {
        options.classes = options.classes.split(' ');
      }

      if (options.classes.indexOf('icon') === -1) {
        options.classes.push('icon');
      }

      return options;
    }

    // Returns the RAW HTML for creating a new icon in string form
    $.createIcon = function createIcon(options) {
      options = normalizeIconOptions(options);

      return [
        '<svg class="' + options.classes.join(' ') + '" focusable="false" aria-hidden="true" role="presentation">' +
          '<use xlink:href="'+ options.file +'#icon-' + options.icon + '"></use>' +
        '</svg>'
      ].join('');
    };

    // Returns a jQuery-wrapped element containing a new icon
    $.createIconElement = function createIconElement(options) {
      return $($.createIcon(options));
    };

    // Returns just the path part
    $.createIconPath = function createIconElement(options) {
      options = normalizeIconOptions(options);
      return options.file + $.getBaseURL('#icon-' + options.icon.replace('icon-',''));
    };

    //Toggle the use or entire svg icon in the case of the polyfill
    $.fn.changeIcon = function(icon, file) {
      var svg = $(this),
          use = svg.find('use');

      if (use.length === 1) {
        use.attr('xlink:href', $.createIconPath({icon: icon, file: file}));
      } else {
        //ie polyfilled
        var newSvg = $.createIcon({classes: svg.attr('class'), icon : icon});
        svg.after(newSvg);
        svg.remove();
      }
      svg.attr('data-icon', icon);
    };

    $.fn.getIconName = function() {
      var svg = $(this),
          use = svg.find('use');

      if (use.length === 1) {
        return use.attr('xlink:href').substr(use.attr('xlink:href').indexOf('#icon-')+6);
      } else {
        return svg.attr('data-icon');
      }

    };

  })();

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
