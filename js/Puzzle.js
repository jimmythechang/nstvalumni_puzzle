var requireArr = ["jquery", "GlobalManager", "MouseHandler", "CodeHandler", "DrawManager", "Word", "Letter", "Arrow", "MapHandler"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();

        var word = new Word("MANIFEST", 75, 200, 100);
        gm.drawManager.registerWord(word);

        var word2 = new Word("DESTINY", 425, 200, 400);
        gm.drawManager.registerWord(word2);

        var word3 = new Word("INSANITY", 425, 200, 300);
        var word4 = new Word("LEVITY", 425, 200, 200);
        var word5 = new Word("SURGERY", 425, 200, 500);
        var word6 = new Word("TYRANNY", 425, 200, 600);

        // Link the words together.

        word2.setNextWord(word3);
        word2.setPreviousWord(word6);

        word3.setNextWord(word4);
        word3.setPreviousWord(word2);

        word4.setNextWord(word5);
        word4.setPreviousWord(word3);

        word5.setNextWord(word6);
        word5.setPreviousWord(word4);

        word6.setNextWord(word2);
        word6.setPreviousWord(word5);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30 );
    })
});