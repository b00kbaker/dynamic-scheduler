var whatPlans;
var text;
var currentDate = dayjs().date();
var currentTime = dayjs();
var presentHour = dayjs().format("ha");
var workHours = [
  "09am",
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

for (let i = 0; i < workHours.length; i++) {
  var row = $(`<div class="row"</div>`).appendTo(".container");
  let timeClass = "";
  
  console.log(workHours[i], presentHour)
  if (workHours[i] < presentHour) {
    timeClass = "col-8 note-input past";
  } else if (workHours[i] > presentHour) {
    timeClass = "col-8 note-input future";
  } else if (workHours[i] == presentHour) {
    timeClass = "col-8 note-input present";
  }

  $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(row);
  var txt = $(`<textarea class="${timeClass}" id="hour${i}"></textarea>`)
    .attr("placeholder", "Enter note here")

    .appendTo(row);
  $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
    .text("Save")
    .appendTo(row);

  var saveText = localStorage.getItem(workHours[i]);
  txt.val(saveText);
  console.log(presentHour);
  console.log(workHours[i]);
}

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  console.log($(this).siblings("div").text());
  console.log($(this).siblings("textarea").val());
  text = $(this).siblings("textarea").val();
  var timeSchedule = $(this).siblings("div").text();
  // console.log($`textarea#${"#hour${i}"}`);
  // console.log($(`textarea#${event.target.id}`).val());
  localStorage.setItem(timeSchedule, text);
});

// var saveText= localStorage.getItem(text);
// txt.val(saveText)
//Do I have to have an array to push info to? Still issue with defining/selecting all time blocks (aka key). Each time block has an id of "hour0"-"hour8", should I just make an if statement for each one?  or  use var hourBlocks=["hour0", "hour1"]?

// function newDay()
///////////////////////}

//reset all time blocks to future (color)
// workHours.timeClass = "col-8 note-input future";

//empty all txt blocks////////////////////
// all <textarea> to .placeholder

//empty local storage?
// localStorage.clear();

// newDay(); Check this function every time the page is loaded
