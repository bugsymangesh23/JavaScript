// Check if user won
// Give user the winnings
// Play again?

// ===================================User Deposit================================
const prompt = require("prompt-sync")(); // take user input

// Global variables
const COLUMNS = 3;
const ROWS = 3;

// Object Mapper
const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8,
}

// Odds - value to be multiplied by the counts
const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
}

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the deposit amount: ");
    // Convert to interger
        const numberDepositAmount = parseFloat(depositAmount);
    //check if is a valid number
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid input, Please try Again!");
        } else {
            return numberDepositAmount;
        }
    }
};

//=============Determine number of lines user wants to bet on============================
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter number of line to bet on (1-3)");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid Amount! Please try again.");
        } else {
            return numberOfLines;
        }
    }

};

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter number of bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet try again!");
        } else {
            return numberBet;
        }
    }

};

// slot spin simulator
 const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }

    const reels = [];
    for(i = 0; i < COLUMNS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

// Transposing the arrays

const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLUMNS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

// Display to user the slot spin

const printRows= (rows) => {
    for (const row of rows) {
        let rowString = " ";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString);
    }
};

// Dispaly if user won

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet *SYMBOLS_VALUES[symbols[0]];
        }
    }
    return winnings;
}

// Game loop

const game = () => {
    let balance = deposit();

    while(true){
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        console.log(rows);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());

        if (balance <= 0 ){
            console.log("You ran out of money!");
            break;
        }

        const replay = prompt("Do you wish to play again (y/n)? ");

        if(replay != "y") break;
    }
}

game();