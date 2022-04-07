var myArray = [2, 5, 9, 8, 1];
function bubbleSort(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    num = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = num;
                }
            }
        }
    return arr;
}
console.log(bubbleSort(myArray));
module.exports = bubbleSort;