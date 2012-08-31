Ext.data.JsonP.Sage_Platform_Mobile_Fields_DateField({"tagname":"class","name":"Sage.Platform.Mobile.Fields.DateField","extends":"EditorField","mixins":[],"alternateClassNames":["DateField"],"aliases":{},"singleton":false,"requires":["Sage.Platform.Mobile.Calendar","Sage.Platform.Mobile.FieldManager","Sage.Platform.Mobile.Format"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Sage.Platform.Mobile.Fields.DateField","members":{"cfg":[{"name":"dateFormatText","tagname":"cfg","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"cfg-dateFormatText"},{"name":"emptyText","tagname":"cfg","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"cfg-emptyText"},{"name":"showTimePicker","tagname":"cfg","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"cfg-showTimePicker"},{"name":"timeless","tagname":"cfg","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"cfg-timeless"}],"property":[{"name":"invalidDateFormatErrorText","tagname":"property","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"property-invalidDateFormatErrorText"},{"name":"view","tagname":"property","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"property-view"},{"name":"widgetTemplate","tagname":"property","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"property-widgetTemplate"}],"method":[{"name":"_onChange","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-_onChange"},{"name":"clearValue","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-clearValue"},{"name":"createNavigationOptions","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-createNavigationOptions"},{"name":"formatValue","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-formatValue"},{"name":"getValuesFromView","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-getValuesFromView"},{"name":"isDirty","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-isDirty"},{"name":"validate","tagname":"method","owner":"Sage.Platform.Mobile.Fields.DateField","meta":{},"id":"method-validate"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":33,"files":[{"filename":"DateField.js","href":"DateField.html#Sage-Platform-Mobile-Fields-DateField"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["EditorField"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>DateField</div><h4>Hierarchy</h4><div class='subclass first-child'>EditorField<div class='subclass '><strong>Sage.Platform.Mobile.Fields.DateField</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Calendar' rel='Sage.Platform.Mobile.Calendar' class='docClass'>Sage.Platform.Mobile.Calendar</a></div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.FieldManager' rel='Sage.Platform.Mobile.FieldManager' class='docClass'>Sage.Platform.Mobile.FieldManager</a></div><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.Format' rel='Sage.Platform.Mobile.Format' class='docClass'>Sage.Platform.Mobile.Format</a></div><h4>Files</h4><div class='dependency'><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField' target='_blank'>DateField.js</a></div></pre><div class='doc-contents'><p>The DateField is an extension of the EditorField by accepting Date Objects\nfor values and using the <a href=\"#!/api/Sage.Platform.Mobile.Calendar\" rel=\"Sage.Platform.Mobile.Calendar\" class=\"docClass\">Calendar</a> view for user input.</p>\n\n<h3>Example</h3>\n\n<pre><code>{\n    name: 'StartDate',\n    property: 'StartDate',\n    label: this.startDateText,\n    type: 'date',\n    dateFormatText: 'MM/dd HH:mm:ss',\n    showTimerPicker: true\n}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dateFormatText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-cfg-dateFormatText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-cfg-dateFormatText' class='name expandable'>dateFormatText</a><span> : String</span></div><div class='description'><div class='short'>The Datejs format the date will be\nformatted when displaying in the field. ...</div><div class='long'><p>The <a href=\"http://code.google.com/p/datejs/wiki/FormatSpecifiers\">Datejs format</a> the date will be\nformatted when displaying in the field.</p>\n<p>Defaults to: <code>'MM/dd/yyyy'</code></p></div></div></div><div id='cfg-emptyText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-cfg-emptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-cfg-emptyText' class='name expandable'>emptyText</a><span> : String</span></div><div class='description'><div class='short'>The text shown when no value (or null/undefined) is set to the field. ...</div><div class='long'><p>The text shown when no value (or null/undefined) is set to the field.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-showTimePicker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-cfg-showTimePicker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-cfg-showTimePicker' class='name expandable'>showTimePicker</a><span> : Boolean</span></div><div class='description'><div class='short'>Sent as part of navigation options to Calendar, where it controls the\ndisplay of the hour/minute inputs. ...</div><div class='long'><p>Sent as part of navigation options to <a href=\"#!/api/Sage.Platform.Mobile.Calendar\" rel=\"Sage.Platform.Mobile.Calendar\" class=\"docClass\">Calendar</a>, where it controls the\ndisplay of the hour/minute inputs.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-timeless' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-cfg-timeless' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-cfg-timeless' class='name expandable'>timeless</a><span> : Boolean</span></div><div class='description'><div class='short'>Used in formatted and sent as part of navigation options to Calendar,\nwhere it controls the the conversion to/from UT...</div><div class='long'><p>Used in formatted and sent as part of navigation options to <a href=\"#!/api/Sage.Platform.Mobile.Calendar\" rel=\"Sage.Platform.Mobile.Calendar\" class=\"docClass\">Calendar</a>,\nwhere it controls the the conversion to/from UTC and setting the hour:min:sec to 00:00:05.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-invalidDateFormatErrorText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-property-invalidDateFormatErrorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-property-invalidDateFormatErrorText' class='name expandable'>invalidDateFormatErrorText</a><span> : String</span></div><div class='description'><div class='short'>The error validation message for this field. ...</div><div class='long'><p>The error validation message for this field.</p>\n\n<p><code>${0}</code> => Label</p>\n<p>Defaults to: <code>&quot;Field '${0}' has Invalid date format.&quot;</code></p></div></div></div><div id='property-view' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-property-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-property-view' class='name expandable'>view</a><span> : String</span></div><div class='description'><div class='short'>The target view id that will provide the user input, this should always be to set to the\nCalendars view id. ...</div><div class='long'><p>The target view id that will provide the user input, this should always be to set to the\n<a href=\"#!/api/Sage.Platform.Mobile.Calendar\" rel=\"Sage.Platform.Mobile.Calendar\" class=\"docClass\">Calendars</a> view id.</p>\n<p>Defaults to: <code>'generic_calendar'</code></p></div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-property-widgetTemplate' class='name not-expandable'>widgetTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>Simplate that defines the fields HTML Markup</p>\n\n<ul>\n<li><code>$</code> => Field instance</li>\n<li><code>$$</code> => Owner View instance</li>\n</ul>\n\n</div><div class='long'><p>Simplate that defines the fields HTML Markup</p>\n\n<ul>\n<li><code>$</code> => Field instance</li>\n<li><code>$$</code> => Owner View instance</li>\n</ul>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_onChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-_onChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-_onChange' class='name expandable'>_onChange</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>When a value changes it checks that the text in the input field matches the defined\ndateFormatText by using it to par...</div><div class='long'><p>When a value changes it checks that the text in the input field matches the defined\n<code>dateFormatText</code> by using it to parse it back into a Date Object. If this succeeds then\nsets the current value to the Date object and removes any validation warnings. If it\ndoesn't then current value is empties and the validation styling is added.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Event that caused change to fire.</p>\n</div></li></ul></div></div></div><div id='method-clearValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-clearValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-clearValue' class='name expandable'>clearValue</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Extends the parent clearValue to also include removing the\nerror validation styling. ...</div><div class='long'><p>Extends the parent clearValue to also include removing the\nerror validation styling.</p>\n</div></div></div><div id='method-createNavigationOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-createNavigationOptions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-createNavigationOptions' class='name expandable'>createNavigationOptions</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Extends the parent createNavigationOptions to\nalso include the properties date, showTimePicker and timeless with date...</div><div class='long'><p>Extends the parent createNavigationOptions to\nalso include the properties <code>date</code>, <code>showTimePicker</code> and <code>timeless</code> with <code>date</code> being the current value</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Navigation options</p>\n</div></li></ul></div></div></div><div id='method-formatValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-formatValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-formatValue' class='name expandable'>formatValue</a>( <span class='pre'>value</span> ) : String</div><div class='description'><div class='short'>Takes a date object and calls format.date passing the current\ndateFormatText and timeless values, formatting the date...</div><div class='long'><p>Takes a date object and calls <a href=\"#!/api/Sage.Platform.Mobile.Format-method-date\" rel=\"Sage.Platform.Mobile.Format-method-date\" class=\"docClass\">format.date</a> passing the current\n<code>dateFormatText</code> and <code>timeless</code> values, formatting the date into a string representation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Date<div class='sub-desc'><p>Date to be converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValuesFromView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-getValuesFromView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-getValuesFromView' class='name expandable'>getValuesFromView</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Retrieves the date from the Calendar view and sets it to currentValue. ...</div><div class='long'><p>Retrieves the date from the <a href=\"#!/api/Sage.Platform.Mobile.Calendar-method-getDateTime\" rel=\"Sage.Platform.Mobile.Calendar-method-getDateTime\" class=\"docClass\">Calendar</a> view and sets it to currentValue.</p>\n</div></div></div><div id='method-isDirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-isDirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-isDirty' class='name expandable'>isDirty</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Determines if the current value has been modified from the original value. ...</div><div class='long'><p>Determines if the current value has been modified from the original value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-validate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.DateField'>Sage.Platform.Mobile.Fields.DateField</span><br/><a href='source/DateField.html#Sage-Platform-Mobile-Fields-DateField-method-validate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.DateField-method-validate' class='name expandable'>validate</a>( <span class='pre'></span> ) : Boolean/Object</div><div class='description'><div class='short'>Extends the parent validate with a check that makes sure if\nthe user has inputted a date manually into the input fiel...</div><div class='long'><p>Extends the parent validate with a check that makes sure if\nthe user has inputted a date manually into the input field that it had successfully validated\nin the </em>onChange function.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean/Object</span><div class='sub-desc'><p>False for no errors. True/Object for invalid.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});