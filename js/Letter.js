function Letter(character, x, y, id) {

    this.x = x;
    this.y = y;
    
    this.character = character;
    this.id = id;

    this.isClicked = false;

    this.kerning = 0;

    this.draw = draw;
    function draw() {
        var ctx = window.globalManager.ctx;
        
        ctx.save();

        ctx.font = '36pt Oswald';
        if (this.isClicked) {
            ctx.fillStyle = "red";
        }
        else {
            ctx.fillStyle = "#ffffff";
        }

        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        ctx.fillText(this.character, this.x + this.kerning, this.y + Letter.height);
        
        ctx.restore();

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

Letter.width = 40;
Letter.height = 60;
