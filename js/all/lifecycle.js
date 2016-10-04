/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
 * Lifecycle Methods for jQuery Controls
 * Recursive methods that "globally" call certain methods on large groups of controls
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

  // Used by several of these plugins to detect whether or not the "data" property in question
  // is a valid SoHo Xi Control.
  function canAccessAPI(prop) {
    return prop && !(prop instanceof jQuery);
  }

  // Used by several of these plugins to detect whether or not there is a method on a "data" api
  // that can be called.
  function canCall(prop, method) {
    var api = canAccessAPI(prop);
    if (!api) {
      return false;
    }

    return (prop[method] && typeof prop[method] === 'function');
  }

  // Actually triggers the method on the control if it's possible
  function triggerAPIMethod(prop, method) {
    if (canCall(prop, method)) {
      prop[method]();
      return true;
    }
    return false;
  }

  // Tracks each element that attempts to trigger an API method.
  // If a trigger is successful, it stores it in an array that's used later.
  function findControlsOnElements(elems, method) {
    var foundControls = [];

    $.each(elems, function elementIterator(index, elem) {
      $.each($(elem).data(), function dataEntryIterator(index, dataEntry) {
        if (triggerAPIMethod(dataEntry, method)) {
          foundControls.push({ elem: $(elem), control: dataEntry });
        }
      });
    });

    return foundControls;
  }

  // Kicks it all off
  function siftFor(rootElem, method) {
    if (!rootElem || !method) {
      return;
    }

    rootElem = $(rootElem);
    var DOMelements = rootElem.find('*').add(rootElem),
      siftedControls = findControlsOnElements(DOMelements, method);

    rootElem.trigger('sift-' + method + '-complete', [siftedControls]);
    return rootElem;
  }

  //==========================================================
  // Actual Control Plugins
  //==========================================================

  $.fn.destroy = function() {
    return siftFor($(this), 'destroy');
  };

  $.fn.closeChildren = function() {
    return siftFor($(this), 'close');
  };

  /* start-amd-strip-block */
}));
/* end-amd-strip-block */
