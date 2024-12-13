// Array to store participant names
let participants = [];
let totalParticipants = 0;

// Start collecting names after getting the participant count
function startNameCollection() {
    const count = parseInt(document.getElementById('countInput').value);

    if (isNaN(count) || count < 1) {
        alert('Please enter a valid number');
        return;
    }

    totalParticipants = count;
    document.getElementById('participantCount').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
    updateMessage();
}

// Add a participant name to the list
function addName() {
    const nameField = document.getElementById('nameField');
    const name = nameField.value.trim();

    if (name === '') {
        alert('Please enter a name');
        return;
    }

    participants.push(name);
    nameField.value = '';

    if (participants.length >= totalParticipants) {
        displayparticipants();
    } else {
        updatemessage();
    }
}

function updatemessage() {
    const remaining = totalParticipants - participants.length;
    document.getElementById('message').textContent =
        `Please enter ${remaining} more name${remaining > 1 ? 's' : ''}`;
}

function displayparticipants() {
    participants.sort();
    const ol = document.createElement('ol');
    participants.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ol.appendChild(li);
    });

    document.getElementById('nameInput').style.display = 'none';
    document.getElementById('resultList').appendChild(ol);
}