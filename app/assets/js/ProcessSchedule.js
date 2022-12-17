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
          alert(info.event.title)
        },
      
        events: function(info, successCallback, failureCallback) {
          successCallback(eventsArray);
        },
        eventColor: '#378006'
    });

    calendar.render();
  });