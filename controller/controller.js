class Controller {
    constructor(view, logic, board) {
        this.interval = 0;
        this.intervalFrequency = 150;
        this.view = view;
        this.board = board;
        this.logic = logic;
        this.view.buildGameBoard();
        this.setEvents();
        this.setDefaultCondition();
    }

    setEvents() {
        this.view.startGameEvent = this.startGame.bind(this);
        this.view.stopGameEvent = this.stopGame.bind(this);
        this.view.resetGameEvent = this.resetGame.bind(this);

        for (var i = 0; i < this.board.rows; i++) {
            for (var j = 0; j < this.board.cols; j++) {
                this.board.matrix[i][j].eventCellLive = this.view.makeCellLive;
                this.board.matrix[i][j].eventCellDie = this.view.makeCellDead;
            }
        }
    }

    setDefaultCondition() {
        this.board.matrix[8][5].live();
        this.board.matrix[8][6].live();
        this.board.matrix[8][7].live();
        this.board.matrix[8][8].live();
        this.board.matrix[8][9].live();
        this.board.matrix[8][10].live();
        this.board.matrix[8][11].live();
        this.board.matrix[8][12].live();
        this.board.matrix[8][13].live();
        this.board.matrix[8][15].live();
        this.board.matrix[8][16].live();
        this.board.matrix[8][17].live();
        this.board.matrix[8][19].live();
        this.board.matrix[8][20].live();
        this.board.matrix[8][21].live();
        this.board.matrix[8][22].live();
        this.board.matrix[8][23].live();
        this.board.matrix[8][25].live();
        this.board.matrix[8][26].live();
        this.board.matrix[8][27].live();
        this.board.matrix[8][28].live();
        this.board.matrix[8][29].live();
        this.board.matrix[8][30].live();
        this.board.matrix[8][31].live();
        this.board.matrix[8][32].live();
        this.board.matrix[8][33].live();

        this.board.matrix[28][15].live();
        this.board.matrix[28][16].live();
        this.board.matrix[28][17].live();
        this.board.matrix[28][18].live();
        this.board.matrix[28][19].live();
        this.board.matrix[28][20].live();
        this.board.matrix[28][21].live();
        this.board.matrix[28][22].live();
        this.board.matrix[28][23].live();
        this.board.matrix[28][24].live();
    }

    startGame() {
        if (this.interval < 1) {
            this.interval = setInterval(() => {
                this.logic.makeStep(this.board);
            }, this.intervalFrequency);
        }
    }

    stopGame() {
        if (this.interval > 0) {
            clearInterval(this.interval);
            this.interval = 0;
        }
    }

    resetGame() {
        this.view.resetGameBoard();
        this.board.newGame();
        this.setEvents();
        this.setDefaultCondition();
    }
}
