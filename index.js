window.onload = function() {
    let Inline = Quill.import('blots/inline');

    class BoldBlot extends Inline {}
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

    $("#editor-container").on("click", "t-summary", function() {
        console.log("%cWorks!", "color: blue; font-size:15px;");
    });

    quill.keyboard.addBinding({
        key: ' ',
        format: ['summary'],
        handler: function(range, context) {
            var prevchar = context.prefix[context.prefix.length - 1];
            if (prevchar == " ") {
                quill.format('summary', false);
            } else {
                return true;
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
        quill.format('summary', true);
        quill.focus();
    });

    $('#delta-button').click(function() {
        console.log(quill.getContents());
    });

}