let dogNames = [];
const totald = 6;

function adddogname() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name === '') {
        alert('Please enter a name');
        return;
    }
    dogNames.push(name);
    nameInput.value = '';
    if (dogNames.length >= totald) {
        displaydognames();
    } else {
        updatemessage();
    }
}

function updatemessage() {
    const remaining = totald - dogNames.length;
    document.getElementById('message').textContent =
        `Enter ${remaining} more name${remaining > 1 ? 's' : ''}`;
}

function displaydognames() {
    dogNames.sort((a, b) => b.localeCompare(a));

    const ul = document.createElement('ul');
    dogNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });

    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resultList').appendChild(ul);
}