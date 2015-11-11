/**
 * Created by evanmeigs1 on 10/6/15.
 */
var mymap = document.getElementById("map");
var numpins = 5;
var pincollection = "";

for(var i = 0; i < numpins; i++){
    var randomtop = Math.floor((Math.random()* 500) + 1);
    var randomleft = Math.floor((Math.random()* 600)+ 1);
    pincollection += "<div class='pin' style='top:" + randomtop + "px; left:" + randomleft + "px;'></div>"
    ;
}

mymap.innerHTML = pincollection;


function addPin(event) {
    numpumpkins++;
    var xAdjust = 300;
    var yAdjust = 10;
    var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;



}