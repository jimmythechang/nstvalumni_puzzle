function Letter(character, x, y, id) {

    this.x = x;
    this.y = y;
    
    this.character = character;
    this.id = id;

    this.isClicked = false;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;
        ctx.strokeRect(this.x, this.y, Letter.width, Letter.height);

        ctx.font = '24pt Oswald';
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

    this.clickedInBounds = clickedInBounds;
    function clickedInBounds(mouseX, mouseY) {
        var leftBound = this.x;
        var rightBound = this.x + Letter.width;
        var upperBound = this.y;
        var lowerBound = this.y + Letter.height;

        return (mouseX > leftBound &&
                mouseX <= rightBound &&
                mouseY > upperBound &&
                mouseY <= lowerBound);
    }
}

Letter.width = 30;
Letter.height = 40;
