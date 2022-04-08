var str = ["Paragon"];
function myReverse(str) {
    var myReverse = [];
    var one = str.toString();
        for (var i = 0; i < str.length; i++) {
          one.push(str[str.length-i])
        }
       console.log(one);

    return myReverse;
}
console.log(myReverse(str));
module.exports = myReverse;