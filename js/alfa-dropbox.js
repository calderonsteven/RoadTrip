//carga el googlemaps
var oMap = new GMap2(document.getElementById("map"));
var oMarker;


//extrae la informacion de la imagen
function extractGeoInfo(imgSrc){
	//http://www.nihilogic.dk/labs/exifjquery/
	//http://www.nihilogic.dk/labs/gps_exif_google_maps/			
	var oImg = new Image();  
	oImg.onload = function() {  
		EXIF.getData(oImg,   
			function() {  
				var aLat = EXIF.getTag(oImg, "GPSLatitude");  
				var aLong = EXIF.getTag(oImg, "GPSLongitude");  
	  
				if (!(aLat && aLong)) { alert("whoops, no GPS info "); return; } // whoops, no GPS info  
	  
				// convert from deg/min/sec to decimal for Google  
				var strLatRef = EXIF.getTag(oImg, "GPSLatitudeRef") || "N";  
				var strLongRef = EXIF.getTag(oImg, "GPSLongitudeRef") || "W";  
				var fLat = (aLat[0] + aLat[1]/60 + aLat[2]/3600) * (strLatRef == "N" ? 1 : -1);  
				var fLong = (aLong[0] + aLong[1]/60 + aLong[2]/3600) * (strLongRef == "W" ? -1 : 1);  
	  
				// center the google map and add a marker  
				oMap.setCenter(new GLatLng(fLat, fLong), 13);  
				oMarker = new GMarker(new GLatLng(fLat, fLong));  
				oMap.addOverlay(oMarker);  
				
				//only for debug
				var msg = "GPSLatitude:"+ fLat + ", GPSLongitude:"+ fLong;						
				//$("#exifData").html(msg);
				//console.log(msg);		
				//alert(msg);
				//$("#imgTest").attr("src", oImg.src);
				//only for debug
			}  
		);  
	}  
		  
	oImg.src = imgSrc;		
}

//extractGeoInfo("test.jpg");

///// loadFromTumblr
function loadFromTumblr() {
    //$('.nav nav-list').empty();
    var tumblrName = "img-roadtrip";//$('#tumblr_name').val();

    //Tumblr retrieval
    $.getJSON("http://" + tumblrName + ".tumblr.com/api/read/json?callback=?",
            function (data) {
                $.each(data.posts, function (i, posts) {
                    var photo500 = this['photo-url-500'];
                    if (photo500 == undefined) return;
                    photo500 = "//24.media.tumblr.com/bde93ea9012ca6f2ccaaf7a9410f0a52/tumblr_mjl283ypj31s8srpmo1_500.jpg";
                    var newLi = '<li><img id="imgTest" class="img-rounded"src="' + photo500 + '" /></li>';
                    $('.nav-list').append(newLi);;
                });
                addClickEventToImages();
            });
}

function addClickEventToImages(){
   $('.nav-list li img').click(function(){
      var srcImg = $(this).attr("src");
      extractGeoInfo(srcImg);
   });
}
//loadFromTumblr();
var imagenes = [ "IMG_2452.jpg",  "IMG_2647.JPG",  "IMG_2975.JPG",
  "IMG_1730.JPG",  "IMG_2484.JPG",  "IMG_2683.JPG",  "IMG_2990.JPG",
  "IMG_1975.JPG",  "IMG_2502.JPG",  "IMG_2791.JPG",  "IMG_2993.JPG",
  "IMG_2102.JPG",  "IMG_2530.jpg",  "IMG_2873.jpg",  "IMG_3179.JPG",
"IMG_0230.JPG",  "IMG_2233.JPG",  "IMG_2559.JPG",  "IMG_2958.jpg",  "IMG_3198.JPG",
"IMG_0232.JPG",  "IMG_2289.JPG",  "IMG_2626.JPG",  "IMG_2974.jpg",  "test.jpg"];
$.each(imagenes, function (i, posts) {
    var newLi = '<li><img id="imgTest" class="img-rounded"src="img/' + this + '" /></li>';
    $('.nav-list').append(newLi);;
});
addClickEventToImages();
