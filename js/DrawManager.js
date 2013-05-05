/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked something.
 */

function DrawManager() {
    this.words = [];
    this.clickedWord = null;

    this.upArrow = new Arrow(475, 150, true);
    this.downArrow = new Arrow(475, 300, false);

    this.draw = draw;
    function draw() {
        this.clearScreen();
        this.drawText();
        this.drawWords();

        this.drawArrows();
    }

    this.clearScreen = clearScreen;
    function clearScreen() {
        var ctx = window.globalManager.ctx;
        ctx.clearRect(0, 0, 800, 600);
    }

    this.registerWord = registerWord;
    function registerWord(word) {
        this.words.push(word);
    }

    this.drawText = drawText;
    function drawText() {
        var ctx = window.globalManager.ctx;
        ctx.font = '24pt Oswald';
        ctx.fillStyle = "#ffffff";
        ctx.fillText("so what brings you out west", 100, 100);
    }


    this.drawWords = drawWords;
    function drawWords() {
        for (var i in this.words) {
            this.words[i].draw();
        }
    }

    this.determinesWordIsInRange = determinesWordIsInRange;
    function determinesWordIsInRange(mouseX, mouseY) {
        for (var i in this.words) {
            var word = this.words[i];
            if (word.clickedInBounds(mouseX, mouseY)) {
                this.clickedWord = word;
                return true;
            }
        }

        return false;
    }

    this.handleArrowClicks = handleArrowClicks;
    function handleArrowClicks(mouseX, mouseY) {
        var word = null;

        if (this.upArrow.clickedInBounds(mouseX, mouseY)) {
            word = this.words[1];
            word.moveTo(-100);

            var nextWord = word.nextWord;
            nextWord.setY(word.y + 100);
            nextWord.moveTo(-100);

            this.registerWord(nextWord);

        }
        else if (this.downArrow.clickedInBounds(mouseX, mouseY)) {
            word = this.words[1];
            word.moveTo(100);

            var previousWord = word.previousWord;
            previousWord.setY(word.y - 100);
            previousWord.moveTo(100);

            this.registerWord(previousWord);
        }
    }

    this.drawArrows = drawArrows;
    function drawArrows() {
        this.upArrow.draw();
        this.downArrow.draw();
    }

    this.wordsAreMoving = wordsAreMoving;
    function wordsAreMoving() {
        for (var i in this.words) {
            if (this.words[i].isMoving) {
                return true;
            }
        }

        return false;
    }
    
}


