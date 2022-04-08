function myBouncer(arr) {
    var index = -1,
        arrLength = arr ? arr.length : 0,
        resIndex = -1,
        result = [];
 
    while (++index < arrLength) {
        var value = arr[index];
 
        if (value) {
            result[++resIndex] = value;
        }
    }
    return result;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;
