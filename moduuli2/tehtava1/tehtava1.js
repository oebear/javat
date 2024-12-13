let numbers = [];

        function addNumber() {
            let input = document.getElementById('numberInput');
            let message = document.getElementById('message');
            let number = parseFloat(input.value);

            if (isNaN(number)) {
                message.textContent = "Please enter a valid number";
                return;
            }

            numbers.push(number);
            input.value = '';

            if (numbers.length < 5) {
                message.textContent = `Number added please enter ${5 - numbers.length} more number(s)`;
            } else {
                message.textContent = "All numbers entered";
                displayreverse();
            }
        }

        function displayreverse() {
            let result = document.getElementById('result');
            let output = "Numbers in reverse order:<br>";

            for (let i = numbers.length - 1; i >= 0; i--) {
                output += numbers[i] + "<br>";
            }

            result.innerHTML = output;

            // Reset the array for new entries
            numbers = [];
        }