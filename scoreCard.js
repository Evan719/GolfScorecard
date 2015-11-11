/**
 * Created by evanmeigs1 on 10/12/15.
 */
var numberOfHoles = 9;
var holetext = "";

for (var i = 1; i <= numberOfHoles; i++) {
    holetext += "<div id='hole" + i + "' class='holebox'>" + i + "</div>";
}
//document.getElementById("holenumber").innerHTML += holetext;
function initMap() {
    var myLatLng = {lat: 40.729038, lng: -111.932885};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Glendale Golf Course'
    });
}

function loadhole(hole) {
    var holelocation = json.course.holes[hole].green_location;
    var teelocation = json.course.holes[0].tee_boxes[0].location;

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: teelocation,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var marker = new google.maps.Marker({
        position: teelocation,
        map: map,
        title: 'START'
    });

}

function HoleOne(hole, tee) {

    var myLatLng = {lat: 40.730061, lng: -111.934593};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[0].green_location,
        map: map,
        title: 'Hole 1'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[0].tee_boxes[0].location,
        map: map,
        title: 'Tee 1'
    });

}

function HoleTwo(hole, tee) {

    var myLatLng = {lat: 40.731349, lng: -111.935346};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[1].green_location,
        map: map,
        title: 'Hole 2'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[1].tee_boxes[0].location,
        map: map,
        title: 'Tee 2'
    });
}

function HoleThree(hole, tee) {

    var myLatLng = {lat: 40.731569, lng: -111.935952};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[2].green_location,
        map: map,
        title: 'Hole 3'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[2].tee_boxes[0].location,
        map: map,
        title: 'Tee 3'
    });
}

function HoleFour() {

    var myLatLng = {lat: 40.732728, lng: -111.936046};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[3].green_location,
        map: map,
        title: 'Hole 4'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[3].tee_boxes[0].location,
        map: map,
        title: 'Tee 4'
    });
}

function HoleFive() {

    var myLatLng = {lat: 40.731873, lng: -111.932546};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[4].green_location,
        map: map,
        title: 'Hole 5'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[4].tee_boxes[0].location,
        map: map,
        title: 'Tee 5'
    });
}

function HoleSix() {

    var myLatLng = {lat: 40.729573, lng: -111.929781};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[5].green_location,
        map: map,
        title: 'Hole 6'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[5].tee_boxes[0].location,
        map: map,
        title: 'Tee 6'
    });
}

function HoleSeven() {

    var myLatLng = {lat: 40.729017, lng: -111.931198};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[6].green_location,
        map: map,
        title: 'Hole 7'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[6].tee_boxes[0].location,
        map: map,
        title: 'Tee 7'
    });
}

function HoleEight() {

    var myLatLng = {lat: 40.730690, lng: -111.932268};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[7].green_location,
        map: map,
        title: 'Hole 8'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[7].tee_boxes[0].location,
        map: map,
        title: 'Tee 8'
    });
}

function HoleNine() {

    var myLatLng = {lat: 40.729290, lng: -111.933868};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[8].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[8].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleTen() {

    var myLatLng = {lat: 40.727995, lng: -111.933234};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[9].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[9].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleEleven() {

    var myLatLng = {lat: 40.728261, lng: -111.932077};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[10].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[10].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleTwelve() {

    var myLatLng = {lat: 40.727134, lng: -111.930302};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[11].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[11].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleThirteen() {

    var myLatLng = {lat: 40.729868, lng: -111.929220};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[12].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[12].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleFourteen() {

    var myLatLng = {lat: 40.730759, lng: -111.928221};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[13].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[13].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleFifteen() {

    var myLatLng = {lat: 40.728405167875, lng: -111.927074790001};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat: 40.730003, lng: -111.926704},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[14].green_location,
        map: map,
        title: 'Hole 15'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[14].tee_boxes[0].location,
        map: map,
        title: 'Tee 15'
    });
}

function HoleSixteen() {

    var myLatLng = {lat: 40.729219, lng: -111.926149};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[15].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[15].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleSeventeen() {

    var myLatLng = {lat: 40.726584, lng: -111.928331};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[16].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[16].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}

function HoleEighteen() {

    var myLatLng = {lat: 40.726595, lng: -111.931889};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var holemarker = new google.maps.Marker({
        position: json.course.holes[17].green_location,
        map: map,
        title: 'Hole 9'
    });

    var teemarker = new google.maps.Marker({
        position: json.course.holes[17].tee_boxes[0].location,
        map: map,
        title: 'Tee 9'
    });
}
var accessToken, model, weather;

function onload() {
    var redirectURI = document.URL;
    var clientID = "48093352-a077-4c61-b2d3-ca2aae13bc86";
    var authUrl = "http://api.swingbyswing.com/v2/oauth/authorize?scope=read&redirect_uri=" + redirectURI + "&response_type=token&client_id=" + clientID;

    accessToken = getUrlVars().access_token;
    if (accessToken == null) {
        location.replace(authUrl);
    }
    else {
        accessToken = accessToken.replace("/n", "");
        loadDoc();
    }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

//JSON.parse()
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            json = JSON.parse(xhttp.responseText);
            var holeCount = json.course.hole_count;
            for(var i = 0; i < holeCount; i++) {
                updatepar(json.course.holes[i].tee_boxes[0].par, i);
                getYards(json.course.holes[i].tee_boxes[0].yards, i);
            }
            loadhole(0);
        }
    };
    xhttp.open("GET", "https://api.swingbyswing.com/v2/courses/12605?includes=practice_area,nearby_courses,recent_media,recent_comments,recent_rounds,best_rounds,current_rounds,course_stats_month,course_stats_year&access_token=" + accessToken, true);
    xhttp.send();
}
function updatepar(par, i) {
    document.getElementById("Par" + (i + 1)).innerHTML = par;

}

function Score(hole) {
    var strokes = parseInt(document.getElementById("strokes" + hole).value);
    var par = parseInt(document.getElementById("Par" + hole).innerHTML);
    console.log(strokes, par);
    document.getElementById("hs" + hole).innerHTML = parseInt(strokes - par);
    }

function runningScore1(){
    document.getElementById("rs1").innerHTML = document.getElementById("hs1").innerHTML;
}

function runningScore2(hole){
    var runScore = parseInt(document.getElementById("rs" + (hole - 1)).innerHTML);
    var holeScore = parseInt(document.getElementById("hs" + hole).innerHTML);
    document.getElementById("rs" + hole).innerHTML = runScore + holeScore;
}

function getYards(yards, i){
    document.getElementById("Yards" + (i + 1)).innerHTML = yards;
}




//step through the next hole in the array and display it on the map.
//json.course.holes.length*/






