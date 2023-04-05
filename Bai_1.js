

let arr = new Array(10);
for (i = 0; i < arr.length; i++) {
    arr[i] = (Math.random() * (-20) + Math.random() * 30);
};
console.log(arr);
function sumGreater(array) {
    let sum = 0;
    for (i = 1; i < array.length; i++) {
        if (Number(array[i]) > Number(array[i - 1])) {
            sum += Number(array[i]);
            
        }
    }
    return sum;
}
console.log(sumGreater(arr));