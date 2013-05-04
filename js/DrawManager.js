/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked something.
 */

function DrawManager() {
    this.words = [];
    this.clickedWord = null;

    this.upArrow = new Arrow(400, 100, true);
    this.downArrow = new Arrow(400, 300, false);

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
        ctx.font = '24pt Arial';
        ctx.fillStyle = "#000000";
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
            word = this.words.pop();
            this.registerWord(word.nextWord);
        }
        else if (this.downArrow.clickedInBounds(mouseX, mouseY)) {
            word = this.words.pop();
            this.registerWord(word.previousWord);
        }
    }

    this.drawArrows = drawArrows;
    function drawArrows() {
        this.upArrow.draw();
        this.downArrow.draw();
    }
    
}


