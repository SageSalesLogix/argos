(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/hi-IN', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('hi-IN', {
    //layout/language
    language: 'hi',
    englishName: 'Hindi (India)',
    nativeName: 'हिंदी (भारत)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '-', //Infered
                   'timeSeparator': ':',
                   'short': 'd-M-yyyy', //use four digit year
                   'medium': 'dd-MM-yyyy',
                   'long': 'd MMMM yyyy',
                   'full': 'EEEE, d MMMM yyyy',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'h:mm:ss',
                   'datetime': 'd-M-yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
        wide: ['रविवार','सोमवार','मंगलवार','बुधवार','गुरुवार','शुक्रवार','शनिवार'],
        abbreviated: ['रवि','सोम','मंगल','बुध','गुरु','शुक्र','शनि'],
        narrow: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['जनवरी','फ़रवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितंबर','अक्टूबर','नवंबर','दिसंबर'],
        abbreviated: ['ज','फ़','मा','अ','म','जू','जु','अ','सि','अ','न','दि']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'h:mm a',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['पूर्व', 'अपर']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '₹', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '"¤#,##,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: '.',
      group: ','
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Copyright &copy; {0} Infor. सर्वाधिकार सुरक्षित| यहाँ दिए गए शब्द और डिज़ाइन मार्क्स Infor और/या Infor के सहयोगियों और संबंधित सहायकों के लिए सेट किये गए ट्रेडमार्क्स और/या पंजीकृत ट्रेडमार्क्स हैं| सर्वाधिकार सुरक्षित| यहाँ सूचित किये गए अन्य सभी ट्रेडमार्क्स उनके सम्बंधित स्वामियों की संपत्ति है|'},
      'Actions': {id: 'Actions', value: 'क्रियाएँ', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'जोड़ें', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'अग्रवर्ती फ़िल्टर बनाएँ', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'चेतावनी', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'के लिए सभी परिणाम', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'नीचे से संरेखित', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'क्षैतिज संरेखित मध्य', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'अंबर', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'बिल्लौर', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'लागू करें', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'अनुलग्न करें', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'नभोनील', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'के बीच', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'कोट अवरोधित करें', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'बोल्ड', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'बुकमार्क किए', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'यह बुकमार्क करें', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'ब्रेडक्रम्ब', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'बुलेटेड सूची', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'कैलेंडर', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'कैमरा', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'रद्द करें', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'कैप्स लॉक चालू है', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'कार्ट', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'मध्य', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'बचे हुए अक्षर: {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'अक्षर की अधिकतम गिनती ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. चयन को परिवर्तित करने के लिए तीर कुंजी का उपयोग करें।', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'चेकबॉक्स', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'जाँच हुआ', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'क्लियर करें', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'घड़ी', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'बंद करें', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'प्रतिलिपि बनाएँ', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'संक्षिप्त करें', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'ऐप ट्रे संक्षिप्त करें', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'स्तंभ', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'लिखें', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'समाप्त', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'पुष्टि करें', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'शामिल', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'काटें', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'दिनांक', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'हटाएँ', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'क्षैतिज रूप से वितरित करें', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'दस्तावेज़', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'ड्रिल डाउन', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'ड्रिल अप', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'ड्रॉपडाउन', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'शामिल नहीं है', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'के बराबर नहीं है', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'नीचे', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'डाउनलोड', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'प्रतिलिपि करें', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'चयनित किया गया या चयनित नहीं किया गया', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'टिप्पणी यहाँ दर्ज करें...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'त्रुटि', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'ईमेल पता मान्य नहीं है', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'एमराल्ड', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'विस्तृत करें', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'ऐप ट्रे विस्तृत करें', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'विस्तृत करें / संक्षिप्त करें', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'स्प्रेडशीट के रूप में निर्यात करें', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'संपादित करें', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'के बराबर है', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'फ़ुल दृश्य निकास', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'निर्यात', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'फ़ाइल अपलोड एक फ़ाइल ब्राउज़ करने के लिए एंट्रर दबाएँ', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'फ़िल्टर करें', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'प्रथम पृष्ठ', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'फ़ोल्डर', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'फ़ुल दृश्य', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'आगे जाएँ', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'पीछे जाएँ', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'नीचे जाएँ', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'उपर जाएँ', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'ग्रेफाइट', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'अधिक या बराबर', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'से अधिक', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'ग्रिड', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'घंटे', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'तीसरा शीर्षक', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'चौथा शीर्षक', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'उच्चतम', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'होम', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Html दृश्य', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'आयात', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'जानकारी', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'एंकर सम्मिलित करें', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'छवि सम्मिलित करें', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'तिरछा', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'अमान्य दिनांक', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'वस्तुसूची', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'खाली है', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'खाली नहीं है', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'मध्य में समकरण करें', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'बाएँ में समकरण करें', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'दाईं में समकरण करें', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'कीवर्ड', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'प्रक्षेपण करें', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'अंतिम पृष्ठ', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'बाएँ', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'बाएँ संरेखित', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'टेक्स्ट बाएँ संरेखित', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'कम या बराबर', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'से कम', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'लिंक', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'लोड करें', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'लोड हो रहा है', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'लॉक्ड', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'लुकअप', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'निम्नतम', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'मेल', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'मैप पिन करें', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'बड़ा करें', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'मंझला', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'मध्यम', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'मेनू', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Ming.le के साथ शेयर करें', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'मिनट्स', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'छोटा करें', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'माइनस', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'अधिक...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'और क्रियाएँ', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', संशोधित किया', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. के साथ मल्टीसेलेक्ट ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'नया दस्तावेज़', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'अगला', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'अगला पृष्ठ', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'अगला महीना', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'परिणाम नहीं', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'नोट्स', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'चयनित नहीं किया गया', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'संख्या सूची', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'खोलें / वापस / बंद करें', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'खोलें / बंद करें', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'ऑर्डर्ड सूची', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'पृष्ठ ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'पृष्ठ {0} का {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'आप वर्तमान में पृष्ठ पर हैं ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'चिपकाएँ', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>पासवर्ड होना चाहिए:</strong><br>कम से कम 10 अक्षर लंबा<br>कम से कम एक अपर केस अक्षर है<br>कम से कम एक लोअर केस अक्षर हैr<br><strong>एक विशेष अक्षर शामिल</strong><br>आपका उपयोगकर्ता नाम शामिल नहीं<br>पहले से उपयोग किया पासवर्ड नहीं हो सकता<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'पासवर्ड मिलान होना चाहिए', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'पीक', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'स्तंभ वैयक्तिकरण करें', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'अवधि', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'एक दिनांक चयन करने को नीचे दबाएँ', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'संदर्भ मेनू खोलने के लिए Shift+F10 दबाएँ', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'पिछला', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'पिछला महीना', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'पिछला पृष्ठ', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'मुद्रित करें', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'सीमा', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} रिकॉर्ड प्रति पृष्ठ', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'पुन: करें', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'रिफ़्रेश करें', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'आवश्यक', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'रीसेट करें', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'परिणाम', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'दाहिना', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'दाहिना संरेखित', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: ' टेक्स्ट दाहिना संरेखित', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'भूमिकाएँ', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'पंक्ति की ऊँचाई', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'रूबी', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'सेव', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'वर्तमान दृश्य सेव करें', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'सेव किए गए दृश्य', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'खोजें', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'फ़ोल्डर खोजें', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'सूची खोजें', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'चयनित', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'भेजें', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'समय सेट करें', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'सेटिंग्स', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'संक्षिप्त', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'स्लेट', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'के लिए हैंडल', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'के लिए अधिकतम रेंज हैंडल', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'के लिए न्यूनतम रेंज हैंडल', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'मुख्य अंतर्निहित वस्तु पर जाएं', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'के माध्यम से स्ट्राइक करें', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'A to Z सॉर्ट करें', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Z to A सॉर्ट करें', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'नीचे सॉर्ट करें', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'उपर सॉर्ट करें', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'स्टार फिल्ड', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'स्टार हाफ', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'स्टार उल्लिखित', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'सबस्क्रिप्ट', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'सुपरस्क्रिप्ट', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'टॅक', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'लंबा', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'टाइमर', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'आज', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'बोल्ड टेक्स्ट टॉगल करें', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'शीर्षक 3 टॉगल करें', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'शीर्षक 4 टॉगल करें', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'इटैलिक टेक्स्ट टॉगल करें', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'रेखांकित टेक्स्ट टॉगल करें', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'टूलबार', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'शीर्ष संरेखित', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'कुल', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'ट्री संक्षिप्त करें', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'ट्री विस्तृत करें', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'फ़िरोज़ी', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'उपर', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'अपलोड करें', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'अनुपलब्ध दिनांक', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'रेखांकित करें', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'पूर्ववत् करें', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'अनलॉक्ड', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'अव्यवस्थित सूची', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'यह अंतर्निहित वस्तु उपलब्ध नहीं हैं क्योंकि यह आपके ब्राउज़र संस्करण में समर्थन नहीं करने के सुविधाओं का उपयोग करता हैं।', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. चयन करने को तीर कुंजी उपयोग करें', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. लुकअप करने को एंटर या डाउन आरो का उपयोग करें।', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'उपयोगकर्ता', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'उपयोगकर्ता प्रोफ़ाइल', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'ऊर्ध्वाधर संरेखित मध्य', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'स्रोत देखें', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'विजुअल देखें', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
