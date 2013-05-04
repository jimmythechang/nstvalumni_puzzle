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
        ctx.fillStyle = "blue";
        ctx.fill();
    }

    this.setWord = setWord;
    function setWord(word) {
        this.word = word;
    }
}

Arrow.width = 50;
Arrow.height = 50;
