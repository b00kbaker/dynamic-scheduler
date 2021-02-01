// Global variables
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

if (localStorage.getItem("localHourlyTasks")) {
  whatPlans= JSON.parse(localStorage.getItem("localHourlyTasks"));
} else {
  whatPlans = [];
};


$("#currentDay").text(currentTime.format("DD/MM/YYYY h:mm a"));

for (i = 0; i < workHours.length; i++) {
  var row= $(`<div class="row"</div>`).appendTo(".container");
  let timeClass=""
  if(workHours[i] === presentHour){
    timeClass="col-8 note-input present"
  }
  else if (workHours[i] < presentHour) {
    timeClass="col-8 note-input future"
  } 
  else (workHours[i] > presentHour)
    timeClass="col-8 note-input past"


  $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(row);
  $(`<textarea class="${timeClass}" id="hour${i}"></textarea>`)
    .attr("placeholder", "Enter note here")
    .appendTo(row);
  $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
    .text("Save")
    .appendTo(row);

    console.log(presentHour)
};

document.querySelector(".saveBtn").addEventListener("click", function(event) {
  event.preventDefault();
  console.log(event.target.id)
  console.log($(`textarea#${event.target.id}`).val())
  localStorage.setItem(event.target.id,$(`textarea#${event.target.id}`).val())
  localStorage.setItem(event.target.id,$(`textarea#${event.target.id}`).val())

});


// Functions



// if (workHours > workHours.length - 1) {
//     newDay();
//     return;

// function saveTask()

// function newDay()
//reset all time blocks to future (color)
//empty all txt blocks
//empty local storage?

// How will it work?
//As each hour passes the color gets faded out and no more interation is allowed (if statmenent? if time = past no action on "done" button or editing text box)

