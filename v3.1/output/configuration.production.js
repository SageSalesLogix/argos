Ext.data.JsonP.configuration_production({"tagname":"class","name":"configuration.production","autodetected":{},"files":[{"filename":"production.js","href":"production.html#configuration-production"}],"requires":["Mobile.SalesLogix.ApplicationModule"],"members":[{"name":"enableConcurrencyCheck","tagname":"property","owner":"configuration.production","id":"property-enableConcurrencyCheck","meta":{}},{"name":"enableGroups","tagname":"property","owner":"configuration.production","id":"property-enableGroups","meta":{}},{"name":"enableHashTags","tagname":"property","owner":"configuration.production","id":"property-enableHashTags","meta":{}},{"name":"enableUpdateNotification","tagname":"property","owner":"configuration.production","id":"property-enableUpdateNotification","meta":{}},{"name":"maxUploadFileSize","tagname":"property","owner":"configuration.production","id":"property-maxUploadFileSize","meta":{}},{"name":"multiCurrency","tagname":"property","owner":"configuration.production","id":"property-multiCurrency","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-configuration.production","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Mobile.SalesLogix.ApplicationModule' rel='Mobile.SalesLogix.ApplicationModule' class='docClass'>Mobile.SalesLogix.ApplicationModule</a></div><h4>Files</h4><div class='dependency'><a href='source/production.html#configuration-production' target='_blank'>production.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-enableConcurrencyCheck' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-enableConcurrencyCheck' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-enableConcurrencyCheck' class='name expandable'>enableConcurrencyCheck</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Turns on concurrency checks if two users modify the same record. ...</div><div class='long'><p>Turns on concurrency checks if two users modify the same record. A validation error will show for the second user that clicks save, explaining the error and forcing them to re-save.\nIf this option is false, the last person to save \"wins\" if they happen to edit the same field.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-enableGroups' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-enableGroups' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-enableGroups' class='name expandable'>enableGroups</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to enable groups support. ...</div><div class='long'><p>Set to true to enable groups support. Set to false to turn off groups. Custom hashtags will load in either mode.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-enableHashTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-enableHashTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-enableHashTags' class='name expandable'>enableHashTags</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to enable hashtag support. ...</div><div class='long'><p>Set to true to enable hashtag support. Turning this off will remove all hashtags from the right menu, even if a customization adds them.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-enableUpdateNotification' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-enableUpdateNotification' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-enableUpdateNotification' class='name expandable'>enableUpdateNotification</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Turn on to notify users the mobile application has been updated. ...</div><div class='long'><p>Turn on to notify users the mobile application has been updated. Uses HTML5 applilcation manifest update events to trigger.\nThe cache manifest the client gets from the server is kept in memory cache and is lost when the application pool resets, so users could potentially see that there is an update even though there is not.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-maxUploadFileSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-maxUploadFileSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-maxUploadFileSize' class='name expandable'>maxUploadFileSize</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The maximum upload file size for attachments, in bytes. ...</div><div class='long'><p>The maximum upload file size for attachments, in bytes.</p>\n<p>Defaults to: <code>40000000</code></p></div></div></div><div id='property-multiCurrency' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='configuration.production'>configuration.production</span><br/><a href='source/production.html#configuration-production-property-multiCurrency' target='_blank' class='view-source'>view source</a></div><a href='#!/api/configuration.production-property-multiCurrency' class='name expandable'>multiCurrency</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to enable multicurrency support. ...</div><div class='long'><p>Set to true to enable multicurrency support. This must also be configured properly on the SData server.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div></div></div>","meta":{}});