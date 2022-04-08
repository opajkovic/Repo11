function myMutation(arr){
    var i =arr[0];
    var j = arr[1];
    return arr.includes(i,j);
    
}
console.log(myMutation(["hello", "hey"])); 
console.log(myMutation(["hello", "Hello"])); 
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); 
console.log(myMutation(["Mary", "Army"])); 
console.log(myMutation(["Mary", "Aarmy"])); 
console.log(myMutation(["Alien", "line"])); 
console.log(myMutation(["floor", "for"])); 
console.log(myMutation(["hello", "neo"])); 
console.log(myMutation(["voodoo", "no"])); 
console.log(myMutation(["ate", "date"])); 
console.log(myMutation(["Tiger", "Zebra"])); 
console.log(myMutation(["Noel", "Ole"])); 
module.exports = myMutation;