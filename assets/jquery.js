// Global variables
var whatPlans;
var currentDate = dayjs().date();
var currentTime = dayjs();
var presentHour = dayjs().format("ha");
var workHours = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];


// if (localStorage.getItem("localHourlyTasks")) {
//   whatPlans= JSON.parse(localStorage.getItem("localHourlyTasks"));
// } else {
//   whatPlans = [];
// };

$("#currentDay").text(currentTime.format("DD/MM/YYYY h:mm a"));

for (i = 0; i < workHours.length; i++) {
  var row = $(`<div class="row"</div>`).appendTo(".container");
  let timeClass = "";
  if (workHours[i] < presentHour) 
    timeClass = "col-8 note-input past";
  else if (workHours[i] > presentHour) 
    timeClass = "col-8 note-input future";
  else if (workHours[i] = presentHour) 
    timeClass = "col-8 note-input present";

  $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(row);
  $(`<textarea class="${timeClass}" id="hour${i}"></textarea>`)
    .attr("placeholder", "Enter note here")
    .appendTo(row);
  $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
    .text("Save")
    .appendTo(row);

  console.log(presentHour);
  console.log(workHours[i]);
};

document.querySelector(".saveBtn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.target.id);
  console.log($(`textarea#${"#hour${i}"}`).val());
  console.log($(`textarea#${event.target.id}`).val());
  localStorage.setItem(event.target.id, $(`textarea#${event.target.id}`).val());
});

// Functions

//     newDay();
//     return;



// function newDay()
//reset all time blocks to future (color)
//empty all txt blocks
//empty local storage?
