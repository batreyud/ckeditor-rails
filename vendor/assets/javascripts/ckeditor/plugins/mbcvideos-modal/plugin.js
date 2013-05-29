CKEDITOR.plugins.add('mbcvideos-modal',
{
  init: function(editor)
  {
    editor.addCommand('insertModalMBCVideo',
    {
      exec : function(editor)
      {
        if ($(".modal-content").length){
          $('.media-selector').animate({'width': '1px'}, 1000, function(){
            $('.media-selector').html('Loading media...');
          });
        }else{
          $(".modal-content").append("<div class='media-selector' style='width:0px;'>Loading media...</div>")
        }
        $('.media-selector').animate({'width': '200px'}, 1000);
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