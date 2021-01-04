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

          var total_confirmed_30 = []
          var total_deceased_30 = []
          var total_recovered_30 = []
          var listitems = []
          items.filter((item) => {
            items_date = new Date(item.dateymd)
            curr_date = new Date(moment().subtract(8, 'days').calendar())
            return items_date > curr_date

          }).forEach((item) =>{ listitems.push(item.dateymd)
          total_confirmed_30.push(item.dailyconfirmed)
          total_recovered_30.push(item.dailyrecovered)
          total_deceased_30.push(item.dailydeceased)
        
        })
            
          

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
            type : "bar",

            data : {
            labels : listitems,
              
              datasets : [
                {
                  label : "Confirmed Cases",
                  data : total_confirmed_30,
                  backgroundColor : "#cf2b5f",
                  borderColor:"#cf2b5f",
                  minBarLength : 100,
                  borderWidth : 3,
                  pointRadius:1,
                  
                  fill : false
                }
              ]
            },
            options : {
              responsive : false,
              legend: {
                labels: {
                    fontColor: '#cf2b5f',
                    // fontSize: 18
                }
            },
              scales: {
                xAxes: [{
                    gridLines: {
                        display:false,
                        color: '#cf2b5f'

                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9

                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false,
                        color: '#cf2b5f'
                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9
                    }   
                }]
            }
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
            type : "bar",

            data : {
            labels : listitems,
              
              datasets : [
                
                 {
                  label : "Recovered Cases",
                  data : total_recovered_30,
                  backgroundColor : "#14cc9b",
                  borderColor:"#14cc9b",
                  minBarLength : 100,
                  fill : false,
                  borderWidth : 2,
                  pointRadius:1,
                }
                
              ]
            },
            options : {
              responsive : false,
              legend: {
                labels: {
                    fontColor: '#14cc9b',
                    // fontSize: 18
                }
            },
              scales: {
                xAxes: [{
                    gridLines: {
                        display:false,
                        color: '#14cc9b'
                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false,
                        color: '#14cc9b'
                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9
                    }   
                }]
            }
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
            type : "bar",

            data : {
            labels : listitems,
              
              datasets : [
                
                {
                  label : "Deceased",
                  data : total_deceased_30,
                  backgroundColor : "#84858a",
                  borderColor:"#84858a",
                  minBarLength : 100,
                  fill : false,
                  borderWidth : 3,
                  pointRadius:1,
                }
              ]
            },
            options : {
              responsive : false,
              legend: {
                labels: {
                    fontColor: '#A4A8CD',
                    // fontSize: 18
                }
            },


              scales: {
                
                xAxes: [{
                    gridLines: {
                        display:false,
                        color: '#84858a'
                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false,
                        color: '#84858a'
                    },
                    ticks:{
                      maxTicksLimit:8,
                      fontColor : '#A4A8CD',
                      fontSize: 9
                    }   
                }]
            }
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

