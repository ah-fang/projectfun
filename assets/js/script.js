// var results = document.querySelector("results");
// var title = document.querySelector("title");
// var text = document.querySelector("text");

var response = fetch("https://api.openbrewerydb.org/breweries?by_city=los_angeles").then(function(response) {
    response.json().then(function(data){
        console.log(data);
    });
  });

console.log(response);
