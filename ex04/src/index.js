var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    for (i = 0; i < newTemps.length; i++) {
        var sum = 0;
        var average = 0;
        for(j=0; j<4; j++) {
        sum = sum + newTemps[i][j];
    }
    average = sum / 4;
    averageDayTemp.push(average);
   }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;