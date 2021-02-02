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
  localStorage.setItem(timeSchedule, text);
});



function newDay(){
if(presentHour == "12am"){
txt = "col-8 not-input future"
localStorage.clear();
}; 

console.log(presentHour);

newDay()};
