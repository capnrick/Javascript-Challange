// from data.js
var tableData = data;

//get handle on the tbody element for use in the function below
var tbody=d3.select("tbody");

// load data from data.js to table body
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


  //getting handle on the button and input field
  var button = d3.select("#filter-btn");
  var inputField = d3.select("#form");

  //event handlers for button click or keyboard enter 
  button.on("click",runEnter);
  inputField.on("submit", runEnter);
  
//run this function upon either button press or enter from keyboard  
  function runEnter() {

  //prevent page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    //save user input intoe variable inputValue
    var inputValue = inputElement.property ("value");

    //verify the input was read correctly
    console.log (inputValue)

   
    
    if (inputValue===""){
        
        //use the original data from data.js
        var filteredData = tableData; 

    }
        
    
    else{
        //filter the data based on the user's input of the date
        var filteredData = tableData.filter(x => x.datetime===inputValue)
    }

    tbody.html("");

    // //add html code to exisiting div
    // d3.select(".classofsomething").html("<img src='https://gph.to/2krfn0w'");

    filteredData.forEach(function(ufoReport) {
      
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
    
    

  };




