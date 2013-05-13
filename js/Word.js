
function Word(wordString, x, y, letterSeed) {
    this.x = x;
    this.y = y;

    this.width = 0;
    this.height = Letter.height;

    this.letters = [];

    this.isMoving = false;
    this.distance = 0;

    this.previousWord = null;
    this.nextWord = null;

    for (var i = 0; i < wordString.length; i++) {
        var xOffset = this.x + i*Letter.width;

        var character = wordString.charAt(i);
        var letterId = character + "" + (letterSeed + i);

        var letter = new Letter(wordString.charAt(i), xOffset, this.y, letterId);

        if (letter.character == "I") {
            letter.kerning = 6;
        }


        this.width += Letter.width;

        this.letters.push(letter);
    }

    this.draw = draw;
    function draw() {
        // For debugging purposes.
        var ctx = window.globalManager.ctx;
        //ctx.strokeRect(this.x, this.y, this.width, this.height);

        if (this.isMoving) {
            this.move();
        }

        this.drawLetters();
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

       return null;
    }

    this.unsetAllLetters = unsetAllLetters;
    function unsetAllLetters() {
        var codeHandler = window.globalManager.codeHandler;

        for (var i in this.letters) {
            var letter = this.letters[i];
            if (letter.isClicked) {
                letter.isClicked = false;
                codeHandler.registerLetter(letter);
            }
        }
    }

    this.setY = setY;
    function setY(y) {
        this.y = y;
        for (var i in this.letters) {
            this.letters[i].y = y;
        }
    }

    // Indicates a relative distance in the y-direction for this Word to move to.
    this.moveTo = moveTo;
    function moveTo(y) {
        this.isMoving = true;
        this.distance = Math.abs(y);
        if (y < 0) {
            this.delta = -16;
        }
        else {
            this.delta = 16;
        }
    }

    this.move = move;
    function move() {

        if (this.distance > 0) {
            if (this.distance < Math.abs(this.delta)) {
                if (this.delta < 0) {
                    this.delta = -(this.distance);
                }
                else {
                    this.delta = this.distance;
                }
            }

            this.distance -= Math.abs(this.delta);
            this.setY(this.y + this.delta);
        }
        else {
            this.distance = 0;
            this.isMoving = false;
        }
     }

}
