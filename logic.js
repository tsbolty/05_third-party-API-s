$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

console.log(moment().format("H"))



// $(".container").append($("<div id= 'hour-10' class= 'row time-block ' value= 10>").text('10 AM'))
// $(".container").append($("<div id= 'hour-11' class= 'row time-block ' value= 11>").text('11 AM'))
// $(".container").append($("<div id= 'hour-12' class= 'row time-block ' value= 12>").text('12 PM'))
// $(".container").append($("<div id= 'hour-13' class= 'row time-block ' value= 13>").text('1 PM'))
// $(".container").append($("<div id= 'hour-14' class= 'row time-block ' value= 14>").text('2 PM'))
// $(".container").append($("<div id= 'hour-15' class= 'row time-block ' value= 15>").text('3 PM'))
// $(".container").append($("<div id= 'hour-16' class= 'row time-block ' value= 16>").text('4 PM'))
// $(".container").append($("<div id= 'hour-17' class= 'row time-block ' value= 17>").text('5 PM'))

var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var displayHour= ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i=0; i<hour.length; i++){
    //for(j=0; j<displayHour.length; j++)
    var createTextarea= $("<textarea>")
    var createDiv = ($("<div>").attr("id",'hour-'+hour[i]).attr("class", "row time-block").attr("value", hour[i]))
    $(".container").append(createDiv)
    //createDiv.text(displayHour[j])
    // createDiv.append$("<textarea>")
    
    if (hour[i]<12){
        var currentTime = displayHour[i]
    } else if(hour[i]>11){
        var currentTime = displayHour[i]
    
}
    // if(hour[i]<12){
    //     var ending= " AM"
    // } else if(hour[i]>11){
    //     ending= " AM"
    // }
    createDiv.append($("<div class= col-md-1 hour>").text(currentTime))
    createDiv.append($("<textarea class= 'col-md-10 description' id='memo-area'>"))

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

var memoArea = $("#memo-area")

$(".saveBtn").on("click", function(){

    event.preventDefault();
    var memo= $(".description").value;
    localStorage.setItem("description", JSON.stringify (memo));
    memoArea=JSON.parse(localStorage.getItem("description"))
})
    // localStorage.setItem("score", JSON.stringify(score) );
    // var printScore = JSON.parse(localStorage.getItem("score"));
    // highScoreDisplayBox.textContent = printInitials + "        Your high score: " + printScore;





