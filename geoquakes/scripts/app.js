// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

// when ready, render Map
getAndRenderMap();

// when ready, render geolist
getAndRenderGeoList();

});
//define getAndRenderMap function
  function getAndRenderMap(json){
    var map;
      map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 37.78, lng: -122.44},
      zoom: 10
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



function OnSuccess(json){
// need forEach loop
  var GeoListArr = json.features;
  for (let GeoList of GeoListArr){
    $('#info').append(templateGeoList(GeoListArr));
}

function templateGeoList(GeoListArr){
return `<li>${GeoListArr.properties.list}</li>`;
}

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
