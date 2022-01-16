// from data.js
var tableData = data;

//get handle on the tbody element for use in the function below
var tbody=d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });