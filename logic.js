$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour= ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i=0; i<hour.length; i++){
    var createTextarea= $("<textarea>")
    var createDiv = ($("<div>").attr("id",'hour-'+hour[i]).attr("class", "row time-block").attr("value", hour[i]))
    $(".container").append(createDiv)
    
    
    if (hour[i]<12){
        var currentTime = displayHour[i]
    } else if(hour[i]>11){
        var currentTime = displayHour[i]    
    }

    createDiv.append($("<div class= col-md-1 hour>").text(currentTime))
    createDiv.append($("<textarea class= 'col-md-10 description' id= 'memo-area'>"))
    
    createDiv.append($("<button class='button saveBtn col-md-1'>"))
    $("button").text("Save")

    if(moment().format("H") == hour[i]){
    $("#hour-"+ hour[i]).addClass("present")
    } else if(moment().format("H")> hour[i]){
    $("#hour-"+ hour[i]).addClass("past")
    } else if(moment().format("H")< hour[i]){
    $("#hour-"+ hour[i]).addClass("future")
}
}


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
