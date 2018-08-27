class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.currDeadStatus = true;
        this.nextDeadStatus = true;
        this.eventCellLive = null;
        this.eventCellDie = null;
    }

    live() {
        this.currDeadStatus = false;
        this.nextDeadStatus = false;
        this.eventCellLive(this.x, this.y);
    }

    makeCellLive() {
        this.nextDeadStatus = false;
        this.eventCellLive(this.x, this.y);
    }

    makeCellDead() {
        this.nextDeadStatus = true;
        this.eventCellDie(this.x, this.y);
    }

    equalCellStatus() {
        this.currDeadStatus = this.nextDeadStatus;
    }

    changeCurrState() {
        if (this.currDeadStatus) {
            this.makeCellLive();
        } else {
            this.makeCellDead();
        }
    }
}
