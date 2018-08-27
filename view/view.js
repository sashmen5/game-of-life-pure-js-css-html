class View {
    constructor() {
        this.SIZE = 40;
        this.resetGameEvent = null;
        this.startGameEvent = null;
        this.stopGameEvent = null;
        this.setButtonsEvents();
    }

    buildGameBoard() {
        for (var i = 0; i < this.SIZE * this.SIZE; i++) {
            $('.game-container').append('<div class="cell cell-dead" id="' + i + '"></div>');
        }
    }

    resetGameBoard() {
        for (var i = 0; i < this.SIZE * this.SIZE; i++) {
            var cellIdStr = '#' + i;
            $(cellIdStr).removeClass();
            $(cellIdStr).addClass('cell');
            $(cellIdStr).addClass('cell-dead');
        }
    }

    makeCellDead(row, col) {
        var cellId = 40 * row + col;
        $('#' + cellId).removeClass('cell-live');
        $('#' + cellId).addClass('cell-dead');
    }

    makeCellLive(row, col) {
        var cellId = 40 * row + col;
        $('#' + cellId).removeClass('cell-dead');
        $('#' + cellId).addClass('cell-live');
    }

    setButtonsEvents() {
        $('#start').click(() => {
            this.startGameEvent();
        });

        $('#stop').click(() => {
            this.stopGameEvent();
        });

        $('#reset').click(() => {
            this.resetGameEvent();
        });
    }
}
