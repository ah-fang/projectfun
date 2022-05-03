//all variables

// var results = document.querySelector("results");
// var title = document.querySelector("title");
// var text = document.querySelector("text");
var infoFormEl = document.querySelector("#info-form");
var zipInputEl = document.querySelector("#zip");

// all functions

var response = fetch("https://api.openbrewerydb.org/breweries").then(function(response) {
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

document.getElementById([buttonID1]).addEventListener('click', functionName);
document.getElementById([buttonID2]).addEventListener('click', function2Name);
document.getElementById([buttonID3]).addEventListener('click', function3Name);

function bandsForm(event) {
  event.preventDefault();
  currentForm = "getForm";
  //get list of stuff
  send("api/cheese", null, "GET");
}


function send(endpoint, data, method) {
  let url= "https://api.openbrewerydb.org/breweries" + endpoint;
  let h = new Headers();
  if(data) {
    h.append("Content-Type", "application/json")
  }
  let readable = new Request(url, {
    method,
    headers: h,
    body: data,
  });
  fetch(req)
  .then((res) => res.json())
  .then(success)
  .catch(fail);
}
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

example function:

function buildUrl() {
    if(cityChecked) {
        if(response.ok) {
            var cityName = (cityInput).value;
        apiUrl += "?by_city=" + cityName;
        }
    }
    if(zipChecked) {
        if(response.ok) {
            var zipCode = (zipInput).value;
        apiUrl += "?by_postal=" + zipCode;
        }
    }
    if(brewTypeChecked) {
        if(response.ok) {
            var brewType = (brewTypeInput).value;
        apiUrl += "?by_type=" + brewType;
        }
    }    
}

3. Create event listeners for:
- each submit button (bands, breweries, bands-and-breweries) to generate modal content
- 
  */
