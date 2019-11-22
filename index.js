window.onload = function(){
let Inline = Quill.import('blots/inline'); 

class BoldBlot extends Inline {}
    BoldBlot.blotName = 'bold';
    BoldBlot.tagName = 'strong';


class ItalicBlot extends Inline {}
    ItalicBlot.blotName = 'italic';
    ItalicBlot.tagName = 'em';


class HighlightBlot extends Inline 
{
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

$( "#editor-container" ).click(function() 
{
    quill.focus();
    var myrange = quill.getSelection();
    var clickformat = quill.getContents(myrange.index,myrange.index);
    var keyNames;
    try
{
    keyNames = Object.keys(clickformat.ops[0].attributes);
}
    catch{
    return true;
}   
    if(keyNames[0] == "summary")
{
    console.log("%cWorks!", "color: blue; font-size:15px;");
}   else
{
    return true;
};
});

quill.keyboard.addBinding
({
    key: ' ',
    format:['summary'],
    handler: function(range, context) {
    var text = this.quill.getText(range.index-1,range.index-1);
    if (text.charCodeAt(0) == 32){
    quill.format('summary',false);        
}
    return true;
}
});

$('#bold-button').click(function() {
    quill.format('bold', true);  
    quill.focus(); 
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