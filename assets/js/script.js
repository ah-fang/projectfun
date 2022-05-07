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
          for(i=0; i<data.length; i++) {
            var resultData = '<strong>Name:</strong> ' + data[i].name + '<br/>' +
            '<strong>Street:</strong> ' + data[i].street + '<br>' +
            '<strong>City:</strong> ' + data[i].city + '<br>' +
            '<strong>State:</strong> ' + data[i].state + '<br>';

            var phoneData = '<strong>Phone:</strong> ' + data[i].phone + '<br>';
            var websiteData = '<strong>Website:</strong> <a class="text-decoration-none" href="' + data[i].website_url + '">' + data[i].website_url + '</a>';

            $('#resultinfo').append('<hr>');

            if(data[i].website_url != null && data[i].phone != null) {
                $('#resultinfo').append(resultData, phoneData, websiteData);
            }
            else if(data[i].website_url != null) {
                $('#resultinfo').append(resultData, websiteData);
              }
            else if(data[i].phone != null) {
                $('#resultinfo').append(resultData, phoneData);
              }
            else{
                $('#resultinfo').append(resultData);
              }
          }
          $('html, body').animate({
              scrollTop: $("#result_data").offset().top
          }, 500);
      });
  });
});

$('#searchcityband').on('click',function(){
    location.replace("./results.html"); 
    var artist_name = $('#city-name-band').val()
    var response = fetch("https://rest.bandsintown.com/artists/"+artist_name+"/events?app_id=c51ac5b40dd7423187d2cc5cf1537562&date=upcoming").then(function(response) {
      response.json().then(function(data){
          $('#result_data').show();
          $('#bandModal').modal('hide');
          $('#sectionText').text('Concerts Result(s)');
          for(i=0; i<data.length; i++) {
              var resultData = 
              '<img src="'+data[i].artist.thumb_url+'"><br>' +
               '<strong>Artist Name:</strong> ' + data[i].artist.name + '<br/>' +
              '<strong>Venue Name:</strong> ' + data[i].venue.name + '<br/>' +
                  '<strong>Venue Location:</strong> ' + data[i].venue.location + '<br>' +
                  '<a class="text-decoration-none" href="' + data[i].artist.url + '" target="_blank" ><strong>Concert Details</strong></a>';
              $('#resultinfo').append('<hr>');
              $('#resultinfo').append(resultData);
          }
          $('html, body').animate({
              scrollTop: $("#result_data").offset().top
          }, 500);
      });
  });

  $('html, body').animate({
      scrollTop: $("#result_data").offset().top
  }, 500);
});

$('#findResults').on('click',function(){
  location.replace("./results.html"); 
  $('#result_data').show();
  $('#result_data_band').show();
  $('#sectionText').text('Brewery Result(s)');
  $('#bandBreweryModal').modal('hide');
  
//   $('html, body').animate({
//       scrollTop: $("#result_data_band").offset().top
//   }, 500);
});