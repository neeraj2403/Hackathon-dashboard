$(document).ready(function()
      {
        var url = "https://api.covid19india.org/data.json"
        $.getJSON(url,function(data)
        {
          
          var state = []
          var confirmed = []
          var recovered = []
          var death = []
          var date = []
          var total_confirmed = []
          var total_deceased = []
          var total_recovered = []
          var active_cases = []
          var record = ''

          $.each(data.statewise,function(id,obj)
          {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            death.push(obj.deaths)
            active_cases.push(obj.active)
            record+= '<tr>';
            record +='<td>' + obj.state + '</td>';
            record +='<td>' + obj.confirmed + '</td>';
            record +='<td>' + obj.recovered + '</td>';
            record +='<td>' + obj.deaths + '</td>';
            record +='<td>' + obj.active + '</td>';
            record += '</tr>';


            
            
          })
          $("#table").append(record);

          let items = data.cases_time_series
          console.log(items)

          var newval = []
          var listitems = []
          items.filter((item) => {
            items_date = new Date(item.dateymd)
            curr_date = new Date(moment().subtract(302, 'days').calendar())
            return items_date > curr_date

          }).forEach((item) =>{ listitems.push(item.dateymd)
          newval.push(item.totalconfirmed)})
            
          

          console.log(listitems)


          $.each(data.statewise,function(id,obj)
          {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            death.push(obj.deaths)
            
          })
          $.each(data.cases_time_series,function(id,obj)
          {
            date.push(obj.date)
            total_confirmed.push(obj.totalconfirmed)
            total_recovered.push(obj.totalrecovered)
            total_deceased.push(obj.totaldeceased)
            
          })
         
          state.shift()
          confirmed.shift()
          recovered.shift()
          death.shift()
          // console.log(state);
          var chart = document.getElementById("myChart1").getContext("2d");
          var chart = new Chart(myChart1,{
            type : "line",

            data : {
            labels : listitems,
              
              datasets : [
                {
                  label : "Confirmed Cases",
                  data : newval,
                  backgroundColor : "#ff0000",
                  borderColor:"#ff0000",
                  minBarLength : 100,
                  borderWidth : 5,
                  pointRadius:1,
                  
                  fill : false
                }
              ]
            },
            options : {
              responsive : false,
              // scales:{
              //   x:{
                  
                
              //     // min : '22 November',
              //     // max : '22 November'
              //   }
              // }

            }
          })
          var chart = document.getElementById("myChart2").getContext("2d");
          var chart = new Chart(myChart2,{
            type : "line",

            data : {
            labels : date,
              
              datasets : [
                
                 {
                  label : "Recovered Cases",
                  data : total_recovered,
                  backgroundColor : "#009900",
                  minBarLength : 100,
                  fill : false,
                  borderWidth : 0.5,
                  pointRadius:1,
                }
                
              ]
            },
            options : {
              responsive : false,
              // scales:{
              //   x:{
                  
                
              //     // min : '22 November',
              //     // max : '22 November'
              //   }
              // }

            }
          })
          var chart = document.getElementById("myChart3").getContext("2d");
          var chart = new Chart(myChart3,{
            type : "line",

            data : {
            labels : date,
              
              datasets : [
                
                {
                  label : "Deceased",
                  data : total_deceased,
                  backgroundColor : "#000000",
                  minBarLength : 100,
                  fill : false,
                  borderWidth : 0.5,
                  pointRadius:1,
                }
              ]
            },
            options : {
              responsive : false,
              // scales:{
              //   x:{
                  
                
              //     // min : '22 November',
              //     // max : '22 November'
              //   }
              // }

            }
          })
          
        })
      }
    )

