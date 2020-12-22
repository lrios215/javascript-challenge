// from data.js
var tableData = data;

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
    // var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(aliens);

    // var filteredData = aliens.filter(alien => alien.datetime === inputValue);
    
    // console.log(filteredData);

    //switch all entries to lowercase so it matches dataset
    var dateTime = d3.select("#datetime").property("value");
    var selectedCity = d3.select("#city").property("value").toLowerCase();
    var selectedState = d3.select("#state").property("value").toLowerCase();
    var selectedCountry = d3.select("#country").property("value").toLowerCase();
    var selectedShape = d3.select("#shape").property("value").toLowerCase();

    //equal table to filtered data
    filteredData = tableData;

    if (dateTime) {
        filteredData = filteredData.filter(record => record.datetime === dateTime);
    }
    if(selectedCity) {
        filteredData = filteredData.filter(record => record.city === selectedCity);
    }
    if(selectedState) {
        filteredData = filteredData.filter(record => record.state === selectedState);
    }
    if(selectedCountry) {
        filteredData = filteredData.filter(record => record.country === selectedCountry);
    }
    if(selectedShape) {
        filteredData = filteredData.filter(record => record.shape === selectedShape);
    }

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

