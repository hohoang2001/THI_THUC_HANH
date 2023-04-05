let evenadjacent= new Array(10);
        for (i = 0; i < evenadjacent.length; i++) {
            evenadjacent[i] = Math.ceil(Math.random() * (-20) + Math.random() * 30);
        }
        console.log(evenadjacent);
        function dblEven(array) {
            let count = 0;
            for (i = 0; i < array.length; i++) {
                if (Number(array[i]) % 2 == 0 && Number(array[i + 1]) % 2 == 0){
                    count++;
                }
            }
            return count;
        }
        console.log(dblEven(evenadjacent));