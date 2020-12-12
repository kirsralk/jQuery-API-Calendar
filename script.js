//Display date at the top of the page

    //Retrieve today's date from moment.js
var today = moment().format('LLLL');

    //Show formatted date on page load
function showDate() {
    $("#currentDay").text(today);    
    console.log(today);
};

$(window).on("load", showDate());

//Time block functionality

    //Retrieve current hour from moment.js
var currentHour = moment().format('hA');
console.log(currentHour);