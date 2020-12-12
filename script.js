//Display date at the top of the page
var today = moment().format('LLLL');

function showDate() {
    $("#currentDay").text(today);    
    console.log(today);
};

$(window).on("load", showDate());