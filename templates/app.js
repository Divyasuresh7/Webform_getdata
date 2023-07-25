// // Function to render the follow-up dates on the calendar
// function renderFollowUpDates(followUpData) {
//     // Convert the data into an array of events compatible with FullCalendar
//     var events = followUpData.map(function(item) {
//         return {
//             title: item['Employee name'],
//             start: item['Follow Up']
//         };
//     });

//     // Initializing the calendar
//     var calendarEl = document.getElementById('calendar_main');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         events: events,
//         header: {
//             left: 'prev,next today',
//             center: 'title',
//             right: 'month,agendaWeek,agendaDay'
//         }
//     });
//     // Render the calendar
//     calendar.render();
// }

// // Fetching follow-up dates from the server
// async function fetchFollowUpData() {
//     try {
//         const response = await fetch('\get_follow_up_dates');
//         const data = await response.json();
//         renderFollowUpDates(data); //to render the dates
//     } catch (error) {
//         console.error('Error fetching follow-up data:', error);
//     }
// }

// fetchFollowUpData();
// // Function to render the follow-up dates on the calendar
// function renderFollowUpDates(followUpData) {
//     // Convert the data into an array of events compatible with FullCalendar
//     var events = followUpData.map(function(item) {
//         return {
//             title: item['Employee name'],
//             start: item['Follow Up']
//         };
//     });

//     // Initializing the calendar
//     var calendarEl = document.getElementById('calendar_main');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         events: events,
//         header: {
//             left: 'prev,next today',
//             center: 'title',
//             right: 'month,agendaWeek,agendaDay'
//         }
//     });
//     // Render the calendar
//     calendar.render();
// }

// // Fetching follow-up dates from the server
// async function fetchFollowUpData() {
//     try {
//         const response = await fetch('http://127.0.0.1:5000/get_follow_up_data');
//         const data = await response.json();
//         renderFollowUpDates(data); //to render the dates
//     } catch (error) {
//         console.error('Error fetching follow-up data:', error);
//     }
// }

// fetchFollowUpData();
// Function to render the follow-up dates and meeting agendas on the calendar
function renderFollowUpData(followUpData) {
    // Convert the data into an array of events compatible with FullCalendar
    var events = [];

    for (var date in followUpData) {
        if (followUpData.hasOwnProperty(date)) {
            events.push({
                title: followUpData[date],
                start: date
            });
        }
    }

    // Initialize the calendar
    var calendarEl = document.getElementById('calendar_main');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Your calendar configuration options go here
        // For example, you can specify the view, events, etc.
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

// Fetch the follow-up data from the server
async function fetchFollowUpData() {
    try {
        const response = await fetch('http://localhost:5000/get_follow_up_data'); 
        if(!response.ok){
            const msg =`There was an error"${response.status} ${response.statusText}"`
            throw new Error(msg)
        }
        const data = await response.json(); // Convert the JSON response to a JavaScript object
        renderFollowUpData(data); // Call the function to render the dates and meeting agendas on the calendar
    } catch (error) {
        console.error('Error fetching follow-up data:', error);
    }
}

// Call the function to fetch and render the follow-up dates and meeting agendas when the page loads
fetchFollowUpData();
