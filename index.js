window.onload = function(){
    let Inline = Quill.import('blots/inline');
    
class BoldBlot extends Inline { }
BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';

class ItalicBlot extends Inline {}
ItalicBlot.blotName = 'italic';
ItalicBlot.tagName = 'em';

class HighlightBlot extends Inline {
    static create() {
      let node = super.create();
      node.setAttribute('style', 'background-color:blue;');
      return node;
    }
  
    static formats(node) {
      return node.getAttribute('style');
    }
  }
  HighlightBlot.blotName = 'summary';
  HighlightBlot.tagName = 't-summary';

Quill.register(BoldBlot);
Quill.register(ItalicBlot);
Quill.register(HighlightBlot);
var quill = new Quill('#editor-container');
quill.focus();

/*
var Delta = Quill.import('delta');
var change = new Delta();
  quill.on('text-change', function (delta) {
      change = change.compose(delta);
      console.log('Saving changes', quill.getContents());
  });
*/
$('#bold-button').click(function() {
    quill.focus();
  quill.format('bold', true);
 

});
$('#italic-button').click(function() {
    quill.focus();
    quill.format('italic', true);
});

$('#highlight-button').click(function() {

        quill.format('summary',true);   
        quill.focus();
        quill.keyboard.addBinding({
          key: ' ',
          shortKey: false,
          format: ['summary'],
          handler: function(range) {
            
              quill.keyboard.addBinding({
              key: ' ',
              shortKey: false,
              format: ['summary'],
              handler: function(range) {
                quill.format('summary',false);
                
              }
              });
              return true;
        }
        });
        /*
        quill.on('text-change', function() {
              
          var length = quill.getLength();
          var text = quill.getText(0, length);
          var lastChar = text[text.length -2];
          var beforelastChar = text[text.length -3];
          if(lastChar == " " && beforelastChar == " "){
              
          quill.format('summary',false);
          
      }
      });
      */
     
});
$('#delta-button').click(function() {
    alert("Open console for delta");
    console.log( quill.getContents());
});

}