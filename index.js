// code your solution here
function superbowlWin(record) {
    let wins = record.find((game) => {
    return game.result === "W"});
    if (wins) {
        return wins.year;
    } 

}