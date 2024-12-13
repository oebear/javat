function concat(stringArray) {
    let result = '';
    for (let i = 0; i < stringArray.length; i++) {
        result += stringArray[i];
    }
    return result;
}

// Example array
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

// Get  result
const concatenated = concat(names);

// Display result
document.getElementById('result').textContent = concatenated;