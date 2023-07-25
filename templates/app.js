// Function to render the follow-up dates on the calendar
function renderFollowUpDates(followUpData) {
    // Convert the data into an array of events compatible with FullCalendar
    var events = followUpData.map(function(item) {
        return {
            title: item['Employee name'],
            start: item['Follow Up']
        };
    });

    // Initializing the calendar
    var calendarEl = document.getElementById('calendar_main');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        events: events,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        }
    });
    // Render the calendar
    calendar.render();
}

// Fetching follow-up dates from the server
async function fetchFollowUpData() {
    try {
        const response = await fetch('\get_follow_up_dates');
        const data = await response.json();
        renderFollowUpDates(data); //to render the dates
    } catch (error) {
        console.error('Error fetching follow-up data:', error);
    }
}

fetchFollowUpData();
