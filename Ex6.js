function votingSystem(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }

    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "A") {
            countA = countA + 1;
        }
        if (votes[i] === "B") {
            countB = countB + 1;
        }
        if (votes[i] === "C") {
            countC = countC + 1;
        }
    }

    let max = countA;
    if (countB > max) {
        max = countB;
    }
    if (countC > max) {
        max = countC;
    }

    let winners = "";
    let winnerCount = 0;

    if (countA === max) {
        winners = "A";
        winnerCount = winnerCount + 1;
    }
    if (countB === max) {
        if (winnerCount > 0) {
            winners = winners + " and ";
        }
        winners = winners + "B";
        winnerCount = winnerCount + 1;
    }
    if (countC === max) {
        if (winnerCount > 0) {
            winners = winners + " and ";
        }
        winners = winners + "C";
        winnerCount = winnerCount + 1;
    }

    if (winnerCount === 1) {
        return winners + " is the winner";
    } else {
        return winners + " are both winners";
    }
}

console.log(votingSystem(["A", "B", "A", "C", "A"])); 
console.log(votingSystem(["A", "B", "B", "C", "A"])); 
console.log(votingSystem([]));                       