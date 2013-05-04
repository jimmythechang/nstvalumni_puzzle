/**
 * All the globals, defined in one place. Initializes the necessary handlers 
 * and managers as well.
 */

function GlobalManager() {
    this.init = init;
    function init() {
        window.globalManager = this;
        var canvas = $('#canvas')[0];
        this.ctx = canvas.getContext('2d');
        this.drawManager = new DrawManager();

        this.mouseHandler = new MouseHandler();
        this.mouseHandler.init();
    }


    this.gameLoop = gameLoop;
    function gameLoop() {
        this.drawManager.draw();
    }
}
