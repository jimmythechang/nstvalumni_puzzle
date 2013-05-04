
function Word(wordString, x, y) {
    this.x = x;
    this.y = y;

    this.width = 0;
    this.height = 40;

    this.letters = [];

    this.changeable = true;

    this.previousWord = null;
    this.nextWord = null;

    for (var i = 0; i < wordString.length; i++) {
        var xOffset = this.x + i*Letter.width;
        var letter = new Letter(wordString.charAt(i), xOffset, this.y);

        this.width += Letter.width;

        this.letters.push(letter);
    }

    this.draw = draw;
    function draw() {
        // For debugging purposes.
        var ctx = window.globalManager.ctx;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        this.drawLetters();
        
        if (this.changeable) {
        }
    }

    this.drawLetters = drawLetters;
    function drawLetters() {
        for (var i in this.letters) {
            this.letters[i].draw();
        }
    }

    this.setPreviousWord = setPreviousWord;
    function setPreviousWord(word) {
        this.previousWord = word;
    }

    this.setNextWord = setNextWord;
    function setNextWord(word) {
        this.nextWord = word;
    }

    this.getClickedLetter = getClickedLetter;
    function getClickedLetter(mouseX, mouseY) {

        for (var i in this.letters) {
            var letter = this.letters[i];

            var leftBound = letter.x;
            var rightBound = letter.x + Letter.width;
            var upperBound = letter.y;
            var lowerBound = letter.y + Letter.height;

            if (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound) {
                return letter;
            }
        }

       return "Nuffin";
    }
}
