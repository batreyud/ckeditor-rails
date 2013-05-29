CKEDITOR.plugins.add('mbclibrary',
{
  init: function(editor)
  {

    var $mediaBrowser;
    $mediaBrowser = $("<div><div class='loading-dialog' style='width:inherit; height:inherit'></div></div>").dialog({
      title: 'MBC Library Videos',
      modal: true,
      autoOpen: false,
      height: 510,
      width: 676
     });

    editor.addCommand('insertMBCLibrary',
    {
      exec : function(editor)
      {
        $mediaBrowser.dialog("open");
        $mediaBrowser.load("/items/video_search/?library_videos=" + CKEDITOR.currentInstance.name + '');
      }
    });

    editor.ui.addButton('MBCLibrary',
    {
      label   : 'Insert My Big Campus Library Video',
      command : 'insertMBCLibrary',
      icon    : '/assets/application/ckeditor-youtube-icon.png'
    });

  }
});
CKEDITOR.plugins.add('mbclibrary-modal',
{
  init: function(editor)
  {

    editor.addCommand('insertModalMBCLibrary',
    {
      exec : function(editor)
      {
        $(".modal-content").append("<div class='media-selector' style='width:5px;'>Loading media...</div>")
        $('.media-selector').animate({'width': '250px'}, 1000);
        $(".media-selector").load("/items/video_search/?library_videos=" + CKEDITOR.currentInstance.name + '');
      }
    });

    editor.ui.addButton('ModalMBCLibrary',
    {
      label   : 'Insert My Big Campus Library Video',
      command : 'insertModalMBCLibrary',
      icon    : '/assets/application/ckeditor-youtube-icon.png'
    });

  }
});