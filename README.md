# JavaScript Challenge - JavaScript and DOM Manipulation

# ALIENS-R-REAL Searchable UFO Sightings DataSet

![UFO](image/ufo_2400.png)Source: https://www.military.com/daily-news/2019/09/18/ufo-videos-are-footage-real-unidentified-objects-us-navy-acknowledges.html 

The extra-terrestrial menace has come to Earth and we here at `ALIENS-R-REAL` have collected all of the eye-witness reports we could to prove it! All of our sightings now available online for the world to see and then the matter will finally be put to rest.

A dynamic table has been created using the dataset from: (StarterCode/static/js/data.js). Users can filter the table data for specific values (seee level 1 and level 2 directions below). Web pages designed with trusted coding languages: JavaScript, HTML, and CSS, and D3.js.

The planet Earth needs to know what we have found!

### Level 1: Date Search Only

* This basic HTML web page allows the user to search for a specific sighting from 1/1/2010 to 1/13/2010

* The UFO dataset provided is in the form of an array of JavaScript objects, the code appends a table the web page and then adds new rows of data for each UFO sighting.  JavaScript code listens for the event and searches through date/time in our dataset and appends to the table. You can build your own table based on selected date sightings!

* The resulting rows will contain: `date/time`, `city`, `state`, `country`, `shape`, and `comment` for each sighting that matches the date searched.

### Level 2: Looking for a more detailed search?  Multiple Search Categories

* Level 2 has all the features of level 2 but uses multiple 'input' tags that allows the user to create a more detailed search using multiple filters based on the following table columns:
  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

* Note: Reload the page in order to reset the table and start again.  If nothing comes up then try to reduce the number of filters used, for example start with state only and then add other filters to narrow it down. 

- - -

### Dataset:

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -