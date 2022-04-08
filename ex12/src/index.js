function splitArrayInGroups(arr, n) {
    var result = [];
    
    // for (var i =0; i < arr.length; i++) {
        // var list = arr;
        // list.splice[i,n]
        // result = a.split(arr,n);
        for (var i =0; i < arr.length; i++) {
            var list = [];
            arr.substr(i,i+n);
            list.push(arr);
            result.push(list);
        }             


        return result; 
 }
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); 
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;