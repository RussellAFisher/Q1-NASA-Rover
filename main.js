$(document).ready(function() {
    var imgArray = [];
    var getURL = "";
    var marsDate="";
    var earthDate = "";
    var cameraAngle = "";
    var whichCamera = "";
    var lastAngle = "";
    var roverArray = [];
    var arrayIndex = 0;
    var getEarthDate = "";
    var getSolDate = "";
    $(".save").click(function(event) {
        $('#imgPlace').empty();
        $('#photoInfo').empty();
        event.preventDefault();
        cameraAngle = $('#cameraAngle option:selected').attr("id");
        whichCamera = $('#cameraAngle option:selected').attr("value");
        marsDate = $('#solDate').val();
        earthDate = $('#dateBox').val();
        console.log(cameraAngle);
        console.log(marsDate);
        console.log(earthDate);
        if (lastAngle !== cameraAngle){
          arrayIndex = 0;
        }
        if (earthDate === "") {
          $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + marsDate +"&camera="+ cameraAngle +"&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf").done(function(data) {
            console.log(data);
              roverArray = (data.photos);
              getEarthDate = data.photos[arrayIndex].earth_date;
              getSolDate = data.photos[arrayIndex].sol;
                  $('#imgPlace').append('<img src="' + roverArray[arrayIndex].img_src + '" width="100%vw"/>');
                  $('#photoInfo').append('<h3>This image was taken on: ' +getEarthDate+'</h3><br><h3>Which is mars mission day: '+getSolDate+'</h3><br><h3>Using the '+ whichCamera +' camera.</h3>');
                  arrayIndex += 1;
                  lastAngle = cameraAngle;
                  console.log(arrayIndex);
            });
            console.log("sol");
        }
        else if (marsDate === "") {
          $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + earthDate +"&camera="+ cameraAngle +"&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf").done(function(data) {
              roverArray = (data.photos);
              getEarthDate = data.photos[arrayIndex].earth_date;
              getSolDate = data.photos[arrayIndex].sol;
                  $('#imgPlace').append('<img src="' + roverArray[arrayIndex].img_src + '" width="100%vw"/>');
                  $('#photoInfo').append('<h3>This image was taken on: ' +getEarthDate+'</h3><br><h3>Which is mars mission day: '+getSolDate+'</h3><br><h3>Using the '+ whichCamera +' camera.</h3>');
                  arrayIndex += 1;
                  lastAngle = cameraAngle;
                  console.log(arrayIndex);
            });
            console.log("earth");
        }
    });
    // if ("#dateBox" === "mm/dd/yyyy") {
    //     if ("#cameraAngle" == Mast) {
    //         getURL = ("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + marsDate + "&camera=mast&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf");
    //     }
    // } else if ("#solDate" === "") {
    //     if ("#cameraAngle" == Mast) {
    //         getURL = ("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + marsDate + "&camera=mast&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf");
    //     }
    // }
    // $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1001&camera=fhaz&api_key=t5rTsXuOkLjqX0VKm3ZDXDF0pUghwSUtTB5Azlgf").done(function(data) {
    //     roverArray = (data.photos);
    //     roverArray.forEach(function(data) {
    //         $('#imgPlace').append('<img src="' + roverArray[0].img_src + '" width="100%vw"/>');
    //     });
    //     // for (i = 0; i<roverArray.length; i++) {
    //     //     imgArray += roverArray[i].img_src;
    //     // }
    //     console.log(imgArray);
    // });
});
