let arrayofrealnumbers = new Array(10);
        for (i = 0; i < arrayofrealnumbers.length; i++) {
            arrayofrealnumbers[i] = (Math.random() * (-20) + Math.random() * 30).toFixed(2);
        }
        console.log(arrayofrealnumbers);
        function logNum(array){
            for(i=0;i<array.length;i++){
                console.log(array[i]);
            }
        }
        logNum(arrayofrealnumbers);
        // xét giá trị tại từng vị trí trong mảng có thuộc đoạn tức là array[i] >= x và array[i] <= y