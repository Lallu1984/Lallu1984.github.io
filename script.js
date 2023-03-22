
var a = 1;
var add = function(liitmine) {
    a += liitmine;
    document.getElementById("value").innerHTML = a;
}

var min = function(lahutamine) {
    a -= lahutamine;
    document.getElementById("value").innerHTML = a;
}

var reset = function(reset) {
    a = 1;
    document.getElementById("value").innerHTML = a;
}