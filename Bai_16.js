let a = [
    [0, 4],
    [6, 12],
    [10, 14]
]
function oddNumber(arr) {
    result = "Ma trận không tồn tại số lẻ";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (a[i][j] % 2 != 0) {
               return result = "Ma trận tồn tại số lẻ"
            }
        }
    }
    return result;
}
console.log(oddNumber(a));