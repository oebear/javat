function prime() {
    let number = prompt("Enter an integer:");

    document.getElementById("result").innerText = "";

    if (number !== null && !isNaN(number)) {
        number = parseInt(number);

        if (number <= 1) {
            document.getElementById("result").innerText = `${number} is not a prime number.`;
            return;
        }

        let prime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            document.getElementById("result").innerText = `${number} is a prime number.`;
        } else {
            document.getElementById("result").innerText = `${number} is not a prime number.`;
        }
    } else {
        document.getElementById("result").innerText = "Please enter a valid integer.";
    }
}
