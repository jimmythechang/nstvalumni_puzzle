function Arrow(x, y, up) {
    this.x = x;
    this.y = y;

    this.up = up;

    // The word to which this arrow is associated.
    this.word = null;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;

        var invert = 1;
        if (!up) {
            invert = -1;
        }

        ctx.beginPath();
        ctx.lineTo(this.x + Arrow.width, this.y);
        ctx.lineTo(this.x + (Arrow.width / 2), this.y - Arrow.height * invert);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    }

    this.clickedInBounds = clickedInBounds;
    function clickedInBounds(mouseX, mouseY) {

            var leftBound = this.x;
            var rightBound = this.x + Arrow.width;

            // The means for calculating the upper and lower bounds differs
            // depending on whether the arrow is up or down.

            var upperBound = this.y;
            var lowerBound = this.y + Arrow.height;

            if (this.up) {
                upperBound = this.y - Arrow.height;
                lowerBound = this.y;
            }

            return (mouseX > leftBound &&
                    mouseX <= rightBound &&
                    mouseY > upperBound &&
                    mouseY <= lowerBound);
    }

    this.setWord = setWord;
    function setWord(word) {
        this.word = word;
    }
}

Arrow.width = 20;
Arrow.height = 30;
