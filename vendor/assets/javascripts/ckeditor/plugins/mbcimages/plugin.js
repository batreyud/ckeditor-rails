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
CKEDITOR.plugins.add('mbcimages-modal',
{
  init: function(editor)
  {

    editor.addCommand('insertModalMBCImage',
    {
      exec : function(editor)
      {
        $(".modal-content").append("<div class='media-selector' style='width:5px;'>Loading media...</div>")
        $('.media-selector').animate({'width': '250px'}, 1000);
        $(".media-selector").load("/documents/get_images/?ckinstance=" + CKEDITOR.currentInstance.name + '' );
      }
    });

    editor.ui.addButton('ModalMBCImage',
    {
      label   : 'Insert My Big Campus Image',
      command : 'insertModalMBCImage',
      icon    : 'image'
    });

  }
});