$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour= ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i=0; i<hour.length; i++){

    var currentTime = displayHour[i]

    $(".container").append(`
      <div id= "hour-${hour[i]}" class= "row time-block">
        <div class= "col-md-1 hour">${currentTime}</div>
        <textarea class= "col-md-10 description" id= "memo-area" />
        <button class= "button saveBtn col-md-1">Save</button>
      </div>
    `)

    if(moment().format("H") == hour[i]){
    $("#hour-"+ hour[i]).addClass("present")
    } else if(moment().format("H")> hour[i]){
    $("#hour-"+ hour[i]).addClass("past")
    } else if(moment().format("H")< hour[i]){
    $("#hour-"+ hour[i]).addClass("future")
}}

$(".saveBtn").on("click", function(){
    var value= $(this).siblings(".description").val()
    var time= $(this).parent().attr("id")
    localStorage.setItem(time, value)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
