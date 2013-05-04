function Letter(character, x, y) {

    this.x = x;
    this.y = y;
    
    this.character = character;

    this.isClicked = false;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;
        ctx.strokeRect(this.x, this.y, Letter.width, Letter.height);

        ctx.font = '24pt Arial';
        if (this.isClicked) {
            ctx.fillStyle = "red";
        }
        else {
            ctx.fillStyle = "#000000";
        }
        ctx.fillText(this.character, this.x, this.y + Letter.height);
    }

    this.toggle = toggle;
    function toggle() {
        this.isClicked = !this.isClicked;
    }
}

Letter.width = 30;
Letter.height = 40;
