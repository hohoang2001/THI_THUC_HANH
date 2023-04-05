let a = [
    [-2,-4,-1],
    [-6,-40,-24],
    [-12,-24,-36]
];
let max = 0;
function maxEven(arr) {
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            if (arr[i][j] % 2 == 0) {
                max = arr[i][j]
            }
        }
    }
    return max;

}
console.log(maxEven(a));