Ext.data.JsonP.argos__TemplatedWidgetMixin({"tagname":"class","name":"argos._TemplatedWidgetMixin","extends":null,"mixins":[],"alternateClassNames":["_TemplatedWidgetMixin"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos._TemplatedWidgetMixin","code_type":"dojo_define","members":{"cfg":[{"name":"widgetTemplate","tagname":"cfg","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"cfg-widgetTemplate"}],"property":[{"name":"_attachTemplateNodes","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":true},"id":"property-_attachTemplateNodes"},{"name":"_beforeFillContent","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"property-_beforeFillContent"},{"name":"_fillContent","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":true},"id":"property-_fillContent"},{"name":"destroyRendering","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":false},"id":"property-destroyRendering"},{"name":"widgetTemplate","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"property-widgetTemplate"}],"method":[{"name":"constructor","tagname":"method","owner":"argos._TemplatedWidgetMixin","meta":{"private":false},"id":"method-constructor"},{"name":"buildRendering","tagname":"method","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"method-buildRendering"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"_TemplatedWidgetMixin.js","href":"_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["argos.Charts._Chart","argos.Fields.BooleanField","argos.Fields.EditorField","argos.Fields.LookupField","argos.SearchWidget","argos.Views.DateTimePicker"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_TemplatedWidgetMixin</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/argos.Charts._Chart' rel='argos.Charts._Chart' class='docClass'>argos.Charts._Chart</a></div><div class='dependency'><a href='#!/api/argos.Fields.BooleanField' rel='argos.Fields.BooleanField' class='docClass'>argos.Fields.BooleanField</a></div><div class='dependency'><a href='#!/api/argos.Fields.EditorField' rel='argos.Fields.EditorField' class='docClass'>argos.Fields.EditorField</a></div><div class='dependency'><a href='#!/api/argos.Fields.LookupField' rel='argos.Fields.LookupField' class='docClass'>argos.Fields.LookupField</a></div><div class='dependency'><a href='#!/api/argos.SearchWidget' rel='argos.SearchWidget' class='docClass'>argos.SearchWidget</a></div><div class='dependency'><a href='#!/api/argos.Views.DateTimePicker' rel='argos.Views.DateTimePicker' class='docClass'>argos.Views.DateTimePicker</a></div><h4>Files</h4><div class='dependency'><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin' target='_blank'>_TemplatedWidgetMixin.js</a></div></pre><div class='doc-contents'><p><em>TemplatedWidgetMixin provides the property <code>widgetTemplate</code> for constructing a widget instead of using the\npreferred Component base system. Basically the difference is a widgetTemplate is merely a string\nwhereas a Component is a javascript object with all the added benefits.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-widgetTemplate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-cfg-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-cfg-widgetTemplate' class='name expandable'>widgetTemplate</a><span> : String</span></div><div class='description'><div class='short'>HTML markup for the item, the outmost parent (if no single parent a div will be created) will be assigned\nto this.dom...</div><div class='long'><p>HTML markup for the item, the outmost parent (if no single parent a div will be created) will be assigned\nto <code>this.domNode</code>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_attachTemplateNodes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_attachTemplateNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_attachTemplateNodes' class='name not-expandable'>_attachTemplateNodes</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_beforeFillContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_beforeFillContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_beforeFillContent' class='name expandable'>_beforeFillContent</a><span> : Object</span></div><div class='description'><div class='short'>Since there is no way to directly override only the template rendering in Dojo, include\nthe necessary functions from ...</div><div class='long'><p>Since there is no way to directly override only the template rendering in Dojo, include\nthe necessary functions from <code>_TemplatedMixin</code> in order to minimize the amount of code that\nneeds to be updated when Dojo itself is updated.</p>\n</div></div></div><div id='property-_fillContent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_fillContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_fillContent' class='name not-expandable'>_fillContent</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-destroyRendering' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-destroyRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-destroyRendering' class='name not-expandable'>destroyRendering</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-widgetTemplate' class='name not-expandable'>widgetTemplate</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/argos._TemplatedWidgetMixin-method-constructor' class='name expandable'>argos._TemplatedWidgetMixin</a>( <span class='pre'></span> ) : <a href=\"#!/api/argos._TemplatedWidgetMixin\" rel=\"argos._TemplatedWidgetMixin\" class=\"docClass\">argos._TemplatedWidgetMixin</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/argos._TemplatedWidgetMixin\" rel=\"argos._TemplatedWidgetMixin\" class=\"docClass\">argos._TemplatedWidgetMixin</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos.View-method-constructor' rel='argos.View-method-constructor' class='docClass'>argos.View.constructor</a></p></div></div></div><div id='method-buildRendering' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._TemplatedWidgetMixin'>argos._TemplatedWidgetMixin</span><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-method-buildRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-method-buildRendering' class='name expandable'>buildRendering</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Processes this.widgetTemplate ...</div><div class='long'><p>Processes <code>this.widgetTemplate</code></p>\n</div></div></div></div></div></div></div>"});