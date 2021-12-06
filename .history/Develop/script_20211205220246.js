//display today's date
$("#currentDay").text(moment().format("dddd, MMMM Do"));
var currentTime = moment().format("H A");

$(document).ready(function() {
    //when the user clicks the save button
    $(".saveBtn").click(function(event) {
        //pull the time ID from the chosen slot
        var value = $(this).siblings(".plan").val();
        var time = $(this).parent.attr("id");
        var dateAdded = moment().format("dddd, MMMM Do");

        events.push({description: value, time: time, date: dateAdded});

        //put in local storage
        localStorage.setItem("events", JSON.stringify(events));
    });

    //check if user's current time is before or after the selected time slot
function timeCheck() {
    //get current hour
    var hourNow = moment().hours();

    //check hour of each block
    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);


    //compare and assign classes
    if (timeBlockHour < hourNow) {
        $(this).addClass("past");
    }

    else if (timeBlockHour > hourNow) {
        $(this).removeClass("past");
        $(this).addClass("future");
    }

    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("present");
    }
});
}

//call the function
timeCheck();

//check if current time has changed
var secondsLeft = 15;
function setTime() {
    setInterval(function() {
        secondsLeft--;

        if (secondsLeft === 0) {
            timeCheck();
            secondsLeft = 15;
        }

    }, 1000);
    }
    setTime();

//check if the date has rolled over

//check localstorage for saved data in any time block
var storedEvents = JSON.parse(localStorage.getItem("events"));
$("#9 .plan").val(localStorage.getItem("9"));
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#1 .plan").val(localStorage.getItem("1"));
$("#2 .plan").val(localStorage.getItem("2"));
$("#3 .plan").val(localStorage.getItem("3"));
$("#4 .plan").val(localStorage.getItem("4"));
$("#5 .plan").val(localStorage.getItem("5"));
var interval = setInterval(timeCheck, 15000)
});
