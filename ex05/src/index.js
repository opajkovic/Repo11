var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var monitorsList = [];
    for (var i =0; i < arr.length; i++) {
        var list = [];
        list.splice(1,0,i+1);
        list.unshift(arr[i]);
        monitorsList.push(list);
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;