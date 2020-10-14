$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour= ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i=0; i<hour.length; i++){

    var currentTime = displayHour[i]

    // Will append 9 rows each with appropriate classes and data
    $(".container").append(`
      <div id= "hour-${hour[i]}" class= "row time-block">
        <div class= "col-md-1 hour">${currentTime}</div>
        <textarea class= "col-md-10 description" id= "memo-area" />
        <button class= "button saveBtn col-md-1">Save</button>
      </div>
    `)

    // Comparing Moment's hour to our iteration of hours
    if(moment().format("H") == hour[i]){
    $("#hour-"+ hour[i]).addClass("present")
    } else if(moment().format("H")> hour[i]){
    $("#hour-"+ hour[i]).addClass("past")
    } else if(moment().format("H")< hour[i]){
    $("#hour-"+ hour[i]).addClass("future")
}}

// Sets local storage by grabbing siblings and parent of save button values
$(".saveBtn").on("click", function(){
    var value= $(this).siblings(".description").val()
    var time= $(this).parent().attr("id")
    localStorage.setItem(time, value)
})

// Getting from local storage
for(var i = 9; i< 18; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}
