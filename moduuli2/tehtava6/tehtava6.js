function rolld() {
    return Math.floor(Math.random() * 6) + 1;
}

function roll() {
    const resultDiv = document.getElementById('rollResults');
    resultDiv.innerHTML = '';

    const ul = document.createElement('ul');

    let roll;
    do {
        roll = rolld();

        const li = document.createElement('li');
        li.textContent = `Rolled: ${roll}`;
        ul.appendChild(li);

    } while (roll !== 6);

    resultDiv.appendChild(ul);
}