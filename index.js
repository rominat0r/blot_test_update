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
var x;
document.addEventListener("keydown", function(event) {
   x = event.which;
})




var quill = new Quill('#editor-container');

  
  quill.keyboard.addBinding({
    key: ' ',
    format:['summary'],
    handler: function(range, context) {
      if(x == 32){
        quill.format('summary',false);  
      }
      console.log( quill.getContents());
      return true;
    }
  });


quill.focus();

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
      
});
$('#delta-button').click(function() {
    alert("Open console for delta");
    console.log( quill.getContents());
});

}