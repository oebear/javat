function check() {
    let year = prompt("Enter a year:");

    year = parseInt(year);

    document.getElementById("result").innerText = "";

    if (isNaN(year)) {
        document.getElementById("result").innerText = "Please enter a valid year.";
        return;
    }

    let isLeapYear = false;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        document.getElementById("result").innerText = `${year} is a leap year.`;
    } else {
        document.getElementById("result").innerText = `${year} is not a leap year.`;
    }
}
