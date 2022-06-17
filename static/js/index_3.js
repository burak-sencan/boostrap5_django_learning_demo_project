document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: '90vh',
    // dateClick: function (day) {
    //   day.dayEl.style.backgroundColor = 'rgba(144, 190, 109,0.2)'
    // },
    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
      },
    },
    locale: 'tr',
    initialView: 'dayGridMonth',
    // selectable: true,
    // initialDate: '2022-04-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'Meeting',
        start: '2022-06-17T10:30:00',
        end: '2022-06-18T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },

      {
        title: 'Meeting',
        start: '2022-06-17T10:30:00',
        end: '2022-06-18T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
      {
        title: 'Meeting',
        start: '2022-06-17T10:30:00',
        end: '2022-06-18T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
      {
        title: 'Meeting',
        start: '2022-06-20T10:30:00',
        end: '2022-06-22T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
      {
        title: 'Meeting',
        start: '2022-06-17T10:30:00',
        end: '2022-06-18T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
      {
        title: 'Meeting',
        start: '2022-06-17T10:30:00',
        end: '2022-06-18T12:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
      {
        title: 'Meeting',
        start: '2022-06-30T16:30:00',
        end: '2022-06-30T18:30:00',
        url: 'http://127.0.0.1:8000/dashboard/pdCalender/',
      },
    ],
  })
  calendar.on('dateClick', function (info) {
    console.log('clicked on ' + info.dateStr)
  })
  calendar.render()
})
