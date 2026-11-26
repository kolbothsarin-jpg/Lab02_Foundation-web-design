function reverseArray(array) {
    let result = [];
    let j = 0;

    for (let i = array.length - 1; i >= 0; i--) {
        result[j] = array[i];
        j = j + 1;
    }

    return result;
}

console.log(reverseArray([14, 15, 16, 20])); 
console.log(reverseArray([5, 4, 3, 2, 1]));  
console.log(reverseArray([]));          