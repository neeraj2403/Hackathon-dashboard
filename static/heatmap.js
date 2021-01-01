

// custom js


// $(document).ready(function()
//       {
//         var url = "http://127.0.0.1:5000/data" //error here
//         $.getJSON(url,function(data)
//         {


//           $.each(data.index,function(id,obj)
//           {
//             console.log(obj)
//           })



          // Themes end
          am4core.useTheme(am4themes_animated);
          // Create map instance
          var chart = am4core.create("chartdiv", am4maps.MapChart);

          // Set map definition
          chart.geodata = am4geodata_india2019High;

          // Create map polygon series
          var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

          //Set min/max fill color for each area
          polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: chart.colors.getIndex(20).brighten(1),
            max: chart.colors.getIndex(20).brighten(-0.3)
          });

          // Make map load polygon data (state shapes and names) from GeoJSON
          polygonSeries.useGeodata = true;

          // Set heatmap values for each state
          polygonSeries.data = [
            {
              id: "IN-JK",
              value: 0
            },
            {
              id: "IN-MH",
              value: 2*120000
            },
            {
              id: "IN-UP",
              value: 120000
            },
            {
              id: "US-AR",
              value: 0
            },
            {
              id: "IN-RJ",
              value: 0
            },
            {
              id: "IN-AP",
              value: 120000
            },
            {
              id: "IN-MP",
              value: 0
            },
            {
              id: "IN-TN",
              value: 120000
            },
            {
              id: "IN-JH",
              value: 0
            },
            {
              id: "IN-WB",
              value: 120000
            },
            {
              id: "IN-GJ",
              value: 0
            },
            {
              id: "IN-BR",
              value: 0
            },
            {
              id: "IN-TG",
              value: 0
            },
            {
              id: "IN-GA",
              value: 0
            },
            {
              id: "IN-DN",
              value: 0
            },
            {
              id: "IN-DL",
              value: 0
            },
            {
              id: "IN-DD",
              value: 0
            },
            {
              id: "IN-CH",
              value: 0
            },
            {
              id: "IN-CT",
              value: 0
            },
            {
              id: "IN-AS",
              value: 0
            },
            {
              id: "IN-AR",
              value: 0
            },
            {
              id: "IN-AN",
              value: 0
            },
            {
              id: "IN-KA",
              value: 0
            },
            {
              id: "IN-KL",
              value: 120000
            },
            {
              id: "IN-OR",
              value: 120000
            },
            {
              id: "IN-SK",
              value: 0
            },
            {
              id: "IN-HP",
              value: 0
            },
            {
              id: "IN-PB",
              value: 0
            },
            {
              id: "IN-HR",
              value: 0
            },
            {
              id: "IN-UT",
              value: 0
            },
            {
              id: "IN-LK",
              value: 0
            },
            {
              id: "IN-MN",
              value: 0
            },
            {
              id: "IN-TR",
              value: 0
            },
            {
              id: "IN-MZ",
              value: 0
            },
            {
              id: "IN-NL",
              value: 0
            },
            {
              id: "IN-ML",
              value: 0
            }
          ];



          // Configure series tooltip
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}: {value}";
          polygonTemplate.nonScalingStroke = true;
          polygonTemplate.strokeWidth = 0.5;

          // Create hover state and set alternative fill color
          var hs = polygonTemplate.states.create("hover");
          hs.properties.fill = am4core.color("#3c5bdc");

//         }
//         ) })


          // Filterng elements
          filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



        
