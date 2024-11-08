function Root() {
    let confirm = confirm("Start?");

    if (confirm) {
        let num = prompt("Enter a number:");

        if (num !== null && !isNaN(num)) {
            num = parseFloat(num);

            if (num < 0) {

                document.getElementById("result").innerText = "The square root of a negative number is not defined";
            } else {
                let squareRoot = Math.sqrt(num);
                document.getElementById("result").innerText = `The square root of ${num} is ${squareRoot}`;
            }
        } else {
            document.getElementById("result").innerText = "Invalid input. Please enter a valid number.";
        }
    } else {
        document.getElementById("result").innerText = "The square root is not calculated.";
    }
}
