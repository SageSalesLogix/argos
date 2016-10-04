Ext.data.JsonP.Date({"tagname":"class","name":"Date","autodetected":{},"files":[{"filename":"Date.js","href":"Date.html#Date"}],"members":[],"alternateClassNames":[],"aliases":{},"id":"class-Date","extends":null,"singleton":null,"private":null,"mixins":[],"requires":[],"uses":[],"short_doc":"Creates Date instances which let you work with dates and times. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Date.html#Date' target='_blank'>Date.js</a></div></pre><div class='doc-contents'><p>Creates <code>Date</code> instances which let you work with dates and times.</p>\n\n<p>If you supply no arguments, the constructor creates a <code>Date</code> object for today's\ndate and time according to local time. If you supply some arguments but not\nothers, the missing arguments are set to 0. If you supply any arguments, you\nmust supply at least the year, month, and day. You can omit the hours, minutes,\nseconds, and milliseconds.</p>\n\n<p>The date is measured in milliseconds since midnight 01 January, 1970 UTC. A day\nholds 86,400,000 milliseconds. The <code>Date</code> object range is -100,000,000 days to\n100,000,000 days relative to 01 January, 1970 UTC.</p>\n\n<p>The <code>Date</code> object provides uniform behavior across platforms.</p>\n\n<p>The <code>Date</code> object supports a number of UTC (universal) methods, as well as\nlocal time methods. UTC, also known as Greenwich Mean Time (GMT), refers to the\ntime as set by the World Time Standard. The local time is the time known to the\ncomputer where JavaScript is executed.</p>\n\n<p>Invoking <code>Date</code> in a non-constructor context (i.e., without the <code>new</code> operator)\nwill return a string representing the current time.</p>\n\n<p>Note that <code>Date</code> objects can only be instantiated by calling <code>Date</code> or using it\nas a constructor; unlike other JavaScript object types, <code>Date</code> objects have no\nliteral syntax.</p>\n\n<h1>Several ways to assign dates</h1>\n\n<p>The following example shows several ways to assign dates:</p>\n\n<pre><code>today = new Date();\nbirthday = new Date(\"December 19, 1989 03:24:00\");\nbirthday = new Date(1989,11,19);\nbirthday = new Date(1989,11,17,3,24,0);\n</code></pre>\n\n<h1>Calculating elapsed time</h1>\n\n<p>The following examples show how to determine the elapsed time between two dates:</p>\n\n<pre><code>// using static methods\nvar start = Date.now();\n// the event you'd like to time goes here:\ndoSomethingForALongTime();\nvar end = Date.now();\nvar elapsed = end - start; // time in milliseconds\n\n// if you have Date objects\nvar start = new Date();\n// the event you'd like to time goes here:\ndoSomethingForALongTime();\nvar end = new Date();\nvar elapsed = end.getTime() - start.getTime(); // time in milliseconds\n\n// if you want to test a function and get back its return\nfunction printElapsedTime (fTest) {\n    var nStartTime = Date.now(), vReturn = fTest(), nEndTime = Date.now();\n    alert(\"Elapsed time: \" + String(nEndTime - nStartTime) + \"\n    milliseconds\");\n    return vReturn;\n}\n\nyourFunctionReturn = printElapsedTime(yourFunction);\n</code></pre>\n\n<h1>ISO 8601 formatted dates</h1>\n\n<p>The following example shows how to formate a date in an ISO 8601 format using\nUTC:</p>\n\n<pre><code>// use a function for the exact format desired...\nfunction ISODateString(d){\nfunction pad(n){return n&lt;10 ? '0'+n : n}\nreturn d.getUTCFullYear()+'-'\n    + pad(d.getUTCMonth()+1)+'-'\n    + pad(d.getUTCDate())+'T'\n    + pad(d.getUTCHours())+':'\n    + pad(d.getUTCMinutes())+':'\n    + pad(d.getUTCSeconds())+'Z'}\n\nvar d = new Date();\nprint(ISODateString(d)); // prints something like 2009-09-28T19:03:12Z\n</code></pre>\n\n<div class=\"notice\">\nDocumentation for this class comes from <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date\">MDN</a>\nand is available under <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">Creative Commons: Attribution-Sharealike license</a>.\n</div>\n\n</div><div class='members'></div></div>","meta":{}});