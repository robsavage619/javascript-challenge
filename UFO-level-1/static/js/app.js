// Assigning data.js to a variable
var tableData = data;

// Get a reference to the table body
const tbody = d3.select("tbody");

// Inserting the data into the table
data.forEach(tableData => {
  let row = tbody.append("tr");
  Object.values(tableData).forEach(value => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Selecting the Filter button
var filter = d3.select("#filter-btn")

// Creating a function for the corresponding filter button
filter.on("click", function(){

  tbody.html("");

  // Preventing page from refreshing
  d3.event.preventDefault();

  // Selecting input element
  var inputElement = d3.select("#datetime");

  // Finding the value property of said element
  var inputValue = inputElement.property("value");

   console.log(inputValue);

  // Use the form to filter Data
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  console.log(filteredData);

  // Using the filtered data to grab results
  filteredData.forEach(function(results) {

  console.log(results);

  // Appending a row for each result
  let row = tbody.append("tr");

  // Pulling out the values from each result - our columns serve as our key already
  Object.entries(results).forEach(function([key, value]) {
        console.log(key, value);

  // Appending those results to the table
  var cell = row.append("td");
  cell.text(value);

     });
  });
});
