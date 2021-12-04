var d = new Date();
var today = new Date();
var time = today.getHours;

document.getElementById("currentDay").innerHTML = d;

$(".saveBtn").click(function(event) {
    event.preventDefault();
    var valueW = $(this).siblings(".plan").val();
    console.log(valueW);
    localStorage.setItem("9", valueW);
})

$("#9-hour .plan").val(localStorage.getItem("9"));

$(document).ready(function() {
    $(".time-block").each(function(index) {
        var hourInd=
        $(this).attr("id"); 
    });
});