var eventsArray = [
    {
      title  : '主日聚會',
      start  : '2022-12-11',
      color  : '#18A7A9'
    },
    {
      title  : '主日聚會',
      start  : '2022-12-18',
      color  : '#18A7A9'
    },
    {
        title  : '主日聚會',
        start  : '2022-12-25',
        end: '2022-12-30',
        color  : '#18A7A9',
        overlap: false,
              
    },
    {
      title  : '主日聚會',
      start  : '2022-12-04',
      color  : '#18A7A9'
    },
    {
      title  : '禱告聚會',
      start  : '2022-12-14',
      color  : '#559BED'
    },
    {
      title  : '禱告聚會',
      start  : '2022-12-07',
      color  : '#559BED'
    },
    {
      title  : '禱告聚會',
      start  : '2022-12-21',
      color  : '#559BED'
    },
    {
      title  : '禱告聚會',
      start  : '2022-12-28',
      color  : '#559BED'
    },
  ];

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 600,
        plugins: [ 'dayGrid', 'interaction' ],
        
        dateClick: function(info) { 
          let sign = prompt("新增節日：");
         
          
          eventsArray.push({
            date: info.dateStr,
            title: ""+sign.toLowerCase()
          });
          
          calendar.refetchEvents();
        },
      
        eventClick: function(info) {
          //alert(info.event.title)

          console.log(info)





        },
      
        events: function(info, successCallback, failureCallback) {
          successCallback(eventsArray);
        },
        eventColor: '#378006'
    });

    calendar.render();



 
      refreshCalendar()
 
    
    function refreshCalendar(){
      console.log("重新獲得行事曆資料")
      axios.get(`${BaseURl}Schedules`)
        .then(function(response){
            console.log(response.data)
            let Activity = response.data
  
            Activity.forEach((item,idx)=>{
              eventsArray.push({
                title  : `${item.title}`,
                start  : `${item.SCH_DATE}`,
                color  : '#18A7A9'
              })
            })
  
            calendar.refetchEvents();
            // GeneratorPopup(tmpActivity,info)
  
            // return response.data
        })
        .catch(function(err){
          console.log(err)
        });
    }



  });