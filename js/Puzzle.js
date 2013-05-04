var requireArr = ["jquery", "GlobalManager", "MouseHandler", "DrawManager", "Word", "Letter", "Arrow"];

require(requireArr, function($) {
    $(document).ready( function() {
        var gm = new GlobalManager();
        gm.init();

        var word = new Word("MANIFEST", 100, 200);
        gm.drawManager.registerWord(word);

        var word2 = new Word("LEVITY", 400, 200);
        gm.drawManager.registerWord(word2);

        var word3 = new Word("INSANITY", 400, 200);

        var word4 = new Word("DESTINY", 400, 200);

        // Link the words together.

        word2.setNextWord(word3);
        word2.setPreviousWord(word4);

        word3.setNextWord(word4);
        word3.setPreviousWord(word2);

        word4.setNextWord(word2);
        word4.setPreviousWord(word3);

        window.setInterval(function() { gm.gameLoop(); }, 1000 / 30 );
    })
});