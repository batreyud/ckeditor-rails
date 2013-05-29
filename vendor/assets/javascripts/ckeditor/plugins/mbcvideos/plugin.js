CKEDITOR.plugins.add('mbcvideos',
{
  init: function(editor)
  {

    var $mediaBrowser;
    $mediaBrowser = $("<div><div class='loading-dialog' style='width:inherit; height:inherit'></div></div>").dialog({
      title: 'Your Stuff Videos',
      modal: true,
      autoOpen: false,
      height: 510,
      width: 550
     });

    editor.addCommand('insertMBCVideo',
    {
      exec : function(editor)
      {
        $mediaBrowser.dialog("open");
        $mediaBrowser.load("/items/video_search/?my_videos=" + CKEDITOR.currentInstance.name + '');
      }
    });

    editor.ui.addButton('MBCVideo',
    {
      label   : 'Insert Video from Drive',
      command : 'insertMBCVideo',
      icon    : '/assets/application/ckeditor-film-icon.png'
    });

  }
});
CKEDITOR.plugins.add('mbcvideos-modal',
{
  init: function(editor)
  {

    editor.addCommand('insertModalMBCVideo',
    {
      exec : function(editor)
      {
        $(".modal-content").append("<div class='media-selector' style='width:5px;'>Loading media...</div>")
        $('.media-selector').animate({'width': '250px'}, 1000);
        $(".media-selector").load("/items/video_search/?my_videos=" + CKEDITOR.currentInstance.name + '');
      }
    });

    editor.ui.addButton('ModalMBCVideo',
    {
      label   : 'Insert Video from Drive',
      command : 'insertModalMBCVideo',
      icon    : '/assets/application/ckeditor-film-icon.png'
    });

  }
});