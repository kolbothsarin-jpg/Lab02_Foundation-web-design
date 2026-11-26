function countChar(text, char) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count = count + 1;
        }
    }

    return count;
}

console.log(countChar("hello world", "o")); 
console.log(countChar("aaa bbb a", "a"));  
console.log(countChar("abc", "d"));     