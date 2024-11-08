function rollDice() {
    //Ask the user
    let numberofrolls = prompt("Enter the number of dice rolls:");

    //valid number
    if (numberofrolls !== null && !isNaN(numberofrolls) && numberofrolls > 0) {
        numberofrolls = parseInt(numberofrolls);
        let sum = 0;

        //Roll the dice
        for (let i = 0; i < numberofrolls; i++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            sum += roll;
        }

        document.getElementById("result").innerText = `The sum of ${numberofrolls} dice rolls is: ${sum}`;
    } else {
        document.getElementById("result").innerText = "Please enter a valid number of dice rolls.";
    }
}
