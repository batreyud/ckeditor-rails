CKEDITOR.editorConfig = function( config )
{
  config.resize_enabled = false;
  config.extraPlugins ='mbclibrary,mbcvideos,mbcimages,video,menubutton,scayt';

  // config.extraPlugins ='devtools';

  config.toolbar_MBC = [
    // NOTE: The jQuery adapter breaks CKEditor's default Save button functionality; the previously-saved editor contents are sent to the server and not the updated contents of the editor.
    // As of CKEditor 3.6.2 this is still broken.
    { name: 'clipboard', items : [ 'Find', '-','Cut','Copy','PasteText','PasteFromWord','-','Undo','Redo'] },
    { name: 'pageitems', items : [ 'Table','HorizontalRule','PageBreak' ] },
    { name: 'insert', items : ['Blockquote','SpecialChar', 'NumberedList','BulletedList' ] },
    { name: 'links', items: ['Link', 'Anchor', 'Outdent','Indent' ] },
    { name: 'paragraph', items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'styles', items : [ 'Styles','Format' ] },
    { name: 'fonts', items: [ 'Font','FontSize' ] },
    { name: 'colors', items : [ 'TextColor','BGColor'] },
    { name: 'mbcplugins', items : [ 'MBCLibrary', 'MBCVideo',  'MBCImage'] }
  ];

  config.toolbar = 'MBC';
  config.height = '400px';
  config.removePlugins = 'elementspath';
  config.scayt_autoStartup = true;
};

CKEDITOR.on( 'dialogDefinition', function( ev ) {
   var dialogName = ev.data.name;
   var dialogDefinition = ev.data.definition;
   if ( dialogName == 'image' ) {
         dialogDefinition.removeContents( 'Link' );
         dialogDefinition.removeContents( 'advanced' );
         // Get a reference to the 'Link Info' tab.
         var infoTab = dialogDefinition.getContents( 'info' );
         // Remove unnecessary widgets from the 'Link Info' tab.
         infoTab.remove( 'txtUrl');
         infoTab.remove( 'txtAlt');
   }
   if ( dialogName == 'flash' ) {
         dialogDefinition.removeContents( 'advanced' );
         // Get a reference to the 'Link Info' tab.
         var infoTab = dialogDefinition.getContents( 'info' );
         // Remove unnecessary widgets from the 'Link Info' tab.
         infoTab.remove( 'src');
         infoTab.remove( 'preview');
         infoTab.remove( 'hSpace');
         infoTab.remove( 'vSpace');

   }
   if ( dialogName == 'iframe' ) {
         dialogDefinition.removeContents( 'advanced' );
         // Get a reference to the 'Link Info' tab.
         var infoTab = dialogDefinition.getContents( 'info' );
         // Remove unnecessary widgets from the 'Link Info' tab.
         infoTab.remove( 'title');
         infoTab.remove( 'longdesc');
         infoTab.remove( 'name');
         infoTab.remove( 'scrolling');
         infoTab.remove( 'src');
         infoTab.remove( 'undefined');
         infoTab.remove( 'frameborder');
   }
   if ( dialogName == 'video' ) {
         // Get a reference to the 'Link Info' tab.
         var infoTab = dialogDefinition.getContents( 'info' );
         // Remove unnecessary widgets from the 'Link Info' tab.
         infoTab.remove( 'src0');
         infoTab.remove( 'src1');
         infoTab.remove( 'type0');
         infoTab.remove( 'type1');
         infoTab.remove( 'poster');
         infoTab.remove( 'id');

   }
});