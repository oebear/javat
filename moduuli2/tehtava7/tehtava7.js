function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function roll2() {
    const sides = parseInt(document.getElementById('sidesinput').value);

    if (isNaN(sides) || sides < 1) {
        alert('Enter a valid number of sides');
        return;
    }

    const resultDiv = document.getElementById('rollresults');
    resultDiv.innerHTML = '';

    const ul = document.createElement('ul');

    let roll;
    do {
        roll = rollDice(sides);

        const li = document.createElement('li');
        li.textContent = `Rolled: ${roll}`;
        ul.appendChild(li);

    } while (roll !== sides);

    resultDiv.appendChild(ul);
}