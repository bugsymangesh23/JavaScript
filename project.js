// Deposit money into account
// Determine number of lines to bet on
// Make a bet amount
// spin the machine
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

// slot spin emulator
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

const reels = spin();
console.log(reels);
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);