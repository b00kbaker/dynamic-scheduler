


  var whatPlans=[]
  var currentDate=dayjs().date()
  var currentTime=dayjs()
  var pastHour=[]
  var presentHour=dayjs().hour()
  var futureHour=[] 
  var workHours= ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]   


$("#currentDay").text(currentTime.format('DD/MM/YYYY h:mm a'));

// console.log()

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

 //Time is only 9am-5pm   (diff)

 //Future time in 1 color --All colors are already plugged into CSS
 //Past is 2 color
 //Present is 3 color
 
 //Reset color on every hour (event listener on time?)  

 //When "save" is clicked add text plans + assigned time to localStorage  

 //Recognized new day (AKA midnight) and all text empties