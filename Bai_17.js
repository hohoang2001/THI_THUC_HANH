let a = [
    [2, 4, 3, 8],
    [6, 5, 4, 2],
    [10, 3, 9, 10],
    [12, 20, 8, 5]
];
function decreaseNumber(arr) {
    let check = true;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j] <= arr[i][j+1]) {
                check = false;
                break;
            }
        }
        if(check) {
            result.push(arr[i]);
        }
        check = true;
    }
    return result;
}
console.log(decreaseNumber(a));