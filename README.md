# 05_third-party-API-s

I created every element on the page dynamically. I did not touch the html document other than to write script tags

I started by inserting the formula to display the correct date at the top of the page.

I created a variable that holds an array of numbers nine to seventeen to be called later, so I could inject those numbers as values and Id's of certain elements.

I also created a variable to store the names of the times to be displayed and looped through that to minimize the number of lines of code

I created the div elements dynamically, and added classes, id's and values in the same line of code

I created the text area and button for each <div> and appended those to the creation of each div

I wrote an if statement to determine if the id of certain elements are equal to, greater than or less than the current hour

This updates in real time.

For the save button, I stored the value of each discription to its parent Id and set that to local storage

The last several lines retrieve each value and stores them in the appropriate <div>.

Unfortunately this step had to be done in a repetetive fashion

I hope it shows that I really tried to streamline my code and make it as efficient as possible in as few lines as possible.

I created all elements and functionality of those elements using only JQuery and I hope that effort shows.
