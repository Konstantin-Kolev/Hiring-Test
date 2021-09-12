const n = prompt("How many numers will be input?", 0);
var numbers = [];

for (let i = 0; i < n; i++) {
    numbers.push(prompt("Enter a number", 0));
}

const contains = (array, n) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true;
        }
    }
    return false;
}

const countDuplicate = (numbers) => {
    var checkedNumbers = [];
    var repeats = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (!contains(checkedNumbers, numbers[i])) {
            checkedNumbers.push(numbers[i]);
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] === numbers[j]) {
                    repeats++;
                    break;
                }
            }
        }
    }
    return repeats;
}

const result = countDuplicate(numbers);

document.write(result);