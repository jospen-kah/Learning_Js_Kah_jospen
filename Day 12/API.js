const myLocation = document.getElementById("demo");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        
    }
    else{
        myLocation.innerHTML= "GeoLocation is not supported by this browser";
    }
}

function showPosition(position) {
    myLocation.innerHTML =  "latitude:" + position.coords.latitude +
     "<br>longitude: "+ position.coords.longitude ;
     console.log(position.coord.latitude)
}