class GameOfLifeLogic {
    makeStep(board) {
        for (var i = 0; i < board.rows; i++) {
            for (var j = 0; j < board.cols; j++) {
                var numOfLiveNeighbours = this.getNumOfLiveNeighbours(board.matrix, i, j);
                if (board.matrix[i][j].currDeadStatus) {
                    if (numOfLiveNeighbours == 3) {
                        board.matrix[i][j].makeCellLive();
                    }
                } else {
                    if (numOfLiveNeighbours > 3) {
                        board.matrix[i][j].makeCellDead();
                    } else if (numOfLiveNeighbours < 2) {
                        board.matrix[i][j].makeCellDead();
                    }
                }
            }
        }

        for (var i = 0; i < board.rows; i++) {
            for (var j = 0; j < board.cols; j++) {
                board.matrix[i][j].equalCellStatus();
            }
        }
    }

    getNumOfLiveNeighbours(matrix, x, y) {
        var neighbours = [];
        var result = 0;
        neighbours.push(this.getCell(matrix, x - 1, y));
        neighbours.push(this.getCell(matrix, x - 1, y + 1));
        neighbours.push(this.getCell(matrix, x - 1, y - 1));
        neighbours.push(this.getCell(matrix, x, y + 1));
        neighbours.push(this.getCell(matrix, x, y - 1));
        neighbours.push(this.getCell(matrix, x + 1, y));
        neighbours.push(this.getCell(matrix, x + 1, y + 1));
        neighbours.push(this.getCell(matrix, x + 1, y - 1));

        for (var i = 0; i < neighbours.length; i++) {
            if (!neighbours[i]) {
                result++;
            }
        }

        return result;
    }

    getCell(matrix, y, x) {
        var deadCell = true;
        var value, hasValue;

        try {
            hasValue = matrix[y][x] !== undefined;
            value = hasValue ? matrix[y][x].currDeadStatus : deadCell;
        } catch (e) {
            value = deadCell;
        }

        return value;
    }
}
