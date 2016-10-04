(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/et-EE', ['jquery'], factory);
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
  Locale.addCulture('et-EE', {
    //layout/language
    language: 'et',
    englishName: 'Estonian (Estonia)',
    nativeName: 'eesti (Eesti)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '.', //Infered
                   'timeSeparator': ':',
                   'short': 'dd.MM.yyyy', //use four digit year
                   'medium': 'dd.MM.yyyy',
                   'long': 'd. MMMM yyyy',
                   'full': 'EEEE, d. MMMM y',
                   'month': 'd. MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'H:mm:ss',
                   'datetime': 'dd.MM.yyyy H:mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'],
         abbreviated: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
         narrow: ['P', 'E', 'T', 'K', 'N', 'R', 'L']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'],
        abbreviated: ['jaan', 'veebr', 'märts', 'apr', 'mai', 'juuni', 'juuli', 'au', 'sept','okt', 'nov', 'dets']},
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'H:mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['e.k.', 'p.k.']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'kr', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '#,##0.00 ¤',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: ' '
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Autoriõigus &copy; {0} Infor. Kõik õigused on kaitstud. Kõik siin esitatud sõnalised ja kujundusmärgid on ettevõtte Infor ja/või selle sidus- ja tütarettevõtete kaubamärgid ja/või registreeritud kaubamärgid. Kõik õigused on kaitstud. Kõik teised siin loetletud kaubamärgid kuuluvad nende vastavatele omanikele.'},
      'Actions': {id: 'Actions', value: 'Toimingud', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Lisa', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Loo täpsem filter', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Hoiatus', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Kõik tulemused:', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Allajoondus', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Horisontaalne keskjoondus', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Merevaikkollane', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Ametüstpunane', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Rakenda', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Manusta', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Taevasinine', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Vahemikus', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Plokktsitaat', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Paks kiri', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Järjehoidjaga märgitud', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Märgi see järjehoidjaga', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Jäljerida', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Täpploend', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kaamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Loobu', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Suurtähelukk sees', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Ostukorv', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Keskele', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Märke alles {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Märkide maksimumarv: ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. Valiku muutmiseks kasutage nooleklahve.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Märkeruut', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Märgitud', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Tühjenda', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Kell', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Sulge', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Kopeeri', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Ahenda', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Ahenda rakendusesalv', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Veerud', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Koosta', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Valmis', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Kinnita', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Sisaldab', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Lõika', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Kuupäev', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Kustuta', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Jaota horisontaalselt', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Dokument', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Puuri alla', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Puuri üles', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Rippmenüü', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Ei sisalda', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Ei võrdu', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Alla', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Laadi alla', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Paljunda', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Kas valitud või valimata', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Sisestage kommentaarid siia ...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Tõrge', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'E-posti aadress ei kehti.', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Smaragdroheline', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Laienda', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Laienda rakendusesalv', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Laienda / Ahenda', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Ekspordi arvutustabelina', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Muuda', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Võrdub', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Välju täisvaatest', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Ekspordi', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'Failide üleslaadimine. Sirvides otsimiseks vajutage klahvi Enter.', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filter', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Esimene lehekülg', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Kaust', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Täisvaade', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Liigu edasi', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Liigu tagasi', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Liigu alla', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Liigu üles', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafiithall', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Suurem-võrdne', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Suurem kui', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Ruudustik', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Tunnid', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Pealkiri kolm', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Pealkiri neli', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Suurim', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Avaleht', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'HTML-vaade', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Impordi', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Teave', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Lisa ankur', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Lisa pilt', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Kaldkiri', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Vigane kuupäev', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Inventuur', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'On tühi', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Ei ole tühi', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Rööpjoondus keskele', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Rööpjoondus vasakule', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Rööpjoondus paremale', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Märksõna', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Käivita', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Viimane lehekülg', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Vasakule', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'Vasakjoondus', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'Teksti vasakjoondus', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Väiksem-võrdne', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Väiksem kui', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Link', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Laadi', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Laadimine', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Lukustatud', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Otsimine', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Väikseim', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Post', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Kaardimärk', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Ekraani', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Mediaan', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Keskmine', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menüü', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Jaga Ming.le-ga', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Minutid', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Ikooni', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Miinus', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Rohkem ...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Rohkem toiminguid', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: ', Muudetud', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: '. Mitmikvalik: ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Uus dokument', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Järgmine', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Järgmine lehekülg', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Järgmine kuu', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Tulemusi ei ole', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Märkmed', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Valimata', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Nummerdatud loend', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Ava / Tagasi / Sulge', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Ava / Sulge', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Järjestatud loend', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'lehekülg ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Lehekülg {0}/{1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Asute praegu leheküljel ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Kleebi', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Parool peab:</strong> <br>olema vähemalt kümne märgi pikkune;<br>sisaldama vähemalt ühte suurtähte;<br>sisaldama vähemalt ühte väiketähte;<br><strong>sisaldama vähemalt ühte erimärki;</strong><br>mitte sisaldama teie kasutajanime;<br>mitte olema üks varem kasutatud paroolidest.<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Parool peab olema sama', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Tipp', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Isikupärasta veerud', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Periood', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Kuupäeva valimiseks vajutage allanoolt.', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Kontekstimenüü avamiseks vajutage Shift+F10.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Eelmine', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Eelmine kuu', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Eelmine lehekülg', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Prindi', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Vahemik', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} kirjet leheküljel', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Tee uuesti', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Värskenda', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Nõutav', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Lähtesta', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Tulemused', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Paremale', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Paremjoondus', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Teksti paremjoondus', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Rollid', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Rea kõrgus', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Rubiinpunane', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Salvesta', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Salvesta praegune vaade', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Salvestatud vaated', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Otsi', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Otsi kausta', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Otsi loendit', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Valitud', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Saada', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Sea kellaaeg', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Sätted', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Lühike', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Paekivihall', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Pide:', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Maksimumvahemiku pide:', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Miinimumvahemiku pide:', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Liigu põhisisu juurde', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Läbikriipsutus', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Sordi tõusvalt', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Sordi laskuvalt', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Sordi alla', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Sordi üles', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'Star Filled', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'Star Half', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'Star Outlined', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'Alaindeks', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Ülaindeks', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Nael', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Kõrge', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Taimer', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Täna', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Lülita paksu kirja', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Lülita pealkirja 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Lülita pealkirja 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Lülita kaldkirja', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Lülita allakriipsutust', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Tööriistariba', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Ülesjoondus', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Summa', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Ahenda puu', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Laienda puu', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Türkiissinine', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Üles', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Laadi üles', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Puuduv kuupäev', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Allakriipsutus', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Ennista', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Lukustamata', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Järjestamata loend', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'See sisu ei ole kättesaadav, sest selle puhul on kasutusel funktsioonid, mida teie praegune brauseriversioon ei toeta.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'URL', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. Valimiseks kasutage nooleklahve.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. Otsimiseks kasutage sisestusklahvi või allanoolt.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Kasutaja', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Kasutaja profiil', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Vertikaalne keskjoondus', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Kuva lähtetekst', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Kuva küljendus', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
