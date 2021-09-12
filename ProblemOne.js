const lastLetters = (word) => {
    const length = word.length;
    const last = word.charAt(length - 1) + ' ' + word.charAt(length - 2);
    return last;
}

const word = prompt('Enter word', '');
const result = lastLetters(word);

document.write(result);