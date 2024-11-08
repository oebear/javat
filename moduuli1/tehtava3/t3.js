function calculate() {
    let num1 = prompt("Enter the first integer:");
    let num2 = prompt("Enter the second integer:");
    let num3 = prompt("Enter the third integer:");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("results").innerText = "Please enter valid integers";
        return;
    }

    let sum = num1 + num2 + num3;
    let product = num1 * num2 * num3;
    let average = sum / 3;

    document.getElementById("results").innerHTML = `
        <ul>
            <li>Sum: ${sum}</li>
            <li>Product: ${product}</li>
            <li>Average: ${average}</li>
        </ul>
    `;
}
