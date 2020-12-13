//Display date at the top of the page

    //Retrieve today's date from moment.js
var today = moment().format('LLLL');

    //Show formatted date on page load
function showDate() {
    $("#currentDay").text(today);    
    console.log(today);
};

$(window).on("load", showDate());
// $(window).on("load", blockColor());
//Time block functionality

    //Retrieve current hour from moment.js
var currentHour24 = moment().format('HH');
// var currentHour24 = 0;

console.log("The current hour in 24hr time is: " + currentHour24);

function testTest() {
    if (currentHour24 == 17){console.log("true")};
};

testTest();
blockColor();

//for time blocks, if id=current hour, change class to present
//if id = past hour, change class to past
//if id = future hour, change class to future

function blockColor(){
    console.log("this function is working");
    
    // If it's before 9am, all time blocks in the future
    if (currentHour24 < 9) {
        console.log("it's currently before 9am");

    // Else if statements for 8 hours of workday
    } else if (currentHour24 == 9) {
        $("#9am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 10) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 11) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 12) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 13) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 14) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 15) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 16) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("past");
        $("#4pm").removeClass("future").addClass("present");
    }

    else if (currentHour24 == 17) {
        $("#9am").removeClass("future").addClass("past");
        $("#10am").removeClass("future").addClass("past");
        $("#11am").removeClass("future").addClass("past");
        $("#12pm").removeClass("future").addClass("past");
        $("#1pm").removeClass("future").addClass("past");
        $("#2pm").removeClass("future").addClass("past");
        $("#3pm").removeClass("future").addClass("past");
        $("#4pm").removeClass("future").addClass("past");
        $("#5pm").removeClass("future").addClass("present");
    }
    // All blocks past if after 6pm
    else if (currentHour24 > 17) {
        console.log("it's currently after 5pm");
        $(".time-block").removeClass("future");
        $(".time-block").addClass("past");
    }
  };

  // Event listeners for save buttons to store inputs
  var saveBtn9 = $("#btn9");
  var userInput9 = $("#9AMinput");
  
$(saveBtn9).on("click", function (e){
    e.preventDefault();
    // alert("this button works");
    var userInput9 = $("#9AMinput").val().trim();
    localStorage.setItem("9amHour",(userInput9));
});
    var savedInput1 = (localStorage.getItem("9amHour"));
    userInput9.val(savedInput1);
