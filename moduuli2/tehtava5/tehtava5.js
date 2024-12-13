let numbers = [];

function addnumber() {
    const numberInput = document.getElementById('numberinput');
    const num = parseFloat(numberInput.value);

    if (isNaN(num)) {
        alert('Enter a valid numba');
        return;
    }

    if (numbers.includes(num)) {
        console.log(`number ${num} has already been given`);

        numbers.sort((a, b) => a - b);

        console.log('\nAll numbers in ascending order:');
        numbers.forEach(number => {
            console.log(number);
        });

        numberInput.disabled = true;
        document.querySelector('button').disabled = true;
        return;
    }

    numbers.push(num);

    numberInput.value = '';
}