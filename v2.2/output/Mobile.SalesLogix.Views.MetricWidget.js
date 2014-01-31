Ext.data.JsonP.Mobile_SalesLogix_Views_MetricWidget({"tagname":"class","name":"Mobile.SalesLogix.Views.MetricWidget","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Sage.Platform.Mobile.Store.SData","Sage.Platform.Mobile._Templated"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Mobile.SalesLogix.Views.MetricWidget","members":{"cfg":[],"property":[{"name":"itemTemplate","tagname":"property","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"property-itemTemplate"},{"name":"loadingTemplate","tagname":"property","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"property-loadingTemplate"},{"name":"widgetTemplate","tagname":"property","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"property-widgetTemplate"}],"method":[{"name":"getFormatterFnDeferred","tagname":"method","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"method-getFormatterFnDeferred"},{"name":"getValueFnDeferred","tagname":"method","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"method-getValueFnDeferred"},{"name":"requestData","tagname":"method","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"method-requestData"},{"name":"valueFn","tagname":"method","owner":"Mobile.SalesLogix.Views.MetricWidget","meta":{},"id":"method-valueFn"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":5,"files":[{"filename":"MetricWidget.js","href":"MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Store.SData' rel='Sage.Platform.Mobile.Store.SData' class='docClass'>Sage.Platform.Mobile.Store.SData</a></div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='docClass'>Sage.Platform.Mobile._Templated</a></div><h4>Files</h4><div class='dependency'><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget' target='_blank'>MetricWidget.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-itemTemplate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-property-itemTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-property-itemTemplate' class='name not-expandable'>itemTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>HTML markup for the metric detail (name/value)</p>\n</div><div class='long'><p>HTML markup for the metric detail (name/value)</p>\n</div></div></div><div id='property-loadingTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-property-loadingTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-property-loadingTemplate' class='name not-expandable'>loadingTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>HTML markup for the loading text and icon</p>\n</div><div class='long'><p>HTML markup for the loading text and icon</p>\n</div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-property-widgetTemplate' class='name not-expandable'>widgetTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>Simple that defines the HTML Markup</p>\n</div><div class='long'><p>Simple that defines the HTML Markup</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getFormatterFnDeferred' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-method-getFormatterFnDeferred' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-method-getFormatterFnDeferred' class='name expandable'>getFormatterFnDeferred</a>( <span class='pre'></span> ) : object</div><div class='description'><div class='short'>Loads a module/function via AMD and wraps it in a deferred ...</div><div class='long'><p>Loads a module/function via AMD and wraps it in a deferred</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>object</span><div class='sub-desc'><p>Returns a deferred with the function loaded via AMD require</p>\n</div></li></ul></div></div></div><div id='method-getValueFnDeferred' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-method-getValueFnDeferred' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-method-getValueFnDeferred' class='name expandable'>getValueFnDeferred</a>( <span class='pre'></span> ) : object</div><div class='description'><div class='short'>Loads a module/function via AMD and wraps it in a deferred ...</div><div class='long'><p>Loads a module/function via AMD and wraps it in a deferred</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>object</span><div class='sub-desc'><p>Returns a deferred with the function loaded via AMD require</p>\n</div></li></ul></div></div></div><div id='method-requestData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-method-requestData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-method-requestData' class='name expandable'>requestData</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Requests the widget's data, value fn, format fn, and renders it's itemTemplate ...</div><div class='long'><p>Requests the widget's data, value fn, format fn, and renders it's itemTemplate</p>\n</div></div></div><div id='method-valueFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Mobile.SalesLogix.Views.MetricWidget'>Mobile.SalesLogix.Views.MetricWidget</span><br/><a href='source/MetricWidget.html#Mobile-SalesLogix-Views-MetricWidget-method-valueFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Mobile.SalesLogix.Views.MetricWidget-method-valueFn' class='name expandable'>valueFn</a>( <span class='pre'>data</span> ) : int</div><div class='description'><div class='short'>Calculates the value shown in the metric widget button. ...</div><div class='long'><p>Calculates the value shown in the metric widget button.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Array<div class='sub-desc'><p>Array of data used for the metric</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>Returns a value calculated from data (SUM/AVG/MAX/MIN/Whatever)</p>\n</div></li></ul></div></div></div></div></div></div></div>"});