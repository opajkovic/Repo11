var myStr = "Paragon is the best!";
function useMethods(str) {
    var newStr = str.split("");
    var newReverse = newStr.reverse();
    var myReverse = newReverse.join("");
    var myWords = myReverse.split(" ");
    var countCharacters = myWords.map(word=> word.length);
    
    return {
        myReverse,
        countCharacters
    };
}
console.log(useMethods(myStr));
module.exports = useMethods;