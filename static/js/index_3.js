document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    dateClick: function (day) {
      day.dayEl.style.backgroundColor = 'rgba(144, 190, 109,0.2)'
    },
    dayMaxEventRows: true, // for all non-TimeGrid views
    views: {
      timeGrid: {
        dayMaxEventRows: 6, // adjust to 6 only for timeGridWeek/timeGridDay
      },
    },
    locale: 'tr',
    initialView: 'dayGridMonth',
    selectable: true,
    initialDate: '2022-04-07',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    events: [
      {
        title: 'All Day Event',
        start: '2022-04-01',
      },
      {
        title: 'Long Event',
        start: '2022-04-07',
        end: '2022-04-10',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2022-04-09T16:00:00',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2022-04-16T16:00:00',
      },
      {
        title: 'Conference',
        start: '2022-04-11',
        end: '2022-04-13',
      },
      {
        title: 'Meeting',
        start: '2022-04-12T10:30:00',
        end: '2022-04-12T12:30:00',
      },
      {
        title: 'Lunch',
        start: '2022-04-12T12:00:00',
      },
      {
        title: 'Meeting',
        start: '2022-04-12T14:30:00',
      },
      {
        title: 'Birthday Party',
        start: '2022-04-13T07:00:00',
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2022-04-28',
      },
    ],
  })
  calendar.on('dateClick', function (info) {
    console.log('clicked on ' + info.dateStr)
  })
  calendar.render()
})
