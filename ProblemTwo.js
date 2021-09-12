const fizzBuzz = (n) => {
    var items = [];
    for (let index = 1; index <= n; index++) {
        var newItem = '';
        if (index % 3 === 0) {
            newItem += 'Fizz';
        }
        if (index % 5 === 0) {
            newItem += 'Buzz';
        }
        if (index % 3 !== 0 && index % 5 !== 0) {
            newItem += index;
        }

        items.push(newItem);
    }
    return items;
}

const n = prompt('Eneter a number', 0);
const result = fizzBuzz(n);

for (let i = 0; i < result.length; i++) {
    document.write(result[i]+"<br>");
}