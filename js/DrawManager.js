/**
 * Responsible for managing the location of various items in the canvas, and drawing
 * them when appropriate. The MouseHandler talks to the DrawManager when it needs
 * to figure out if it's clicked something.
 */

function DrawManager() {
    this.words = [];
    this.clickedWord = null;

    this.upArrow = new Arrow(200, 100, true);
    this.downArrow = new Arrow(200, 300, false);

    this.draw = draw;
    function draw() {
        this.clearScreen();
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
            if (this.clickInBounds(mouseX, mouseY, word.x, word.y, word.width, word.height)) {
                this.clickedWord = word;
                return true;
            }
        }

        return false;
    }

    this.handleArrowClicks = handleArrowClicks;
    function handleArrowClicks(mouseX, mouseY) {
        var word = null;

        if (this.clickInBounds(mouseX, mouseY, this.upArrow.x, this.upArrow.y - Arrow.height, Arrow.width, this.upArrow.y)) {
            word = this.words.pop();
            this.registerWord(word.nextWord);
        }
        else if (this.clickInBounds(mouseX, mouseY, this.downArrow.x, this.downArrow.y, Arrow.width, Arrow.height)) {
            word = this.words.pop();
            this.registerWord(word.previousWord);
        }
    }

    this.clickInBounds = clickInBounds;
    function clickInBounds(mouseX, mouseY, itemX, itemY, itemWidth, itemHeight) {
            var leftBound = itemX;
            var rightBound = itemX + itemWidth;
            var upperBound = itemY;
            var lowerBound = itemY + itemHeight;

            return (mouseX > leftBound &&
                    mouseX <= rightBound &&
                    mouseY > upperBound &&
                    mouseY <= lowerBound);
    }

    this.drawArrows = drawArrows;
    function drawArrows() {
        this.upArrow.draw();
        this.downArrow.draw();
    }
    
}


