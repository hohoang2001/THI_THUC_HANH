let righteous = new Array(10);
for (i = 0; i < righteous.length; i++) {
    righteous[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
}
console.log(righteous);
function sqrtIndex(array) {
    for (i = 0; i < array.length; i++) {
        let sqt = Math.sqrt(Number(array[i]));
        if (Number.isInteger(sqt)) {
            console.log(i);
        }
    }
}
console.log(sqrtIndex([righteous]));