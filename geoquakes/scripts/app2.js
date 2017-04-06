// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

$quakeList = $('#info');

// when ready, render Map
getAndRenderMap();

// when ready, render geolist
getAndRenderGeoList();

});
//define getAndRenderMap function
  function getAndRenderMap(){
      map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 37.78, lng: -122.44},
      zoom: 2
      });
  }
//define getAndRenderGeoList function

function getAndRenderGeoList(){
// ajax
$.ajax({
  // What kind of request
  method: "GET",

  // The URL for the request
  url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",

  // The data to send aka query parameters
  datatype: 'json',

  success: OnSuccess

  // error: OnError
});

// Code to run if the request succeeds;
// the response is passed to the function
// success: onSuccess,

function templateGeoList(GeoListArr){
  return `<hr>\n<p>${GeoListArr.properties.title}<p>`
}

function OnSuccess(json){
// need forEach loop
  var GeoListArr = json.features;
  var quakeHTML;
  var lat, lng;
  var icon = "http://www.soldster.com/images/report-abuse.png";
  // var hours_ago = Math.round((Date.now()-json.features.properties.time)/(1000*60*60));
  GeoListArr.forEach(function(element){
    quakeHTML = templateGeoList(element);
    $quakeList.append(quakeHTML);

    lat = element.geometry.coordinates[1];
    lng = element.geometry.coordinates[0];

    marker = new google.maps.Marker({
    icon: icon,
    map: map,
    position: {lat: lat, lng: lng}
    // title: element.properties.title
   });
      });
  }
}



  // append list to info id
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  // error: onError

  // function GeoListOnError (xhr, status, errorThrown){
    // console.log("Error:" + errorThrown);
    // console.log("Status:" + status);
    // console.dir(xhr);
// }
