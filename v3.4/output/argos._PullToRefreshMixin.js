Ext.data.JsonP.argos__PullToRefreshMixin({"tagname":"class","name":"argos._PullToRefreshMixin","autodetected":{},"files":[{"filename":"_PullToRefreshMixin.js","href":"_PullToRefreshMixin.html#argos-_PullToRefreshMixin"},{"filename":"_PullToRefreshMixin.js","href":"_PullToRefreshMixin.html#argos-_PullToRefreshMixin"}],"alternateClassNames":["_PullToRefreshMixin","_PullToRefreshMixin"],"members":[{"name":"enablePullToRefresh","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-enablePullToRefresh","meta":{}},{"name":"pullRefreshBanner","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshBanner","meta":{}},{"name":"pullRefreshBannerTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshBannerTemplate","meta":{}},{"name":"pullRefreshTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshTemplate","meta":{}},{"name":"pullRefreshText","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullRefreshText","meta":{}},{"name":"pullReleaseTemplate","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullReleaseTemplate","meta":{}},{"name":"pullReleaseText","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-pullReleaseText","meta":{}},{"name":"scrollerNode","tagname":"property","owner":"argos._PullToRefreshMixin","id":"property-scrollerNode","meta":{}},{"name":"initPullToRefresh","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-initPullToRefresh","meta":{}},{"name":"onPullToRefreshCancel","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-onPullToRefreshCancel","meta":{}},{"name":"onPullToRefreshComplete","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-onPullToRefreshComplete","meta":{}},{"name":"shouldStartPullToRefresh","tagname":"method","owner":"argos._PullToRefreshMixin","id":"method-shouldStartPullToRefresh","meta":{}}],"aliases":{},"id":"class-argos._PullToRefreshMixin","extends":null,"singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"component":false,"superclasses":[],"subclasses":[],"mixedInto":["argos._ListBase","crm.Views.Charts._ChartMixin"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>_PullToRefreshMixin</div><div class='alternate-class-name'>_PullToRefreshMixin</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/argos._ListBase' rel='argos._ListBase' class='docClass'>argos._ListBase</a></div><div class='dependency'><a href='#!/api/crm.Views.Charts._ChartMixin' rel='crm.Views.Charts._ChartMixin' class='docClass'>crm.Views.Charts._ChartMixin</a></div><h4>Files</h4><div class='dependency'><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin' target='_blank'>_PullToRefreshMixin.js</a></div><div class='dependency'><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin' target='_blank'>_PullToRefreshMixin.js</a></div></pre><div class='doc-contents'><p>Mixin for pull to refresh actions</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-enablePullToRefresh' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-enablePullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-enablePullToRefresh' class='name expandable'>enablePullToRefresh</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>If true, will enable the user to drag down and refresh the list. ...</div><div class='long'><p>If true, will enable the user to drag down and refresh the list. Default is true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-pullRefreshBanner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshBanner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshBanner' class='name expandable'>pullRefreshBanner</a> : DOMNode<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshBannerTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshBannerTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshBannerTemplate' class='name expandable'>pullRefreshBannerTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshTemplate' class='name expandable'>pullRefreshTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullRefreshText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullRefreshText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullRefreshText' class='name expandable'>pullRefreshText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Text to indicate a pull to refresh</p>\n</div><div class='long'><p>Text to indicate a pull to refresh</p>\n</div></div></div><div id='property-pullReleaseTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullReleaseTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullReleaseTemplate' class='name expandable'>pullReleaseTemplate</a> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-pullReleaseText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-pullReleaseText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-pullReleaseText' class='name expandable'>pullReleaseText</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Text to indicate the user should release to cause the refresh</p>\n</div><div class='long'><p>Text to indicate the user should release to cause the refresh</p>\n</div></div></div><div id='property-scrollerNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-property-scrollerNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-property-scrollerNode' class='name expandable'>scrollerNode</a> : DOMNode<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initPullToRefresh' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-initPullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-initPullToRefresh' class='name expandable'>initPullToRefresh</a>( <span class='pre'>scrollerNode</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollerNode</span> : DOMNode<div class='sub-desc'><p>The node that scrollers and should be pulled on to refresh.</p>\n</div></li></ul></div></div></div><div id='method-onPullToRefreshCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-onPullToRefreshCancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-onPullToRefreshCancel' class='name expandable'>onPullToRefreshCancel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the pull to refresh is canceled. ...</div><div class='long'><p>Fires when the pull to refresh is canceled.</p>\n</div></div></div><div id='method-onPullToRefreshComplete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-onPullToRefreshComplete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-onPullToRefreshComplete' class='name expandable'>onPullToRefreshComplete</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the pull to refresh is successful. ...</div><div class='long'><p>Fires when the pull to refresh is successful.</p>\n</div></div></div><div id='method-shouldStartPullToRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos._PullToRefreshMixin'>argos._PullToRefreshMixin</span><br/><a href='source/_PullToRefreshMixin.html#argos-_PullToRefreshMixin-method-shouldStartPullToRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._PullToRefreshMixin-method-shouldStartPullToRefresh' class='name expandable'>shouldStartPullToRefresh</a>( <span class='pre'>scrollerNode</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Derived class must implement this to determine when pull to refresh should start. ...</div><div class='long'><p>Derived class must implement this to determine when pull to refresh should start. This is called when onTouchStart is fired.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scrollerNode</span> : DOMNode<div class='sub-desc'><p>Reference to the scoller node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});