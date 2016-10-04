(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/id-ID', ['jquery'], factory);
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
  Locale.addCulture('id-ID', {
    //layout/language
    language: 'id',
    englishName: 'Indonesian (Indonesia)',
    nativeName: 'Bahasa Indonesia (Indonesia)',
    //layout/orientation/@characters
    direction: 'left-to-right',
    //ca-gregorian
    calendars: [{
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': '.',
                   'short': 'dd/MM/yyyy', //use four digit year
                   'medium': 'd MMM yyyy',
                   'long': 'd MMMM yyyy',
                   'full': 'EEEE, dd MMMM yyyy',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'HH:mm:ss',
                   'datetime': 'dd/MM/yyyy HH.mm'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
         wide: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
         abbreviated: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
         narrow: ['M', 'S', 'S', 'R', 'K', 'J', 'S']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'HH.mm',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['AM', 'PM']
    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: 'Rp', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤#,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '%',
      percentFormat: '#,##0 %',
      minusSign: '-',
      decimal: ',',
      group: '.'
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'Hak cipta &copy; {0} Infor. Hak cipta dilindungi udang-undang. Kata dan tanda desain yang diatur di sini merupakan merek dagang dan/atau merek dagang terdaftar dari Infor dan/atau afiliasi serta anak perusahaannya yang terkait. Hak cipta dilindungi undang-undang. Semua merek dagang yang tercantum di sini adalah properti pemilik masing-masing merek tersebut.'},
      'Actions': {id: 'Actions', value: 'Tindakan', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'Tambahkan', comment: 'Add'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'Buat Filter Lebih Lanjut', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'Peringatan', comment: 'Alert'},
      'AllResults': {id: 'AllResults', value: 'Semua Hasil Untuk', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'Rata Bawah', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'Rata Tengah Horizontal', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'Kuning', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'Kecubung', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'Terapkan', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'Lampirkan', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'Biru Langit', comment: 'Color in our color pallette'},
      'Between': {id: 'Between', value: 'Antara', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'Kutipan blok', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'Tebal', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'Ditandai', comment: 'Bookmark filled'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'Tandai ini', comment: 'Bookmark outlined'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'Breadcrumb', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'Bullet list', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'Kalender', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'Kamera', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'Batalkan', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'Caps Lock On', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'Cart', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'Tengah', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'Karakter tersisa {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'Jumlah karakter maksimal ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: 'Untuk mengubah pilihan, gunakan tombol panah.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'Kotak periksa', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'Diperiksa', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'Bersihkan', comment: 'Tooltip for a Clear Action'},
      'Clock': {id: 'Clock', value: 'Jam', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'Tutup', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'Salin', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'Ciutkan', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'Ciutkan App Tray', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'Kolom', comment: 'Columns tooltip'},
      'Compose': {id: 'Compose', value: 'Susun', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'Selesai', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'Konfirmasi', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'Tampung', comment: 'Contains in icons for filtering'},
      'Cut': {id: 'Cut', value: 'Kerat', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'Tanggal', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'Hapus', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'Distribusikan Horizontal', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'Dokumen', comment: 'Document tooltip'},
      'Drilldown': {id: 'Drilldown', value: 'Drill Turun', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'Drill Naik', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'Dropdown', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'Tidak Berisi', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'Tidak Sama Dengan', comment: 'Does Not Equal in icons for filtering'},
      'Down': {id: 'Down', value: 'Turun', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'Unduh', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'Duplikasi', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'Dipilih atau Tidak Dipilih', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EnterComments': {id: 'EnterComments', value: 'Masukkan komentar di sini...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'Kesalahan', comment: 'Title, Spoken Text describing fact an error has occured'},
      'EmailValidation': {id: 'EmailValidation', value: 'Alamat email tidak valid', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'Zamrud', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'Bentangkan', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'Bentangkan App Tray', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'Bentangkan / Ciutkan', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'Ekspor sebagai Lembar kerja', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'Edit', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'Sama dengan', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'Keluar dari Tampilan Penuh', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'Ekspor', comment: 'Export tooltip'},
      'FileUpload': {id: 'FileUpload', value: 'File Unggahan Tekan Enter untuk memilih file', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'Filter', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'Halaman Pertama', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'Folder', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'Tampilan Penuh', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'Maju', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'Kembali', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'Turun', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'Naik', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'Grafit', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'Lebih Besar Dari atau Sama Dengan', comment: 'Greater Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'Lebih Besar Dari', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'Grid', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'Jam', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'Heading Tiga', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'Heading Empat', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'Tertinggi', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'Beranda', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'Tampilan Html', comment: 'Html View tooltip'},
      'Import': {id: 'Import', value: 'Impor', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'Info', comment: 'Info tooltip'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'Sisipkan Jangkar', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'Sisipkan Gambar', comment: 'Insert Image in an editor'},
      'Italic': {id: 'Italic', value: 'Miring', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'Tanggal tidak valid', comment: 'validation message for wrong date format (short)'},
      'Inventory': {id: 'Inventory', value: 'Inventaris', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'Kosong', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'Tidak Kosong', comment: 'Is Not Empty in icons for filtering'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'Rata Tengah', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'Rata Kiri', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'Rata Kanan', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'Kata kunci', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'Jalankan', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'Halaman Terakhir', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'Kiri', comment: 'Left tooltip'},
      'LeftAlign': {id: 'LeftAlign', value: 'Perataan Kiri', comment: 'Left Align tooltip'},
      'LeftTextAlign': {id: 'LeftTextAlign', value: 'Perataan Teks Kiri', comment: 'Left Text Align tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'Kurang Dari atau Sama Dengan', comment: 'Less Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'Kurang Dari', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'Tautan', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'Muat', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'Memuat', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'Terkunci', comment: 'Locked tooltip'},
      'Lookup': {id: 'Lookup', value: 'Cari', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'Terendah', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'Surat', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'Pin Peta', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'Perbesar', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'Median', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'Sedang', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'Menu', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'Bagikan dengan Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'Menit', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'Perkecil', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'Kurang', comment: 'Minus tooltip'},
      'More': {id: 'More', value: 'Lebih banyak lagi...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'Lebih banyak lagi Tindakan', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: 'Diubah', comment: 'for modified form fields'},
      'MultiselectWith': {id: 'MultiselectWith', value: 'Pilih Ganda Dengan ', comment: 'the minutes portion of a time'},
      'NewDocument': {id: 'NewDocument', value: 'Dokumen Baru', comment: 'New Document tooltip'},
      'Next': {id: 'Next', value: 'Berikutnya', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'Halaman Berikutnya', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'Bulan Berikutnya', comment: 'the label for the button that moves calendar to next/prev'},
      'NoResults': {id: 'NoResults', value: 'Tidak Ada Hasil', comment: 'Search Results Text'},
      'Notes': {id: 'Notes', value: 'Catatan', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'Tidak Dipilih', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'Daftar Angka', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'Buka / Kembali / Tutup', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'Buka / Tutup', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'Daftar Urutan', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'halaman ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'Halaman {0} dari {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'Saat ini Anda berada di halaman ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'Tempel', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>Kata Sandi harus:</strong><br>Paling sedikit 10 karakter<br>Memiliki paling sedikit satu karakter huruf besar<br>Memiliki paling sedikit satu karakter huruf kecil<br><strong>Berisi tau karakter khusus</strong><br>Tidak berisi nama pengguna Anda<br>Bukan kata sandi yang digunakan sebelumnya<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'Kata Sandi harus cocok', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'Puncak', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'Personalisasi Kolom', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'Periode', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'Tekan Turun untuk memilih tanggal', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'Tekan Shift+F10 untuk membuka menu konteks.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'Sebelumnya', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'Bulan Sebelumnya', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'Halaman Sebelumnya', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'Cetak', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'Rentang', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} Rekaman per halaman', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'Lakukan lagi', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'Segarkan', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'Harus diisi', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'Reset', comment: 'Reset tooltip'},
      'Results': {id: 'Results', value: 'Hasil', comment: 'As in showing N Results in a List'},
      'Right': {id: 'Right', value: 'Kanan', comment: 'Right tooltip'},
      'RightAlign': {id: 'RightAlign', value: 'Rata Kanan', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'Teks Rata Kanan', comment: 'Right Align Text tooltip'},
      'Roles': {id: 'Roles', value: 'Peran', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'Tinggi Baris', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'Mirah', comment: 'Color in our color pallette'},
      'Save': {id: 'Save', value: 'Simpan', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'Simpan Tampilan Saat ini', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'Tampilan Tersimpan', comment: 'Label for a list of Views'},
      'Search': {id: 'Search', value: 'Cari', comment: 'Search tooltip'},
      'SearchFolder': {id: 'SearchFolder', value: 'Cari Folder', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'Daftar Pencarian', comment: 'Search List tooltip'},
      'Selected': {id: 'Selected', value: 'Dipilih', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'Kirim', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'Atur Waktu', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'Pengaturan', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'Pendek', comment: 'Describes a Shorted Row Height in a grid/list'},
      'Slate': {id: 'Slate', value: 'Biru Abu-abu', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'Penanganan untuk', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'Rentang Maksimal Penanganan untuk', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'Rentang Minimal Penanganan untuk', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'Lompat ke Konten Utama', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'Coret Tengah', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'Sortir A ke Z', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'Sortir Z ke A', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'Sortir Turun', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'Sortir Naik', comment: 'Sort Up tooltip'},
      'StarFilled': {id: 'StarFilled', value: 'Star Filled', comment: 'Star Filled tooltip'},
      'StarHalf': {id: 'StarHalf', value: 'Star Half', comment: 'Star Half tooltip'},
      'StarOutlined': {id: 'StarOutlined', value: 'Star Outlined', comment: 'Star Outlined tooltip'},
      'Subscript': {id: 'Subscript', value: 'Subskrip', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'Superskrip', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tack': {id: 'Tack', value: 'Paku', comment: 'Tack tooltip'},
      'Tall': {id: 'Tall', value: 'Tinggi', comment: 'Describes a Taller Row Height in a grid/list'},
      'Timer': {id: 'Timer', value: 'Timer', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'Hari Ini', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'Pilih Teks Tebal', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'Pilih Heading 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'Pilih Heading 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'Pilih Teks Miring', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'Pilih Teks Garis Bawah', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'Toolbar', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'Rata Atas', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'Total', comment: 'Mathematic total of a calculation'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'Ciutkan Pohon', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'Bentangkan Pohon', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'Biru Kehijauan', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'Naik', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'Unggah', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'Tanggal Tidak Tersedia', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'Garis Bawah', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'Batal Lakukan', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'Buka Kunci', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'Daftar Tidak Berurutan', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'Konten ini tidak tersedia karena menggunakan fitur yang tidak didukung dalam versi peramban Anda saat ini.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: 'Gunakan tombol panah untuk memilih.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: 'Gunakan enter atau panah bawah untuk mencari.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'Pengguna', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'Profil Pengguna', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'Rata Tengah Vertikal', comment: 'Vertical Middle Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'Lihat Sumber', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'Lihat Visual', comment: 'Toggle the visual view in the editor'}
    }
  });
}));
