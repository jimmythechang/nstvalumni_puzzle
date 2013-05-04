
function Word(wordString, x, y, letterSeed) {
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

        var character = wordString.charAt(i);
        var letterId = character + "" + (letterSeed + i);

        var letter = new Letter(wordString.charAt(i), xOffset, this.y, letterId);

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

    this.clickedInBounds = clickedInBounds;
    function clickedInBounds(mouseX, mouseY) {
            var leftBound = this.x;
            var rightBound = this.x + this.width;
            var upperBound = this.y;
            var lowerBound = this.y + this.height;

            return (mouseX > leftBound &&
                    mouseX <= rightBound &&
                    mouseY > upperBound &&
                    mouseY <= lowerBound);
    }

    this.getClickedLetter = getClickedLetter;
    function getClickedLetter(mouseX, mouseY) {

        for (var i in this.letters) {
            var letter = this.letters[i];
            if (letter.clickedInBounds(mouseX, mouseY)) {
                return letter;
            }
        }

       return "Nuffin";
    }
}
