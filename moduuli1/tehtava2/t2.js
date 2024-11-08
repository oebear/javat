function greet() {
    let name = prompt("Please enter your name:");

    if (name) {
        document.getElementById("greeting").innerText = `Hello, ${name}!`;
    } else {
        document.getElementById("greeting").innerText = "Hello, stranger!";
    }
}
