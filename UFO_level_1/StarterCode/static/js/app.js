// Level 1: Automatic Table and Date Search (Required)

//1) Create a basic HTML web page or use the [index.html](StarterCode/index.html) 
//file provided (we recommend building your own custom page!).

//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data 
//for each UFO sighting.

//Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and 
//`comment` at the very least.

//Use a date form in your HTML document and write JavaScript code that will listen for 
//events and search through the `date/time` column to find rows that match user input.

//asign data from the data.js file to a variable
var aliens = data;
var tbody = d3.select ("tbody");

//select filter button
var filterbutton = d3.select("#filter-btn");

//select form
var form = d3.select("#filters");

//create event handlers
filterbutton.on("click", runEnter);
form.on("submit", runEnter);

//complete the event handler function for the form
function runEnter() {
    //prevent from refreshing
    d3.event.preventDefault();

    //select the input element and get the raw html node
    var inputElement = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(aliens);

    var filteredData = aliens.filter(alien => alien.datetime === inputValue);
    
    console.log(filteredData);

    //select table element by class name
    //var table = d3.select(".table table-striped");

    //append searched data into the table
    //table.append("td").text(value)

    //append searched data into the table
    filteredData.forEach((report) => {
        var row = tbody.append('tr');

        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });

};




