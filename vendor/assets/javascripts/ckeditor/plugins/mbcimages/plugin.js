CKEDITOR.plugins.add('mbcimages',
{
  init: function(editor)
  {

    var $mediaBrowser;
    $mediaBrowser = $("<div><div class='loading-dialog' style='width:inherit; height:inherit'></div></div>").dialog({
      title: 'Insert Image',
      modal: true,
      autoOpen: false,
      height: 360,
      width: 600
     });

    editor.addCommand('insertMBCImage',
    {
      exec : function(editor)
      {
        $mediaBrowser.dialog("open");
        $mediaBrowser.load("/documents/get_images/?ckinstance=" + CKEDITOR.currentInstance.name + '' );
      }
    });

    editor.ui.addButton('MBCImage',
    {
      label   : 'Insert My Big Campus Image',
      command : 'insertMBCImage',
      icon    : 'image'
    });

  }
});