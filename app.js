(function () {
    var view = new View();
    var gameLogic = new GameOfLifeLogic();
    var board = new Board(40, 40);
    var controller = new Controller(view, gameLogic, board);
})();
