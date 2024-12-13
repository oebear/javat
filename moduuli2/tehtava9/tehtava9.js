function even(numbers) {
    const evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
}

// test numbers
const originalArray = [2, 7, 4, 9, 10, 13, 3, 8, 6];

// Get array
const evenArray = even(originalArray);

// Print
console.log('Original array:', originalArray);
console.log('Even numbers array:', evenArray);