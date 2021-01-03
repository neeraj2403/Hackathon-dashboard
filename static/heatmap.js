

// custom js


$(document).ready(function()
      {
        var url = "http://127.0.0.1:5000/data" //error here
        $.getJSON(url,function(data)
        {

          


          // $.each(data.index,function(id,obj)
          // {
          //   console.log(id.Maharashtra)
          // })



          // Themes end
          am4core.useTheme(am4themes_animated);
          // Create map instance
          var chart = am4core.create("chartdiv1", am4maps.MapChart);

          // Set map definition
          chart.geodata = am4geodata_india2019High;
          chart.seriesContainer.draggable = false;
          chart.seriesContainer.resizable = false;
          chart.logo.height = -15;
          chart.maxZoomLevel = 1;



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
              value: data["index"]["Jammu and Kashmir"]
            },
            {
              id: "IN-MH",
              value: data["index"]["Maharashtra"]
            },
            {
              id: "IN-UP",
              value: data["index"]["Uttar Pradesh"]
            },
            {
              id: "US-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-RJ",
              value: data["index"]["Rajasthan"]
            },
            {
              id: "IN-AP",
              value: data["index"]["Andhra Pradesh"]
            },
            {
              id: "IN-MP",
              value: data["index"]["Madhya Pradesh"]
            },
            {
              id: "IN-TN",
              value: data["index"]["Tamil Nadu"]
            },
            {
              id: "IN-JH",
              value: data["index"]["Jharkhand"]
            },
            {
              id: "IN-WB",
              value: data["index"]["West Bengal"]
            },
            {
              id: "IN-GJ",
              value: data["index"]["Gujarat"]
            },
            {
              id: "IN-BR",
              value: data["index"]["Bihar"]
            },
            {
              id: "IN-TG",
              value: data["index"]["Telangana"]
            },
            {
              id: "IN-GA",
              value: data["index"]["Goa"]
            },
            {
              id: "IN-DN",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-DL",
              value: data["index"]["Delhi"]
            },
            {
              id: "IN-DD",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-CH",
              value: data["index"]["Chandigarh"]
            },
            {
              id: "IN-CT",
              value: data["index"]["Chhattisgarh"]
            },
            {
              id: "IN-AS",
              value: data["index"]["Assam"]
            },
            {
              id: "IN-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-AN",
              value: data["index"]["Andaman and Nicobar Islands"]
            },
            {
              id: "IN-KA",
              value: data["index"]["Karnataka"]
            },
            {
              id: "IN-KL",
              value: data["index"]["Kerala"]
            },
            {
              id: "IN-OR",
              value: data["index"]["Odisha"]
            },
            {
              id: "IN-SK",
              value: data["index"]["Sikkim"]
            },
            {
              id: "IN-HP",
              value: data["index"]["Himachal Pradesh"]
            },
            {
              id: "IN-PB",
              value: data["index"]["Punjab"]
            },
            {
              id: "IN-HR",
              value: data["index"]["Haryana"]
            },
            {
              id: "IN-UT",
              value: data["index"]["Uttarakhand"]
            },
            {
              id: "IN-LK",
              value: data["index"]["Ladakh"]
            },
            {
              id: "IN-MN",
              value: data["index"]["Manipur"]
            },
            {
              id: "IN-TR",
              value: data["index"]["Tripura"]
            },
            {
              id: "IN-MZ",
              value: data["index"]["Mizoram"]
            },
            {
              id: "IN-NL",
              value: data["index"]["Nagaland"]
            },
            {
              id: "IN-ML",
              value: data["index"]["Meghalaya"]
            }
          ];



          // Configure series tooltip
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.nonScalingStroke = true;
          polygonTemplate.strokeWidth = 0.5;

          // Create hover state and set alternative fill color
          var hs = polygonTemplate.states.create("hover");
          hs.properties.fill = am4core.color("#3c5bdc");

        }
        ) })


        $(document).ready(function()
      {
        var url = "http://127.0.0.1:5000/health_workers" //error here
        $.getJSON(url,function(data)
        {

          


          // $.each(data.index,function(id,obj)
          // {
          //   console.log(id.Maharashtra)
          // })



          // Themes end
          am4core.useTheme(am4themes_animated);
          // Create map instance
          var chart = am4core.create("chartdiv2", am4maps.MapChart);

          // Set map definition
          chart.geodata = am4geodata_india2019High;
          chart.seriesContainer.draggable = false;
          chart.seriesContainer.resizable = false;
          chart.logo.height = -15;
          chart.maxZoomLevel = 1;



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
              value: data["index"]["Jammu and Kashmir"]
            },
            {
              id: "IN-MH",
              value: data["index"]["Maharashtra"]
            },
            {
              id: "IN-UP",
              value: data["index"]["Uttar Pradesh"]
            },
            {
              id: "US-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-RJ",
              value: data["index"]["Rajasthan"]
            },
            {
              id: "IN-AP",
              value: data["index"]["Andhra Pradesh"]
            },
            {
              id: "IN-MP",
              value: data["index"]["Madhya Pradesh"]
            },
            {
              id: "IN-TN",
              value: data["index"]["Tamil Nadu"]
            },
            {
              id: "IN-JH",
              value: data["index"]["Jharkhand"]
            },
            {
              id: "IN-WB",
              value: data["index"]["West Bengal"]
            },
            {
              id: "IN-GJ",
              value: data["index"]["Gujarat"]
            },
            {
              id: "IN-BR",
              value: data["index"]["Bihar"]
            },
            {
              id: "IN-TG",
              value: data["index"]["Telangana"]
            },
            {
              id: "IN-GA",
              value: data["index"]["Goa"]
            },
            {
              id: "IN-DN",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-DL",
              value: data["index"]["Delhi"]
            },
            {
              id: "IN-DD",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-CH",
              value: data["index"]["Chandigarh"]
            },
            {
              id: "IN-CT",
              value: data["index"]["Chhattisgarh"]
            },
            {
              id: "IN-AS",
              value: data["index"]["Assam"]
            },
            {
              id: "IN-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-AN",
              value: data["index"]["Andaman and Nicobar Islands"]
            },
            {
              id: "IN-KA",
              value: data["index"]["Karnataka"]
            },
            {
              id: "IN-KL",
              value: data["index"]["Kerala"]
            },
            {
              id: "IN-OR",
              value: data["index"]["Odisha"]
            },
            {
              id: "IN-SK",
              value: data["index"]["Sikkim"]
            },
            {
              id: "IN-HP",
              value: data["index"]["Himachal Pradesh"]
            },
            {
              id: "IN-PB",
              value: data["index"]["Punjab"]
            },
            {
              id: "IN-HR",
              value: data["index"]["Haryana"]
            },
            {
              id: "IN-UT",
              value: data["index"]["Uttarakhand"]
            },
            {
              id: "IN-LK",
              value: data["index"]["Ladakh"]
            },
            {
              id: "IN-MN",
              value: data["index"]["Manipur"]
            },
            {
              id: "IN-TR",
              value: data["index"]["Tripura"]
            },
            {
              id: "IN-MZ",
              value: data["index"]["Mizoram"]
            },
            {
              id: "IN-NL",
              value: data["index"]["Nagaland"]
            },
            {
              id: "IN-ML",
              value: data["index"]["Meghalaya"]
            }
          ];



          // Configure series tooltip
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.nonScalingStroke = true;
          polygonTemplate.strokeWidth = 0.5;

          // Create hover state and set alternative fill color
          var hs = polygonTemplate.states.create("hover");
          hs.properties.fill = am4core.color("#3c5bdc");

        }
        ) })

        $(document).ready(function()
      {
        var url = "http://127.0.0.1:5000/school" //error here
        $.getJSON(url,function(data)
        {

          


          // $.each(data.index,function(id,obj)
          // {
          //   console.log(id.Maharashtra)
          // })



          // Themes end
          am4core.useTheme(am4themes_animated);
          // Create map instance
          var chart = am4core.create("chartdiv3", am4maps.MapChart);

          // Set map definition
          chart.geodata = am4geodata_india2019High;
          chart.seriesContainer.draggable = false;
          chart.seriesContainer.resizable = false;
          chart.logo.height = -15;
          chart.maxZoomLevel = 1;


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
              value: data["index"]["Jammu and Kashmir"]
            },
            {
              id: "IN-MH",
              value: data["index"]["Maharashtra"]
            },
            {
              id: "IN-UP",
              value: data["index"]["Uttar Pradesh"]
            },
            {
              id: "US-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-RJ",
              value: data["index"]["Rajasthan"]
            },
            {
              id: "IN-AP",
              value: data["index"]["Andhra Pradesh"]
            },
            {
              id: "IN-MP",
              value: data["index"]["Madhya Pradesh"]
            },
            {
              id: "IN-TN",
              value: data["index"]["Tamil Nadu"]
            },
            {
              id: "IN-JH",
              value: data["index"]["Jharkhand"]
            },
            {
              id: "IN-WB",
              value: data["index"]["West Bengal"]
            },
            {
              id: "IN-GJ",
              value: data["index"]["Gujarat"]
            },
            {
              id: "IN-BR",
              value: data["index"]["Bihar"]
            },
            {
              id: "IN-TG",
              value: data["index"]["Telangana"]
            },
            {
              id: "IN-GA",
              value: data["index"]["Goa"]
            },
            {
              id: "IN-DN",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-DL",
              value: data["index"]["Delhi"]
            },
            {
              id: "IN-DD",
              value: data["index"]["Dadra and Nagar Haveli and Daman and Diu"]
            },
            {
              id: "IN-CH",
              value: data["index"]["Chandigarh"]
            },
            {
              id: "IN-CT",
              value: data["index"]["Chhattisgarh"]
            },
            {
              id: "IN-AS",
              value: data["index"]["Assam"]
            },
            {
              id: "IN-AR",
              value: data["index"]["Arunachal Pradesh"]
            },
            {
              id: "IN-AN",
              value: data["index"]["Andaman and Nicobar Islands"]
            },
            {
              id: "IN-KA",
              value: data["index"]["Karnataka"]
            },
            {
              id: "IN-KL",
              value: data["index"]["Kerala"]
            },
            {
              id: "IN-OR",
              value: data["index"]["Odisha"]
            },
            {
              id: "IN-SK",
              value: data["index"]["Sikkim"]
            },
            {
              id: "IN-HP",
              value: data["index"]["Himachal Pradesh"]
            },
            {
              id: "IN-PB",
              value: data["index"]["Punjab"]
            },
            {
              id: "IN-HR",
              value: data["index"]["Haryana"]
            },
            {
              id: "IN-UT",
              value: data["index"]["Uttarakhand"]
            },
            {
              id: "IN-LK",
              value: data["index"]["Ladakh"]
            },
            {
              id: "IN-MN",
              value: data["index"]["Manipur"]
            },
            {
              id: "IN-TR",
              value: data["index"]["Tripura"]
            },
            {
              id: "IN-MZ",
              value: data["index"]["Mizoram"]
            },
            {
              id: "IN-NL",
              value: data["index"]["Nagaland"]
            },
            {
              id: "IN-ML",
              value: data["index"]["Meghalaya"]
            }
          ];



          // Configure series tooltip
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.nonScalingStroke = true;
          polygonTemplate.strokeWidth = 0.5;

          // Create hover state and set alternative fill color
          var hs = polygonTemplate.states.create("hover");
          hs.properties.fill = am4core.color("#3c5bdc");

        }
        ) })


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



        
