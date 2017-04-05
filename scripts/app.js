// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

// when ready, render geolist
getAndRenderGeoList();

// when ready, render Map
getAndRenderMap();

});

//define getAndRenderMap function
function getAndRenderGeoList(){
  
//define getAndRenderGeoList function

  // CODE IN HERE!
// ajax
$.ajax({
  // What kind of request
  method: "GET",

  // The URL for the request
  url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",

  // The data to send aka query parameters
  datatype: 'json',

  data: $("form").serialize(),


});
// Code to run if the request succeeds;
// the response is passed to the function
// success: onSuccess,
function onSuccess (json){
// need forEach loop
}


  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  // error: onError

  function onError (xhr, status, errorThrown){
    console.log("Error:" + errorThrown);
    console.log("Status:" + status);
    console.dir(xhr);
  }
