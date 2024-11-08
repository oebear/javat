function Leap() {
    let starty = prompt("Enter the start year:");
    let endYear = prompt("Enter the end year:");

    document.getElementById("leapYearList").innerHTML = "";

    if (starty !== null && endYear !== null && !isNaN(starty) && !isNaN(endYear)) {
        starty = parseInt(starty);
        endYear = parseInt(endYear);

        if (starty <= endYear) {
            for (let year = starty; year <= endYear; year++) {
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    let listItem = document.createElement("li");
                    listItem.textContent = year;
                    document.getElementById("leapYearList").appendChild(listItem);
                }
            }

            if (document.getElementById("leapYearList").innerHTML === "") {
                let noleap = document.createElement("li");
                noleap.textContent = "No leap years in this range.";
                document.getElementById("leapYearList").appendChild(noleap);
            }
        } else {
            alert("The start year must be less than or equal to the end year.");
        }
    } else {
        alert("Please enter valid numerical values for both years.");
    }
}
