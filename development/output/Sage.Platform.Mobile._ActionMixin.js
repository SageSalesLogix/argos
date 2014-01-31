Ext.data.JsonP.Sage_Platform_Mobile__ActionMixin({"tagname":"class","name":"Sage.Platform.Mobile._ActionMixin","autodetected":{},"files":[{"filename":"_ActionMixin.js","href":"_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin"}],"alternateClassNames":["_ActionMixin"],"members":[{"name":"actionsFrom","tagname":"property","owner":"Sage.Platform.Mobile._ActionMixin","id":"property-actionsFrom","meta":{}},{"name":"_getParametersForAction","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-_getParametersForAction","meta":{}},{"name":"_initiateActionFromEvent","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-_initiateActionFromEvent","meta":{}},{"name":"_isValidElementForAction","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-_isValidElementForAction","meta":{}},{"name":"hasAction","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-hasAction","meta":{}},{"name":"invokeAction","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-invokeAction","meta":{}},{"name":"postCreate","tagname":"method","owner":"Sage.Platform.Mobile._ActionMixin","id":"method-postCreate","meta":{}}],"aliases":{},"id":"class-Sage.Platform.Mobile._ActionMixin","short_doc":"_ActionMixin provides a click listener to the domNode of view it is mixed into. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["Sage.Platform.Mobile.Fields._Field","Sage.Platform.Mobile.Toolbar","Sage.Platform.Mobile.View"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_ActionMixin</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Fields._Field' rel='Sage.Platform.Mobile.Fields._Field' class='docClass'>Sage.Platform.Mobile.Fields._Field</a></div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Toolbar' rel='Sage.Platform.Mobile.Toolbar' class='docClass'>Sage.Platform.Mobile.Toolbar</a></div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.View' rel='Sage.Platform.Mobile.View' class='docClass'>Sage.Platform.Mobile.View</a></div><h4>Files</h4><div class='dependency'><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin' target='_blank'>_ActionMixin.js</a></div></pre><div class='doc-contents'><p>_ActionMixin provides a click listener to the <code>domNode</code> of view it is mixed into.</p>\n\n<p>When a click event is caught by the handler it finds the closest element with <code>data-action</code>\nand fires that function in the context of the view. When calling the function it passes a <code>params</code>\nobject with the following:</p>\n\n<pre><code>{\n    $event: 'Original click event',\n    $src: 'The HTML node that initiated the event'\n}\n</code></pre>\n\n<p>and then it mixes it all the <code>data-</code> attributes from the node into the params object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-actionsFrom' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-property-actionsFrom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-property-actionsFrom' class='name expandable'>actionsFrom</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Comma separated (no spaces) list of events to listen to ...</div><div class='long'><p>Comma separated (no spaces) list of events to listen to</p>\n<p>Defaults to: <code>'click'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_getParametersForAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-_getParametersForAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-_getParametersForAction' class='name expandable'>_getParametersForAction</a>( <span class='pre'>name, evt, el</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Extracts the data- attributes of an element and adds $event and $source being the two originals values. ...</div><div class='long'><p>Extracts the <code>data-</code> attributes of an element and adds <code>$event</code> and <code>$source</code> being the two originals values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the action/function being fired.</p>\n</div></li><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>The original event</p>\n</div></li><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The node that has the <code>data-action</code> attribute</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Object with the original event and source along with all the <code>data-</code> attributes in pascal case.</p>\n</div></li></ul></div></div></div><div id='method-_initiateActionFromEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-_initiateActionFromEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-_initiateActionFromEvent' class='name expandable'>_initiateActionFromEvent</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Takes an event and fires the closest valid data-action with the attached data- attributes ...</div><div class='long'><p>Takes an event and fires the closest valid <code>data-action</code> with the attached <code>data-</code> attributes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_isValidElementForAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-_isValidElementForAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-_isValidElementForAction' class='name expandable'>_isValidElementForAction</a>( <span class='pre'>el</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Verifies that the given HTML element is within our view. ...</div><div class='long'><p>Verifies that the given HTML element is within our view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-hasAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-hasAction' class='name expandable'>hasAction</a>( <span class='pre'>name, evt, el</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if the view contains a function with the given name ...</div><div class='long'><p>Determines if the view contains a function with the given name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of function being tested.</p>\n</div></li><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-invokeAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-invokeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-invokeAction' class='name expandable'>invokeAction</a>( <span class='pre'>name, parameters, evt, el</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the given function name in the context of the view passing\nthe parameters gathered and the event and element. ...</div><div class='long'><p>Calls the given function name in the context of the view passing\nthe <a href=\"#!/api/Sage.Platform.Mobile._ActionMixin-method-_getParametersForAction\" rel=\"Sage.Platform.Mobile._ActionMixin-method-_getParametersForAction\" class=\"docClass\">parameters gathered</a> and the event and element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of function being invoked.</p>\n</div></li><li><span class='pre'>parameters</span> : Object<div class='sub-desc'><p>Collection of <code>data-</code> attributes from the element.</p>\n</div></li><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>The event that fired</p>\n</div></li><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The HTML element that has the <code>data-action</code></p>\n</div></li></ul></div></div></div><div id='method-postCreate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._ActionMixin'>Sage.Platform.Mobile._ActionMixin</span><br/><a href='source/_ActionMixin.html#Sage-Platform-Mobile-_ActionMixin-method-postCreate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._ActionMixin-method-postCreate' class='name expandable'>postCreate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the dijit Widget postCreate to connect to all events defined in actionsFrom. ...</div><div class='long'><p>Extends the dijit Widget <code>postCreate</code> to connect to all events defined in <code>actionsFrom</code>.</p>\n</div></div></div></div></div></div></div>","meta":{}});