
// Initialize the map and assign it to a variable for later use
var map = L.map('map', {
  // Set latitude and longitude of the map center (required)
  center: [10.8505, 76.2711],
  // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
  zoom: 5
});

console.log(map);
L.control.scale().addTo(map);

// Create a Tile Layer and add it to the map
//var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 4,
  maxZoom: 10
}).addTo(map);
console.log(map);
//(passiveSupported && (active || el == window.document || el == window.document.body || el == window)) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false); -->

var searchControl = new L.esri.Controls.Geosearch().addTo(map);

var results = new L.LayerGroup().addTo(map);
let latGlobal = 0.0;
let lonGlabal = 0.0;




  searchControl.on('results', function(data){
  let latInput =  document.getElementById('latInput')
  let lonInput =  document.getElementById('lonInput')
  results.clearLayers();
  for (var i = data.results.length - 1; i >= 0; i--) {
    results.addLayer(L.marker(data.results[i].latlng));
    // console.log(data.results[i].latlng);
    console.log(data.results[i].latlng)
    let latx = data.results[i].latlng.lat;
    let lonx = data.results[i].latlng.lng;
    
    
    latInput.value = latx;
    lonInput.value = lonx;
    
  }
  
  });
  
  //setTimeout(() => console.log(lat), 0);
  
//setTimeout(function(){$('.pointer').fadeOut('slow');},3400);



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            

    /*==================================================================
    [ Chose Radio ]*/
    $("#radio1").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function(){
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });
        
    
    


})(jQuery);


function validateForm() {
    // var x = document.forms["myform"]["name"];
    // console.log(x)
    // if (x.value == "") {
    //   window.alert("Pincode must be filled");
    //   console.log("Pincode must be filled")
    //   return false;
    // }
    var y = document.forms["myform"]["lat"];
    var x = document.forms["myform"]["lon"];
    var z = document.forms["myform"]["name"];
    var a = document.forms["myform"]["Age"];
    var b = document.forms["myform"]["occupation"];
    var c = document.forms["myform"]["State"];
    





    if (y.value == "") {
      window.alert("All Fields must be filled");
      return false;
    }
    if (x.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
    if (z.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (a.value == "") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (b.value == "Occupation") {
        window.alert("All Fields must be filled");
        return false;
      }
      if (c.value == "Select State") {
        window.alert("All Fields must be filled");
        return false;
      }
  }