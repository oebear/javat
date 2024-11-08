function sort() {
    //Prompt
    let name = prompt("Enter your name:");

    //random number
    let houseNumber = Math.floor(Math.random() * 4) + 1;
    let house;

    if (houseNumber === 1) {
        house = "Gryffindor";
    } else if (houseNumber === 2) {
        house = "Slytherin";
    } else if (houseNumber === 3) {
        house = "Hufflepuff";
    } else {
        house = "Ravenclaw";
    }

    document.getElementById("result").innerText = `${name}, you are ${house}.`;
}
