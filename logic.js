$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var displayHour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]

for (i = 9; i < 18; i++) {
  // Will append 9 rows each with appropriate classes and data
  $(".container").append(`
  <div id= "hour-${i}" class= "row time-block">
    <div class= "col-md-1 hour">${displayHour[i-9]}</div>
    <textarea class= "col-md-10 description" />
    <button class= "button saveBtn col-md-1">Save</button>
  </div>
  `)

  // Comparing Moment's hour to our iteration of hours
  if (moment().format("H") == i) {
    $(`#hour-${i}`).addClass("present")
  } else if (moment().format("H") > i) {
    $(`#hour-${i}`).addClass("past")
  } else {
    $(`#hour-${i}`).addClass("future")
  }
}

// Sets local storage by grabbing siblings and parent of save button values
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val()
  var key = $(this).parent().attr("id")
  localStorage.setItem(key, value)
})

// Getting from local storage
for (var i = 9; i < 18; i++) {
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}