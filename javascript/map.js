
function initMap(){
 var options = {
   zoom:13,
   center: {lat:52.6298,lng:-1.1394}
 }

 var map = new
  google.maps.Map(document.getElementById('map'),options);

var marker = new google.maps.Marker({
position:{lat:52.6298,lng:-1.1394},
map:map
});
  }
