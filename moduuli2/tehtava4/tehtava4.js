let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberinput');
    const num = parseFloat(numberInput.value);

    if (isNaN(num)) {
        alert('Enter a valid number');
        return;
    }

    if (num === 0) {
        if (numbers.length === 0) {
            console.log('No numbers entered');
        } else {
            numbers.sort((a, b) => b - a);

            console.log('numbers from largest to smallest:');
            numbers.forEach(number => {
                console.log(number);
            });
        }
        return;
    }

    numbers.push(num);

    numberInput.value = '';
}