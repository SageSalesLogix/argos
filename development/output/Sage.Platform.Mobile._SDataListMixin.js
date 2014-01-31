Ext.data.JsonP.Sage_Platform_Mobile__SDataListMixin({"tagname":"class","name":"Sage.Platform.Mobile._SDataListMixin","autodetected":{},"files":[{"filename":"_SDataListMixin.js","href":"_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin"}],"alternateClassNames":["_SDataListMixin"],"requires":["Sage.Platform.Mobile.SData","Sage.Platform.Mobile.Utility"],"members":[{"name":"queryArgs","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-queryArgs","meta":{}},{"name":"queryInclude","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-queryInclude","meta":{}},{"name":"queryOrderBy","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-queryOrderBy","meta":{}},{"name":"querySelect","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-querySelect","meta":{}},{"name":"queryWhere","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-queryWhere","meta":{}},{"name":"resourceKind","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-resourceKind","meta":{}},{"name":"resourcePredicate","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-resourcePredicate","meta":{}},{"name":"resourceProperty","tagname":"cfg","owner":"Sage.Platform.Mobile._SDataListMixin","id":"cfg-resourceProperty","meta":{}},{"name":"formatRelatedQuery","tagname":"method","owner":"Sage.Platform.Mobile._SDataListMixin","id":"method-formatRelatedQuery","meta":{}}],"aliases":{},"id":"class-Sage.Platform.Mobile._SDataListMixin","short_doc":"Enables SData for the List view. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_SDataListMixin</div><h4>Requires</h4><div class='dependency'>Sage.Platform.Mobile.SData</div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Utility' rel='Sage.Platform.Mobile.Utility' class='docClass'>Sage.Platform.Mobile.Utility</a></div><h4>Files</h4><div class='dependency'><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin' target='_blank'>_SDataListMixin.js</a></div></pre><div class='doc-contents'><p>Enables SData for the List view.\nAdds the SData store to the view and exposes the needed properties for creating a Feed request.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-queryArgs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-queryArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-queryArgs' class='name expandable'>queryArgs</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Key/value map of additional query arguments to add to the request. ...</div><div class='long'><p>Key/value map of additional query arguments to add to the request.\nExample:\n    queryArgs: { _filter: 'Active' }</p>\n\n<pre><code>/sdata/app/dynamic/-/resource?_filter=Active&amp;where=\"\"&amp;format=json\n</code></pre>\n</div></div></div><div id='cfg-queryInclude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-queryInclude' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-queryInclude' class='name expandable'>queryInclude</a> : String[]?<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A list of child properties to be included in an SData request.</p>\n</div><div class='long'><p>A list of child properties to be included in an SData request.</p>\n</div></div></div><div id='cfg-queryOrderBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-queryOrderBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-queryOrderBy' class='name expandable'>queryOrderBy</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The default order by expression for an SData request.</p>\n</div><div class='long'><p>The default order by expression for an SData request.</p>\n</div></div></div><div id='cfg-querySelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-querySelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-querySelect' class='name expandable'>querySelect</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A list of fields to be selected in an SData request.</p>\n</div><div class='long'><p>A list of fields to be selected in an SData request.</p>\n</div></div></div><div id='cfg-queryWhere' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-queryWhere' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-queryWhere' class='name expandable'>queryWhere</a> : String/Function<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The default where expression for an SData request.</p>\n</div><div class='long'><p>The default where expression for an SData request.</p>\n</div></div></div><div id='cfg-resourceKind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-resourceKind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-resourceKind' class='name expandable'>resourceKind</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The SData resource kind the view is responsible for. ...</div><div class='long'><p>The SData resource kind the view is responsible for.  This will be used as the default resource kind\nfor all SData requests.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-resourcePredicate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-resourcePredicate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-resourcePredicate' class='name expandable'>resourcePredicate</a> : String?/Function?<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The default resource predicate for an SData request.</p>\n</div><div class='long'><p>The default resource predicate for an SData request.</p>\n</div></div></div><div id='cfg-resourceProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-cfg-resourceProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-cfg-resourceProperty' class='name expandable'>resourceProperty</a> : String?/Function?<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The default resource property for an SData request.</p>\n</div><div class='long'><p>The default resource property for an SData request.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-formatRelatedQuery' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile._SDataListMixin'>Sage.Platform.Mobile._SDataListMixin</span><br/><a href='source/_SDataListMixin.html#Sage-Platform-Mobile-_SDataListMixin-method-formatRelatedQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._SDataListMixin-method-formatRelatedQuery' class='name expandable'>formatRelatedQuery</a>( <span class='pre'>entry, fmt, property</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructs a where expression using the provided format string and extracting the needed property from entry ...</div><div class='long'><p>Constructs a where expression using the provided format string and extracting the needed property from entry</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>entry</span> : Object<div class='sub-desc'><p>Data point to extract from.</p>\n</div></li><li><span class='pre'>fmt</span> : String<div class='sub-desc'><p>Format string to be replaced where <code>${0}</code> will be the extracted property.</p>\n</div></li><li><span class='pre'>property</span> : String<div class='sub-desc'><p>Property name to extract from the entry. May be a path: <code>'Address.City'</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});