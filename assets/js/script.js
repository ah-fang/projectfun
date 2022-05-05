//BandsInTown API key
var token = "c51ac5b40dd7423187d2cc5cf1537562";
// var bandsUrl = "https://rest.bandsintown.com/artists/" + artistName + "?app_id=" + token; 

$('#searchcity').on('click',function(){
  var city_name = $('#city-name').val()
  var response = fetch("https://api.openbrewerydb.org/breweries/search?query="+city_name).then(function(response) {
      response.json().then(function(data){
          $('#result_data').show();
          $('#exampleModal').modal('hide');
          $('#sectionText').text('Brewery Result(s)');
          console.log(data.length);
          for(i=0; i<data.length; i++) {
              if(data[i].website_url != null) {
                  var resultData = '<strong>Name:</strong> ' + data[i].name + '<br/>' +
                      '<strong>Street:</strong> ' + data[i].street + '<br>' +
                      '<strong>City:</strong> ' + data[i].city + '<br>' +
                      '<strong>State:</strong> ' + data[i].state + '<br>' +
                      '<strong>Zip Code:</strong> ' + data[i].postal_code + '<br>' +
                      '<strong>Phone:</strong> ' + data[i].phone + '<br>' +
                      '<strong>Website:</strong> <a class="text-decoration-none" href="' + data[i].website_url + '">' + data[i].website_url + '</a>';
              }
              else{
                  var resultData = '<strong>Name:</strong> ' + data[i].name + '<br/>' +
                      '<strong>Street:</strong> ' + data[i].street + '<br>' +
                      '<strong>City:</strong> ' + data[i].city + '<br>' +
                      '<strong>State:</strong> ' + data[i].state + '<br>' +
                      '<strong>Zip Code:</strong> ' + data[i].postal_code + '<br>' +
                      '<strong>Phone:</strong> ' + data[i].phone;
              }
              $('#resultinfo').append('<hr>');
              $('#resultinfo').append(resultData);
          }
          $('html, body').animate({
              scrollTop: $("#result_data").offset().top
          }, 500);
      });
  });
});

$('#searchcityband').on('click',function(){
  $('#result_data').show();
  $('#bandModal').modal('hide');
  $('#sectionText').text('Band Result(s)');
  $('html, body').animate({
      scrollTop: $("#result_data").offset().top
  }, 500);
});

$('#findBandBrewery').on('click',function(){
  $('#result_data').show();
  $('#result_data_band').show();
  $('#sectionText').text('Brewery Result(s)');
  $('#bandBreweryModal').modal('hide');
  $('html, body').animate({
      scrollTop: $("#result_data_band").offset().top
  }, 500);
});