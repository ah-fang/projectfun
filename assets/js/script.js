//BandsInTown API key
var token = "c51ac5b40dd7423187d2cc5cf1537562";


//brewery search function
$('#searchcity').on('click',function(){
  var city_name = $('#city-name').val()

  var response = fetch("https://api.openbrewerydb.org/breweries/search?query="+ city_name).then(function(response) {
      response.json().then(function(data){
          $('#result_data').show();
          $('#exampleModal').modal('hide');
          $('#brewTitle').text('Brewery Result(s)');
          for(i=0; i<data.length; i++) {
            var resultData = '<strong>Name:</strong> ' + data[i].name + '<br/>' +
            '<strong>Street:</strong> ' + data[i].street + '<br>' +
            '<strong>City:</strong> ' + data[i].city + '<br>' +
            '<strong>State:</strong> ' + data[i].state + '<br>';

            var phoneData = '<strong>Phone:</strong> ' + data[i].phone + '<br>';
            var websiteData = '<strong>Website:</strong> <a class="text-decoration-none" href="' + data[i].website_url + '">' + data[i].website_url + '</a>';

            $('#resultinfobrew').append('<hr>');

            //don't append website/phone number if no data is returned
            if(data[i].website_url != null && data[i].phone != null) {
                $('#resultinfobrew').append(resultData, phoneData, websiteData);
            }
            else if(data[i].website_url != null) {
                $('#resultinfobrew').append(resultData, websiteData);
              }
            else if(data[i].phone != null) {
                $('#resultinfobrew').append(resultData, phoneData);
              }
            else{
                $('#resultinfobrew').append(resultData);
              }
          }
          $('html, body').animate({
              scrollTop: $("#result_data").offset().top
          }, 500);
      });
  });
});

//artist search function
$('#searchcityband').on('click',function(){
  var artist_name = $('#city-name-band').val()

    var response = fetch("https://rest.bandsintown.com/artists/"+ artist_name + "/events?app_id=c51ac5b40dd7423187d2cc5cf1537562&date=upcoming")
    .then(function(response) {
        response.json().then(function(data){
            $('#bandModal').modal('hide');
            $('#bandTitle').text('Artist Result(s)');
            
            for(i=0; i<data.length; i++) {
                var resultData = 
                '<img src="'+ data[i].artist.thumb_url + '"><br>' +
                '<strong>Artist Name:</strong> ' + data[i].artist.name + '<br/>' +
                '<strong>Venue Name:</strong> ' + data[i].venue.name + '<br/>' +
                    '<strong>Venue Location:</strong> ' + data[i].venue.location + '<br>' +
                    '<a class="text-decoration-none" href="' + data[i].artist.url + '" target="_blank" ><strong>Concert Details</strong></a>';
                $('#resultinfoband').append('<hr>');
                $('#resultinfoband').append(resultData);
            }

            $('html, body').animate({
                scrollTop: $("#result_data").offset().top
            }, 500);
        })
        .catch(function(error) {
          console.log(error);
        });
        
  });

  $('html, body').animate({
      scrollTop: $("#result_data").offset().top
  }, 500);
});
