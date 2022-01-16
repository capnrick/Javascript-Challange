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

  var button = d3.select("#filter-btn");

  var inputField = d3.select("datetime");

  button.on("click",function(){

    //add html code to exisiting div
    d3.select(".classofsomething").html("<img src='https://gph.to/2krfn0w'");

  });

  inputField.on("change",function(){

    //Save the input into variable newText
    var newText = d3.event.target.value;
    console.log(newText);


  });