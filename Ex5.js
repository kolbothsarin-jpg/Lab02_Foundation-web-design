function countWords(text) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            if (inWord === false) {
                count = count + 1;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    return count;
}

console.log(countWords("hello world"));       
console.log(countWords("this is the best day")); 
console.log(countWords("a bb ccc dddddd e")); 