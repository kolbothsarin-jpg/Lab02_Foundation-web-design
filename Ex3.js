function averageGrade(array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum / array.length;
}

console.log(averageGrade([85, 90, 78, 92]));
console.log(averageGrade([10, 20, 30]));  
console.log(averageGrade([]));             