// Global variables
var whatPlans = [];
var currentDate = dayjs().date();
var currentTime = dayjs();
var pastHour = [];
var presentHour = dayjs().format("ha");
var futureHour = [];
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



$("#currentDay").text(currentTime.format("DD/MM/YYYY h:mm a"));

for (i = 0; i < workHours.length; i++) {
  var row= $(`<div class="row"</div>`).appendTo(".container");

  $(`<div class="col-2 time-block"></div>`).text(workHours[i]).appendTo(row);
  $(`<textarea class="col-8 note-input" id="input-${i}"></textarea>`)
    .attr("placeholder", "Enter note here")
    .appendTo(row);
  $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
    .text("Save")
    .appendTo(row);

};


function checkTime(){
  for (i = 0; i < workHours.length; i++) {
  if (workHours[i] === presentHour){
   presentHour.input-${i}.addClass("present")


    (#input-0 is 9am through #input-8 is 5pm)
    

  }
  };




  // } else if (Number(dateHour) < dayjs().hour()) {
  //   $(this).find('textarea').addClass('past').attr('disabled', 'disabled');
  //   $(this).find('.save-button').addClass('disabled').attr('disabled', true);
  // } else {
  //   $(this).find('textarea').addClass('future');
  // }
  

   







// Functions

//  function checkTime()
// Run every time the page loads/refreshes (contains if/else staments about past, present, future)

// if (workHours > workHours.length - 1) {
//     newDay();
//     return;

// function saveHour()

// function newDay()
//reset all time blocks to future (color)
//empty all txt blocks
//empty local storage?

// How will it work?
//As each hour passes the color gets faded out and no more interation is allowed (if statmenent? if time = past no action on "done" button or editing text box)

