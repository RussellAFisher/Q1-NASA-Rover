$(document).ready(function() {
  var imgArray = [];
  var getURL="";
  // if (dateBox=== "mm/dd/yyyy")
    $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1001&camera=fhaz&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf").done(function(data) {
        roverArray = (data.photos);
        roverArray.forEach(function(data) {
            $('#imgPlace').append('<img src="' + roverArray[0].img_src +'" width="100%vw"/>');
        });
        // for (i = 0; i<roverArray.length; i++) {
        //     imgArray += roverArray[i].img_src;
        // }
        console.log(imgArray);
    });
});
