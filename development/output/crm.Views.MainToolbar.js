Ext.data.JsonP.crm_Views_MainToolbar({"tagname":"class","name":"crm.Views.MainToolbar","autodetected":{},"files":[{"filename":"MainToolbar.js","href":"MainToolbar.html#crm-Views-MainToolbar"}],"extends":"argos.MainToolbar","members":[{"name":"__class","tagname":"property","owner":"argos._Templated","id":"property-__class","meta":{}},{"name":"actionsFrom","tagname":"property","owner":"argos._ActionMixin","id":"property-actionsFrom","meta":{}},{"name":"attributeMap","tagname":"property","owner":"argos.MainToolbar","id":"property-attributeMap","meta":{}},{"name":"enabled","tagname":"property","owner":"argos.Toolbar","id":"property-enabled","meta":{}},{"name":"size","tagname":"property","owner":"argos.MainToolbar","id":"property-size","meta":{}},{"name":"titleText","tagname":"property","owner":"argos.MainToolbar","id":"property-titleText","meta":{}},{"name":"toolTemplate","tagname":"property","owner":"argos.MainToolbar","id":"property-toolTemplate","meta":{}},{"name":"widgetTemplate","tagname":"property","owner":"argos.MainToolbar","id":"property-widgetTemplate","meta":{}},{"name":"_getParametersForAction","tagname":"method","owner":"argos._ActionMixin","id":"method-_getParametersForAction","meta":{}},{"name":"_initiateActionFromEvent","tagname":"method","owner":"argos._ActionMixin","id":"method-_initiateActionFromEvent","meta":{}},{"name":"_isValidElementForAction","tagname":"method","owner":"argos._ActionMixin","id":"method-_isValidElementForAction","meta":{}},{"name":"buildRendering","tagname":"method","owner":"argos._Templated","id":"method-buildRendering","meta":{}},{"name":"clear","tagname":"method","owner":"argos.MainToolbar","id":"method-clear","meta":{}},{"name":"clearToolBusy","tagname":"method","owner":"argos.Toolbar","id":"method-clearToolBusy","meta":{}},{"name":"disable","tagname":"method","owner":"argos.Toolbar","id":"method-disable","meta":{}},{"name":"disableTool","tagname":"method","owner":"argos.Toolbar","id":"method-disableTool","meta":{}},{"name":"enable","tagname":"method","owner":"argos.Toolbar","id":"method-enable","meta":{}},{"name":"enableTool","tagname":"method","owner":"argos.Toolbar","id":"method-enableTool","meta":{}},{"name":"expandExpression","tagname":"method","owner":"argos.Toolbar","id":"method-expandExpression","meta":{}},{"name":"hasAction","tagname":"method","owner":"argos._ActionMixin","id":"method-hasAction","meta":{}},{"name":"hide","tagname":"method","owner":"argos.Toolbar","id":"method-hide","meta":{}},{"name":"indicateToolBusy","tagname":"method","owner":"argos.Toolbar","id":"method-indicateToolBusy","meta":{}},{"name":"init","tagname":"method","owner":"argos.Toolbar","id":"method-init","meta":{}},{"name":"invokeAction","tagname":"method","owner":"argos._ActionMixin","id":"method-invokeAction","meta":{}},{"name":"invokeTool","tagname":"method","owner":"argos.Toolbar","id":"method-invokeTool","meta":{}},{"name":"isToolEnabled","tagname":"method","owner":"argos.Toolbar","id":"method-isToolEnabled","meta":{}},{"name":"onTitleClick","tagname":"method","owner":"argos.MainToolbar","id":"method-onTitleClick","meta":{}},{"name":"postCreate","tagname":"method","owner":"argos._ActionMixin","id":"method-postCreate","meta":{}},{"name":"show","tagname":"method","owner":"argos.Toolbar","id":"method-show","meta":{}},{"name":"showTools","tagname":"method","owner":"argos.MainToolbar","id":"method-showTools","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-crm.Views.MainToolbar","component":false,"superclasses":["argos.Toolbar","argos.MainToolbar"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":["argos._ActionMixin","argos._Templated"],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='docClass'>argos.Toolbar</a><div class='subclass '><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='docClass'>argos.MainToolbar</a><div class='subclass '><strong>crm.Views.MainToolbar</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='docClass'>argos._ActionMixin</a></div><div class='dependency'><a href='#!/api/argos._Templated' rel='argos._Templated' class='docClass'>argos._Templated</a></div><h4>Files</h4><div class='dependency'><a href='source/MainToolbar.html#crm-Views-MainToolbar' target='_blank'>MainToolbar.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__class' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Templated' rel='argos._Templated' class='defined-in docClass'>argos._Templated</a><br/><a href='source/_Templated.html#argos-_Templated-property-__class' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Templated-property-__class' class='name expandable'>__class</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>_Templated serves as an override for dijit Widgets to enable the use of\nSimplates for templates.</p>\n</div><div class='long'><p>_Templated serves as an override for dijit Widgets to enable the use of\nSimplates for templates.</p>\n</div></div></div><div id='property-actionsFrom' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-property-actionsFrom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-property-actionsFrom' class='name expandable'>actionsFrom</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Comma separated (no spaces) list of events to listen to ...</div><div class='long'><p>Comma separated (no spaces) list of events to listen to</p>\n<p>Defaults to: <code>'click'</code></p></div></div></div><div id='property-attributeMap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-property-attributeMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-property-attributeMap' class='name expandable'>attributeMap</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Used to set the title node's innerHTML ...</div><div class='long'><p>Used to set the title node's innerHTML</p>\n<p>Defaults to: <code>{'title': {node: 'titleNode', type: 'innerHTML'}}</code></p></div></div></div><div id='property-enabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-property-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-property-enabled' class='name expandable'>enabled</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>State of toolbar ...</div><div class='long'><p>State of toolbar</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-size' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-property-size' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-property-size' class='name expandable'>size</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Current number of toolbar items set ...</div><div class='long'><p>Current number of toolbar items set</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-titleText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-property-titleText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-property-titleText' class='name expandable'>titleText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Text that is placed into the toolbar titleNode ...</div><div class='long'><p>Text that is placed into the toolbar titleNode</p>\n<p>Defaults to: <code>'Mobile'</code></p></div></div></div><div id='property-toolTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-property-toolTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-property-toolTemplate' class='name expandable'>toolTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Simplate that defines the toolbar item HTML Markup</p>\n\n<p><code>$</code> - The toolbar item object\n<code>$$</code> - The toolbar instance</p>\n</div><div class='long'><p>Simplate that defines the toolbar item HTML Markup</p>\n\n<p><code>$</code> - The toolbar item object\n<code>$$</code> - The toolbar instance</p>\n</div></div></div><div id='property-widgetTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-property-widgetTemplate' class='name expandable'>widgetTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Simplate that defines the main HTML Markup of the toolbar</p>\n\n<p><code>$</code> - the toolbar instance</p>\n</div><div class='long'><p>Simplate that defines the main HTML Markup of the toolbar</p>\n\n<p><code>$</code> - the toolbar instance</p>\n<p>Overrides: <a href=\"#!/api/argos.Toolbar-property-widgetTemplate\" rel=\"argos.Toolbar-property-widgetTemplate\" class=\"docClass\">argos.Toolbar.widgetTemplate</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_getParametersForAction' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-_getParametersForAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-_getParametersForAction' class='name expandable'>_getParametersForAction</a>( <span class='pre'>name, evt, el</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extracts the data- attributes of an element and adds $event and $source being the two originals values. ...</div><div class='long'><p>Extracts the <code>data-</code> attributes of an element and adds <code>$event</code> and <code>$source</code> being the two originals values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the action/function being fired.</p>\n</div></li><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>The original event</p>\n</div></li><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The node that has the <code>data-action</code> attribute</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Object with the original event and source along with all the <code>data-</code> attributes in pascal case.</p>\n</div></li></ul></div></div></div><div id='method-_initiateActionFromEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-_initiateActionFromEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-_initiateActionFromEvent' class='name expandable'>_initiateActionFromEvent</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Takes an event and fires the closest valid data-action with the attached data- attributes ...</div><div class='long'><p>Takes an event and fires the closest valid <code>data-action</code> with the attached <code>data-</code> attributes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_isValidElementForAction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-_isValidElementForAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-_isValidElementForAction' class='name expandable'>_isValidElementForAction</a>( <span class='pre'>el</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Verifies that the given HTML element is within our view. ...</div><div class='long'><p>Verifies that the given HTML element is within our view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildRendering' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._Templated' rel='argos._Templated' class='defined-in docClass'>argos._Templated</a><br/><a href='source/_Templated.html#argos-_Templated-method-buildRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._Templated-method-buildRendering' class='name expandable'>buildRendering</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Processes this.widgetTemplate or this.contentTemplate ...</div><div class='long'><p>Processes <code>this.widgetTemplate</code> or <code>this.contentTemplate</code></p>\n</div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls parent clear and removes all toolbar items from DOM. ...</div><div class='long'><p>Calls parent <a href=\"#!/api/argos.Toolbar-method-clear\" rel=\"argos.Toolbar-method-clear\" class=\"docClass\">clear</a> and removes all toolbar items from DOM.</p>\n<p>Overrides: <a href=\"#!/api/argos.Toolbar-method-clear\" rel=\"argos.Toolbar-method-clear\" class=\"docClass\">argos.Toolbar.clear</a></p></div></div></div><div id='method-clearToolBusy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-clearToolBusy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-clearToolBusy' class='name expandable'>clearToolBusy</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets busy to false of the toolbar item that matches the passed id ...</div><div class='long'><p>Sets busy to false of the toolbar item that matches the passed id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tool to set as not busy</p>\n</div></li></ul></div></div></div><div id='method-disable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a disabled style class and sets enabled to false ...</div><div class='long'><p>Adds a disabled style class and sets enabled to false</p>\n</div></div></div><div id='method-disableTool' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-disableTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-disableTool' class='name expandable'>disableTool</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets enabled to false of the toolbar item that matches the passed id ...</div><div class='long'><p>Sets enabled to false of the toolbar item that matches the passed id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tool to disable</p>\n</div></li></ul></div></div></div><div id='method-enable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes the disabled style and sets enabled to true ...</div><div class='long'><p>Removes the disabled style and sets enabled to true</p>\n</div></div></div><div id='method-enableTool' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-enableTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-enableTool' class='name expandable'>enableTool</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets enabled to true of the toolbar item that matches the passed id ...</div><div class='long'><p>Sets enabled to true of the toolbar item that matches the passed id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tool to enable</p>\n</div></li></ul></div></div></div><div id='method-expandExpression' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-expandExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-expandExpression' class='name expandable'>expandExpression</a>( <span class='pre'>expression</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Expands the passed expression if it is a function. ...</div><div class='long'><p>Expands the passed expression if it is a function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Returns string directly, if function it is called and the result returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>String expression.</p>\n</div></li></ul></div></div></div><div id='method-hasAction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-hasAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-hasAction' class='name expandable'>hasAction</a>( <span class='pre'>name, evt, el</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if the view contains a function with the given name ...</div><div class='long'><p>Determines if the view contains a function with the given name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of function being tested.</p>\n</div></li><li><span class='pre'>evt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>el</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hide' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the toolbar style to none (hidden) ...</div><div class='long'><p>Sets the toolbar style to none (hidden)</p>\n</div></div></div><div id='method-indicateToolBusy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-indicateToolBusy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-indicateToolBusy' class='name expandable'>indicateToolBusy</a>( <span class='pre'>id</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets busy to true of the toolbar item that matches the passed id ...</div><div class='long'><p>Sets busy to true of the toolbar item that matches the passed id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tool to indicate busy</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called upon application startup. ...</div><div class='long'><p>Called upon application startup.</p>\n</div></div></div><div id='method-invokeAction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-invokeAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-invokeAction' class='name expandable'>invokeAction</a>( <span class='pre'>name, parameters, evt, el</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the given function name in the context of the view passing\nthe parameters gathered and the event and element. ...</div><div class='long'><p>Calls the given function name in the context of the view passing\nthe <a href=\"#!/api/argos._ActionMixin-method-_getParametersForAction\" rel=\"argos._ActionMixin-method-_getParametersForAction\" class=\"docClass\">parameters gathered</a> and the event and element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of function being invoked.</p>\n</div></li><li><span class='pre'>parameters</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Collection of <code>data-</code> attributes from the element.</p>\n</div></li><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>The event that fired</p>\n</div></li><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The HTML element that has the <code>data-action</code></p>\n</div></li></ul></div></div></div><div id='method-invokeTool' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-invokeTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-invokeTool' class='name expandable'>invokeTool</a>( <span class='pre'>parameters, evt, node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>When a tool is clicked on this function handles matching the node to toolbar item instance and performs the actual ac...</div><div class='long'><p>When a tool is clicked on this function handles matching the node to toolbar item instance and performs the actual action</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>An object of all the <code>data-</code> attributes of the node.</p>\n</div></li><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>The event object</p>\n</div></li><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The html element that was clicked.</p>\n</div></li></ul></div></div></div><div id='method-isToolEnabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-isToolEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-isToolEnabled' class='name expandable'>isToolEnabled</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Checks the enabled property of the toolbar item that matches the passed id ...</div><div class='long'><p>Checks the enabled property of the toolbar item that matches the passed id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of the tool</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the toolbar item is enabled</p>\n</div></li></ul></div></div></div><div id='method-onTitleClick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-method-onTitleClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-method-onTitleClick' class='name expandable'>onTitleClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event handler that fires when the toolbar title is clicked. ...</div><div class='long'><p>Event handler that fires when the toolbar title is clicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul></div></div></div><div id='method-postCreate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._ActionMixin' rel='argos._ActionMixin' class='defined-in docClass'>argos._ActionMixin</a><br/><a href='source/_ActionMixin.html#argos-_ActionMixin-method-postCreate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._ActionMixin-method-postCreate' class='name expandable'>postCreate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the dijit Widget postCreate to connect to all events defined in actionsFrom. ...</div><div class='long'><p>Extends the dijit Widget <code>postCreate</code> to connect to all events defined in <code>actionsFrom</code>.</p>\n</div></div></div><div id='method-show' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.Toolbar' rel='argos.Toolbar' class='defined-in docClass'>argos.Toolbar</a><br/><a href='source/Toolbar.html#argos-Toolbar-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Toolbar-method-show' class='name expandable'>show</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the toolbar style to block (visibile) ...</div><div class='long'><p>Sets the toolbar style to block (visibile)</p>\n</div></div></div><div id='method-showTools' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos.MainToolbar' rel='argos.MainToolbar' class='defined-in docClass'>argos.MainToolbar</a><br/><a href='source/MainToolbar2.html#argos-MainToolbar-method-showTools' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.MainToolbar-method-showTools' class='name expandable'>showTools</a>( <span class='pre'>tools</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls parent showTools which sets the tool collection. ...</div><div class='long'><p>Calls parent <a href=\"#!/api/argos.Toolbar-method-showTools\" rel=\"argos.Toolbar-method-showTools\" class=\"docClass\">showTools</a> which sets the tool collection.\nThe collection is then looped over and added to DOM, adding the left or right styling</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tools</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<div class='sub-desc'><p>Array of toolbar item definitions</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/argos.Toolbar-method-showTools\" rel=\"argos.Toolbar-method-showTools\" class=\"docClass\">argos.Toolbar.showTools</a></p></div></div></div></div></div></div></div>","meta":{}});