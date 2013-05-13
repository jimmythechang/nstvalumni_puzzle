/**
 * A class for handling mouse input.
 */

function MouseHandler() {
    this.x = 0;
    this.y = 0;

    var canvasOffset = $('#canvas').offset();

    this.canvasXOffset = 0;
    this.canvasYOffset = 0;

    this.init = init;
    function init() {
        this._trackMousePosition();
        this._bindClick();
    }

    this._trackMousePosition = _trackMousePosition;
    function _trackMousePosition() {
        var thisMouseHandler = this;

        $('#canvas').mousemove(function (e) {
           thisMouseHandler.x = e.pageX - this.offsetLeft;
           thisMouseHandler.y = e.pageY - this.offsetTop;
        });
    }

    this._displayMousePosition = _displayMousePosition;
    function _displayMousePosition() {
        var xPos = "x: " + this.x;
        var yPos = "y: " + this.y;
        $('#positionDebug').text(xPos + " " + yPos);
    }

    /**
     * Determine if the player has clicked on a Letter or an Arrow. Makes a call
     * to the DrawManager for that information.
     */

    this._bindClick = _bindClick;
    function _bindClick() {
        var thisMouseHandler = this;

        $('#canvas').click( function() {
            var drawManager = window.globalManager.drawManager;
            
            var x = thisMouseHandler.x;
            var y = thisMouseHandler.y

            // Check to see if we're currently moving
            // any Words; if so, ignore Arrow clicks.
            if (drawManager.wordsAreMoving()) {
                return;
            }

            // The DrawManager's Words array will have more than two
            // Words if and *only* if we just finished moving some Words.
            // If this is the case, remove the Word at index 1, as it
            // is no longer visible.

            if (drawManager.words.length > 2) {
                drawManager.words.splice(1, 1);
            }



            // If a the click is in the boundary of a word...
            if (drawManager.determinesWordIsInRange(x, y)) {
                // ...determine which letter was clicked.
                var letter = drawManager.clickedWord.getClickedLetter(x, y);
                letter.toggle();

                var codeHandler = window.globalManager.codeHandler;
                codeHandler.registerLetter(letter);

                return;
            }

            // Otherwise, figure out if an arrow was clicked.
            drawManager.handleArrowClicks(x, y);
            
        });
    }

}

