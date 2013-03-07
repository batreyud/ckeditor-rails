/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

  config.toolbar_MBC = [
    { name: 'clipboard', items : [ 'Print','-','Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'insert', items : [ 'Table','HorizontalRule','PageBreak', '-', 'Link','Anchor', '-', 'SpecialChar'] },
    { name: 'styles', items : [ 'Styles','Format','Font','FontSize','TextColor','BGColor' ] }
  ];

  config.toolbar = 'MBC';

};