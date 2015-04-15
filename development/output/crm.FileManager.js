Ext.data.JsonP.crm_FileManager({"tagname":"class","name":"crm.FileManager","autodetected":{},"files":[{"filename":"FileManager.js","href":"FileManager.html#crm-FileManager"}],"members":[{"name":"constructor","tagname":"method","owner":"crm.FileManager","id":"method-constructor","meta":{}},{"name":"formatFileSize","tagname":"method","owner":"crm.FileManager","id":"method-formatFileSize","meta":{}},{"name":"getFile","tagname":"method","owner":"crm.FileManager","id":"method-getFile","meta":{}},{"name":"isFileSizeAllowed","tagname":"method","owner":"crm.FileManager","id":"method-isFileSizeAllowed","meta":{}},{"name":"isHTML5Supported","tagname":"method","owner":"crm.FileManager","id":"method-isHTML5Supported","meta":{}},{"name":"uploadFile","tagname":"method","owner":"crm.FileManager","id":"method-uploadFile","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-crm.FileManager","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/FileManager.html#crm-FileManager' target='_blank'>FileManager.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/crm.FileManager-method-constructor' class='name expandable'>crm.FileManager</a>( <span class='pre'></span> ) : <a href=\"#!/api/crm.FileManager\" rel=\"crm.FileManager\" class=\"docClass\">crm.FileManager</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/crm.FileManager\" rel=\"crm.FileManager\" class=\"docClass\">crm.FileManager</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-formatFileSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-formatFileSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.FileManager-method-formatFileSize' class='name expandable'>formatFileSize</a>( <span class='pre'>size</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Formats the file size formatted in KB. ...</div><div class='long'><p>Formats the file size formatted in KB.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-getFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.FileManager-method-getFile' class='name expandable'>getFile</a>( <span class='pre'>fileUrl, responseType, onSuccess</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Loads a remote file. ...</div><div class='long'><p>Loads a remote file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fileUrl</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>responseType</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>onSuccess</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>responseInfo</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></li></ul></div></div></div><div id='method-isFileSizeAllowed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-isFileSizeAllowed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.FileManager-method-isFileSizeAllowed' class='name expandable'>isFileSizeAllowed</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Checks the crm.Application's maxFileSize to determine\nif the file size being added exeeds this limit. ...</div><div class='long'><p>Checks the <a href=\"#!/api/crm.Application\" rel=\"crm.Application\" class=\"docClass\">crm.Application</a>'s maxFileSize to determine\nif the file size being added exeeds this limit.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isHTML5Supported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-isHTML5Supported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.FileManager-method-isHTML5Supported' class='name expandable'>isHTML5Supported</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Checks if the HTML5 file api is supported. ...</div><div class='long'><p>Checks if the HTML5 file api is supported.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-uploadFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='crm.FileManager'>crm.FileManager</span><br/><a href='source/FileManager.html#crm-FileManager-method-uploadFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/crm.FileManager-method-uploadFile' class='name expandable'>uploadFile</a>( <span class='pre'>file, url, progress, complete, error, scope, asPut</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Uploads a file to a URL. ...</div><div class='long'><p>Uploads a file to a URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>file</span> : File<div class='sub-desc'>\n</div></li><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>progress</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Progress callback</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></li><li><span class='pre'>complete</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Complete callback</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></li><li><span class='pre'>error</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Error callback</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>errorText</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>asPut</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});