// Global
let candidates = [];
let totalVoters = 0;
let currentVoter = 0;

// Start
function startst() {
    const count = parseInt(document.getElementById('candidatecount').value);

    if (isNaN(count) || count < 1) {
        alert('Please enter a valid number of candidates');
        return;
    }

    document.getElementById('candidatesetup').style.display = 'none';
    document.getElementById('candidateregistration').style.display = 'block';
}

// Register
function registerc() {
    const nameInput = document.getElementById('candidatename');
    const name = nameInput.value.trim().toLowerCase();

    if (name === '') {
        alert('Please enter a candidate name');
        return;
    }

    candidates.push({
        name: name,
        votes: 0
    });

    nameInput.value = '';

    if (candidates.length < parseInt(document.getElementById('candidatecount').value)) {
        document.getElementById('candidateprompt').textContent =
            `Name for candidate ${candidates.length + 1}:`;
    } else {
        document.getElementById('candidateregistration').style.display = 'none';
        document.getElementById('votersetup').style.display = 'block';
    }
}

// Start voting
function startv() {
    totalVoters = parseInt(document.getElementById('votercount').value);

    if (isNaN(totalVoters) || totalVoters < 1) {
        alert('Please enter a valid number of voters');
        return;
    }

    document.getElementById('votersetup').style.display = 'none';
    document.getElementById('voting').style.display = 'block';
    updateVoterPrompt();
}

// Update the prompt
function updateVoterPrompt() {
    document.getElementById('voterprompt').textContent =
        `Voter ${currentVoter + 1}, enter the name of your chosen candidate (or leave empty for blank vote):`;
}

// Submit a vote
function submitv() {
    const voteInput = document.getElementById('vote');
    const vote = voteInput.value.trim().toLowerCase();

    if (vote !== '') {
        const candidate = candidates.find(c => c.name === vote);
        if (candidate) {
            candidate.votes++;
        } else {
            alert('Invalid candidate name, please try again');
            return;
        }
    }

    voteInput.value = '';
    currentVoter++;

    if (currentVoter >= totalVoters) {
        announceResults();
    } else {
        updateVoterPrompt();
    }
}

//  results
function announceResults() {
    document.getElementById('voting').style.display = 'none';

    candidates.sort((a, b) => b.votes - a.votes);

    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);

    console.log('results:');
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}