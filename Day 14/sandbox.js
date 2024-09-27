const myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function()
    {
        myResolve("I need to know this thing at the tip of my fingers")}, 3000);
       

});
myPromise.then(function(value){
    document.getElementById("demo").innerHTML = value;
    document.getElementById("dem").innerHTML = value;
})