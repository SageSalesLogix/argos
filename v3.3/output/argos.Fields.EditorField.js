Ext.data.JsonP.argos_Fields_EditorField({"tagname":"class","name":"argos.Fields.EditorField","autodetected":{},"files":[{"filename":"EditorField.js","href":"EditorField.html#argos-Fields-EditorField"}],"alternateClassNames":["EditorField"],"extends":"argos._Field","members":[{"name":"view","tagname":"cfg","owner":"argos.Fields.EditorField","id":"cfg-view","meta":{}},{"name":"attributeMap","tagname":"property","owner":"argos.Fields.EditorField","id":"property-attributeMap","meta":{}},{"name":"completeText","tagname":"property","owner":"argos.Fields.EditorField","id":"property-completeText","meta":{}},{"name":"currentValue","tagname":"property","owner":"argos.Fields.EditorField","id":"property-currentValue","meta":{}},{"name":"emptyText","tagname":"property","owner":"argos.Fields.EditorField","id":"property-emptyText","meta":{}},{"name":"lookupLabelText","tagname":"property","owner":"argos.Fields.EditorField","id":"property-lookupLabelText","meta":{}},{"name":"lookupText","tagname":"property","owner":"argos.Fields.EditorField","id":"property-lookupText","meta":{}},{"name":"originalValue","tagname":"property","owner":"argos.Fields.EditorField","id":"property-originalValue","meta":{}},{"name":"validationValue","tagname":"property","owner":"argos.Fields.EditorField","id":"property-validationValue","meta":{}},{"name":"widgetTemplate","tagname":"property","owner":"argos.Fields.EditorField","id":"property-widgetTemplate","meta":{}},{"name":"_disableTextElement","tagname":"method","owner":"argos.Fields.EditorField","id":"method-_disableTextElement","meta":{}},{"name":"_enableTextElement","tagname":"method","owner":"argos.Fields.EditorField","id":"method-_enableTextElement","meta":{}},{"name":"_onClick","tagname":"method","owner":"argos.Fields.EditorField","id":"method-_onClick","meta":{}},{"name":"_onComplete","tagname":"method","owner":"argos.Fields.EditorField","id":"method-_onComplete","meta":{}},{"name":"clearValue","tagname":"method","owner":"argos.Fields.EditorField","id":"method-clearValue","meta":{}},{"name":"complete","tagname":"method","owner":"argos.Fields.EditorField","id":"method-complete","meta":{}},{"name":"createNavigationOptions","tagname":"method","owner":"argos.Fields.EditorField","id":"method-createNavigationOptions","meta":{}},{"name":"disable","tagname":"method","owner":"argos.Fields.EditorField","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"argos.Fields.EditorField","id":"method-enable","meta":{}},{"name":"formatValue","tagname":"method","owner":"argos.Fields.EditorField","id":"method-formatValue","meta":{"template":true}},{"name":"getValue","tagname":"method","owner":"argos.Fields.EditorField","id":"method-getValue","meta":{}},{"name":"getValuesFromView","tagname":"method","owner":"argos.Fields.EditorField","id":"method-getValuesFromView","meta":{}},{"name":"init","tagname":"method","owner":"argos.Fields.EditorField","id":"method-init","meta":{}},{"name":"isDirty","tagname":"method","owner":"argos.Fields.EditorField","id":"method-isDirty","meta":{}},{"name":"navigateToEditView","tagname":"method","owner":"argos.Fields.EditorField","id":"method-navigateToEditView","meta":{}},{"name":"setText","tagname":"method","owner":"argos.Fields.EditorField","id":"method-setText","meta":{}},{"name":"setValue","tagname":"method","owner":"argos.Fields.EditorField","id":"method-setValue","meta":{}},{"name":"validate","tagname":"method","owner":"argos.Fields.EditorField","id":"method-validate","meta":{}}],"aliases":{},"id":"class-argos.Fields.EditorField","short_doc":"The EditorField is not a field per say but a base class for another field type to inherit from. ...","component":false,"superclasses":["argos._Field"],"subclasses":["argos.Fields.DateField","argos.Fields.SignatureField"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>EditorField</div><h4>Hierarchy</h4><div class='subclass first-child'>argos._Field<div class='subclass '><strong>argos.Fields.EditorField</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/argos.Fields.DateField' rel='argos.Fields.DateField' class='docClass'>argos.Fields.DateField</a></div><div class='dependency'><a href='#!/api/argos.Fields.SignatureField' rel='argos.Fields.SignatureField' class='docClass'>argos.Fields.SignatureField</a></div><h4>Files</h4><div class='dependency'><a href='source/EditorField.html#argos-Fields-EditorField' target='_blank'>EditorField.js</a></div></pre><div class='doc-contents'><p>The EditorField is not a field per say but a base class for another field type to inherit from. The\nintent of an EditorField is you have a field where the input should come from another form. EditorField\nwill handle the navigation, gathering values from the other view, going back and applying to the form\nthe field is on.</p>\n\n<p>A prime example of an editor field extension would be an AddressField - say you are entering a contacts\ndetails and need the address. You could make an AddressField that extends EditorField for handling all\nthe address parts and takes the user to an address_edit with all the street/city/postal etc.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-view' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-cfg-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-cfg-view' class='name expandable'>view</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The view id that the user will be taken to when the edit button is clicked.</p>\n</div><div class='long'><p>The view id that the user will be taken to when the edit button is clicked.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributeMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-attributeMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-attributeMap' class='name expandable'>attributeMap</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a setter map to html nodes, namely:\n\n\ninputValue => inputNode's value attribute ...</div><div class='long'><p>Creates a setter map to html nodes, namely:</p>\n\n<ul>\n<li>inputValue => inputNode's value attribute</li>\n</ul>\n\n<p>Defaults to: <code>{inputValue: {node: 'inputNode', type: 'attribute', attribute: 'value'}}</code></p></div></div></div><div id='property-completeText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-completeText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-completeText' class='name expandable'>completeText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Text that may be used in the toolbar item that is passed to the editor view ...</div><div class='long'><p>Text that may be used in the toolbar item that is passed to the editor view</p>\n<p>Defaults to: <code>'Ok'</code></p></div></div></div><div id='property-currentValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-currentValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-currentValue' class='name expandable'>currentValue</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Value storage for current value, as it must be formatted for display this is the full value.</p>\n</div><div class='long'><p>Value storage for current value, as it must be formatted for display this is the full value.</p>\n</div></div></div><div id='property-emptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-emptyText' class='name expandable'>emptyText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Value placed when the field is cleared or set to null ...</div><div class='long'><p>Value placed when the field is cleared or set to null</p>\n<p>Defaults to: <code>'empty'</code></p></div></div></div><div id='property-lookupLabelText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-lookupLabelText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-lookupLabelText' class='name expandable'>lookupLabelText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The ARIA label text ...</div><div class='long'><p>The ARIA label text</p>\n<p>Defaults to: <code>'edit'</code></p></div></div></div><div id='property-lookupText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-lookupText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-lookupText' class='name expandable'>lookupText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Text placed in the lookup button ...</div><div class='long'><p>Text placed in the lookup button</p>\n<p>Defaults to: <code>'...'</code></p></div></div></div><div id='property-originalValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-originalValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-originalValue' class='name expandable'>originalValue</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Value storage for keeping track of modified/unmodified values. ...</div><div class='long'><p>Value storage for keeping track of modified/unmodified values. Used in <a href=\"#!/api/argos.Fields.EditorField-method-isDirty\" rel=\"argos.Fields.EditorField-method-isDirty\" class=\"docClass\">isDirty</a>.</p>\n</div></div></div><div id='property-validationValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-validationValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-validationValue' class='name expandable'>validationValue</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Value storage for the value to use in validation, when gathering values from the editor view\nthe validationValue is s...</div><div class='long'><p>Value storage for the value to use in validation, when gathering values from the editor view\nthe validationValue is set using <code>getValues(true)</code> which returns all values even non-modified ones.</p>\n</div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-property-widgetTemplate' class='name expandable'>widgetTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Simplate that defines the fields HTML Markup</p>\n\n<ul>\n<li><code>$</code> => Field instance</li>\n<li><code>$$</code> => Owner View instance</li>\n</ul>\n\n</div><div class='long'><p>Simplate that defines the fields HTML Markup</p>\n\n<ul>\n<li><code>$</code> => Field instance</li>\n<li><code>$$</code> => Owner View instance</li>\n</ul>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_disableTextElement' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-_disableTextElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-_disableTextElement' class='name expandable'>_disableTextElement</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the input nodes' disabled attribute to true ...</div><div class='long'><p>Sets the input nodes' disabled attribute to true</p>\n</div></div></div><div id='method-_enableTextElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-_enableTextElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-_enableTextElement' class='name expandable'>_enableTextElement</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the input nodes' disabled attribute to false ...</div><div class='long'><p>Sets the input nodes' disabled attribute to false</p>\n</div></div></div><div id='method-_onClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-_onClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-_onClick' class='name expandable'>_onClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for the onclick event of the fields container. ...</div><div class='long'><p>Handler for the <code>onclick</code> event of the fields container.</p>\n\n<p>Invokes <a href=\"#!/api/argos.Fields.EditorField-method-navigateToEditView\" rel=\"argos.Fields.EditorField-method-navigateToEditView\" class=\"docClass\">navigateToEditView</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_onComplete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-_onComplete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-_onComplete' class='name expandable'>_onComplete</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for _onComplete which is fired after the user has completed the form in the editor view\n\nFires onChange. ...</div><div class='long'><p>Handler for <code>_onComplete</code> which is fired after the user has completed the form in the editor view</p>\n\n<p>Fires onChange.</p>\n</div></div></div><div id='method-clearValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-clearValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-clearValue' class='name expandable'>clearValue</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears the value by passing null to setValue ...</div><div class='long'><p>Clears the value by passing <code>null</code> to <a href=\"#!/api/argos.Fields.EditorField-method-setValue\" rel=\"argos.Fields.EditorField-method-setValue\" class=\"docClass\">setValue</a></p>\n</div></div></div><div id='method-complete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-complete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-complete' class='name expandable'>complete</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Handler for the toolbar item that is passed to the editor view. ...</div><div class='long'><p>Handler for the toolbar item that is passed to the editor view. When this function fires\nthe view shown is the editor view but the function is fired in scope of the field.</p>\n\n<p>It gets a handler of the current active view and validates the form, if it passes it gathers\nthe value, sets the fields text, calls <code>ReUI.back</code> and fires </em>onComplete.</p>\n</div></div></div><div id='method-createNavigationOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-createNavigationOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-createNavigationOptions' class='name expandable'>createNavigationOptions</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates the navigation options to be passed to the editor view. ...</div><div class='long'><p>Creates the navigation options to be passed to the editor view. The important part\nof this code is that it passes <code>tools</code> that overrides the editors view toolbar with an item\nthat operates within this fields scope.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Navigation options</p>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the parent implementation to also call disableTextElement. ...</div><div class='long'><p>Extends the parent implementation to also call </em>disableTextElement.</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the parent implementation to also call enableTextElement. ...</div><div class='long'><p>Extends the parent implementation to also call </em>enableTextElement.</p>\n</div></div></div><div id='method-formatValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-formatValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-formatValue' class='name expandable'>formatValue</a>( <span class='pre'>val</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Returns the formatted value. ...</div><div class='long'><p>Returns the formatted value. This should be overwritten to provide proper formatting</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current value ...</div><div class='long'><p>Returns the current value</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValuesFromView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-getValuesFromView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-getValuesFromView' class='name expandable'>getValuesFromView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the values from the editor view and applies it to the this fields this.currentValue and\nthis.validationValue. ...</div><div class='long'><p>Gets the values from the editor view and applies it to the this fields <code>this.currentValue</code> and\n<code>this.validationValue</code>.</p>\n</div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the parent implementation to connect the onclick event of the fields container\nto onClick. ...</div><div class='long'><p>Extends the parent implementation to connect the <code>onclick</code> event of the fields container\nto </em>onClick.</p>\n</div></div></div><div id='method-isDirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-isDirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-isDirty' class='name expandable'>isDirty</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if the value has been modified from the default/original state ...</div><div class='long'><p>Determines if the value has been modified from the default/original state</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-navigateToEditView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-navigateToEditView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-navigateToEditView' class='name expandable'>navigateToEditView</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Navigates to the given this.view using the options from createNavigationOptions. ...</div><div class='long'><p>Navigates to the given <code>this.view</code> using the options from <a href=\"#!/api/argos.Fields.EditorField-method-createNavigationOptions\" rel=\"argos.Fields.EditorField-method-createNavigationOptions\" class=\"docClass\">createNavigationOptions</a>.</p>\n</div></div></div><div id='method-setText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-setText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-setText' class='name expandable'>setText</a>( <span class='pre'>text</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the displayed text to the input. ...</div><div class='long'><p>Sets the displayed text to the input.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>val, initial</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the current value to the item passed, as the default if initial is true. ...</div><div class='long'><p>Sets the current value to the item passed, as the default if initial is true. Then it sets\nthe displayed text using <a href=\"#!/api/argos.Fields.EditorField-method-setText\" rel=\"argos.Fields.EditorField-method-setText\" class=\"docClass\">setText</a> with the <a href=\"#!/api/argos.Fields.EditorField-method-formatValue\" rel=\"argos.Fields.EditorField-method-formatValue\" class=\"docClass\">formatted</a> value.</p>\n\n<p>If null/false is passed all is cleared and <code>this.emptyText</code> is set as the displayed text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Value to be set</p>\n</div></li><li><span class='pre'>initial</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>True if the value is the default/clean value, false if it is a meant as a dirty value</p>\n</div></li></ul></div></div></div><div id='method-validate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.Fields.EditorField'>argos.Fields.EditorField</span><br/><a href='source/EditorField.html#argos-Fields-EditorField-method-validate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.Fields.EditorField-method-validate' class='name expandable'>validate</a>( <span class='pre'>value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the parent implementation to use the this.validationValue instead of this.getValue(). ...</div><div class='long'><p>Extends the parent implementation to use the <code>this.validationValue</code> instead of <code>this.getValue()</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});