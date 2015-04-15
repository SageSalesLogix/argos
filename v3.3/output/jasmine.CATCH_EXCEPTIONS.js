Ext.data.JsonP.jasmine_CATCH_EXCEPTIONS({"tagname":"class","name":"jasmine.CATCH_EXCEPTIONS","autodetected":{},"files":[{"filename":"jasmine.js","href":"jasmine.html#jasmine-CATCH_EXCEPTIONS"}],"members":[{"name":"any","tagname":"method","owner":"jasmine.CATCH_EXCEPTIONS","id":"method-any","meta":{}},{"name":"getEnv","tagname":"method","owner":"jasmine.CATCH_EXCEPTIONS","id":"method-getEnv","meta":{}},{"name":"isDomNode","tagname":"method","owner":"jasmine.CATCH_EXCEPTIONS","id":"method-isDomNode","meta":{}},{"name":"objectContaining","tagname":"method","owner":"jasmine.CATCH_EXCEPTIONS","id":"method-objectContaining","meta":{}},{"name":"pp","tagname":"method","owner":"jasmine.CATCH_EXCEPTIONS","id":"method-pp","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jasmine.CATCH_EXCEPTIONS","short_doc":"By default exceptions thrown in the context of a test are caught by jasmine so that it can run the remaining tests in...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS' target='_blank'>jasmine.js</a></div></pre><div class='doc-contents'><p>By default exceptions thrown in the context of a test are caught by jasmine so that it can run the remaining tests in the suite.\nSet to false to let the exception bubble up in the browser.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-any' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jasmine.CATCH_EXCEPTIONS'>jasmine.CATCH_EXCEPTIONS</span><br/><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS-method-any' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jasmine.CATCH_EXCEPTIONS-method-any' class='name expandable'>any</a>( <span class='pre'>clazz</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a matchable 'generic' object of the class type. ...</div><div class='long'><p>Returns a matchable 'generic' object of the class type.  For use in expecations of type when values don't matter.</p>\n\n<p>@example\n// don't care about which function is passed in, as long as it's a function\nexpect(mySpy).toHaveBeenCalledWith(jasmine.any(Function));</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clazz</span> : Class<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>matchable object of the type clazz</p>\n</div></li></ul></div></div></div><div id='method-getEnv' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jasmine.CATCH_EXCEPTIONS'>jasmine.CATCH_EXCEPTIONS</span><br/><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS-method-getEnv' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jasmine.CATCH_EXCEPTIONS-method-getEnv' class='name expandable'>getEnv</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Getter for the Jasmine environment. ...</div><div class='long'><p>Getter for the Jasmine environment. Ensures one gets created</p>\n</div></div></div><div id='method-isDomNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jasmine.CATCH_EXCEPTIONS'>jasmine.CATCH_EXCEPTIONS</span><br/><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS-method-isDomNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jasmine.CATCH_EXCEPTIONS-method-isDomNode' class='name expandable'>isDomNode</a>( <span class='pre'>obj</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the object is a DOM Node. ...</div><div class='long'><p>Returns true if the object is a DOM Node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>object to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-objectContaining' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jasmine.CATCH_EXCEPTIONS'>jasmine.CATCH_EXCEPTIONS</span><br/><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS-method-objectContaining' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jasmine.CATCH_EXCEPTIONS-method-objectContaining' class='name expandable'>objectContaining</a>( <span class='pre'>sample</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a matchable subset of a JSON object. ...</div><div class='long'><p>Returns a matchable subset of a JSON object. For use in expectations when you don't care about all of the\nattributes on the object.</p>\n\n<p>@example\n// don't care about any other attributes than foo.\nexpect(mySpy).toHaveBeenCalledWith(jasmine.objectContaining({foo: \"bar\"});</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sample</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>{Object} sample</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>matchable object for the sample</p>\n</div></li></ul></div></div></div><div id='method-pp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jasmine.CATCH_EXCEPTIONS'>jasmine.CATCH_EXCEPTIONS</span><br/><a href='source/jasmine.html#jasmine-CATCH_EXCEPTIONS-method-pp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jasmine.CATCH_EXCEPTIONS-method-pp' class='name expandable'>pp</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Pretty printer for expecations. ...</div><div class='long'><p>Pretty printer for expecations.  Takes any object and turns it into a human-readable string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>{Object} an object to be outputted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});