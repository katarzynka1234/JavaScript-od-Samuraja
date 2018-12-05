class Result {
    // w przyspadku wygranej (result = true) postawione środki mnożymy przez 3, a w przypadku przegranej (result = false) wynik 0;
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid;
        else return 0;
    }
    // określenie warunkó zwycięstwa 
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
        else return false
    }

}