//all variables

// var results = document.querySelector("results");
// var title = document.querySelector("title");
// var text = document.querySelector("text");
var infoFormEl = document.querySelector("#info-form");
var zipInputEl = document.querySelector("#zip");


// all functions

var response = fetch("https://api.openbrewerydb.org/breweries?by_city=los_angeles").then(function(response) {
    response.json().then(function(data){
        console.log(data);
    });
  });

console.log(response);

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };


//all event listeners

  infoFormEl.addEventListener("submit", formSubmitHandler);



/*
Expected Behavior:
  1. A button is clicked which triggers a modal (handled already in Bootstrap, but needs filling with filters) 
  2. The modal will present optional filters for the user to check (if checkboxes) or fill out (if inputs)
  3. Checking/filling out the filters will add a query + the value to the URL for the API call
    - Add catch: small explanatory red text should appear by filters if button is clicked with no filters used, and do NOT call apis or progress to results page.
  4. The final API call fetches the requested data
  5. The requested data is displayed in a clear and readable fashion to the user, on the webpage itself(results page).

Logic sequence
1. create vars for:
- every possible filter (generate dynamically and append to parent modals only when applicable)
- results page div

2. Create functions to: 
- dynamically add filters to each modal
- capture user responses to filters (checkboxes, inputs) and feed to apiUrl
- fetch from concert api
- fetch from brewery api (run both these functions in the bands-and-breweries modal)
- dynamically return api response(s) and display on results webpage 


3. Create event listeners for:
- each submit button (bands, breweries, bands-and-breweries) to generate modal content
- 
  */
