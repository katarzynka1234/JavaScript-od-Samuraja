class Statistic {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistic(win, bid) {
        let gameResult = {
            win: win,
            bid: bid,
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult);
    }

    showGameStatistic() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length; // Alternatywnie można: games - wins;
        return [games, wins, losses];
    }
}

const stat = new Statistic();