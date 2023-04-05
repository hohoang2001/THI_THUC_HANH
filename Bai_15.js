let a = [
    [5,2,3,1,4],
    [6,1,4,3,2],
    [9,0,2,13,14]
];
console.log(a);
function checkPostive(arr,column) {
   for(i = 0; i < arr.length -1 ; i++) {
    if(arr[i][column] < arr[i+1][column] ) {
        return false
    }
   }
   return true
}

console.log(checkPostive(a,1));