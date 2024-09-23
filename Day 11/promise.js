// async function myDisplayer(){
//     let myPromise = new Promise((resolve) => {
//         setTimeout(()=> {resolve("I Love You!!!");}, 3000)
//     });
//     let result = await myPromise;
//     alert(result)
// }

// myDisplayer();
// let myPromise = new
// Promise(function(myResolve, myReject)
// {
//     let x = 0;
//     if(x == 0){
//         myResolve("OK");
//     } else{
//         myReject("error");
//     }
// });

// myPromise.then(
//     function(value){
//         myDisplayer(value);
//     },
//     function(error){
//     myDisplayer(error);
// }
// );

// setTimeout(function() { myFunction("I love you!!!!"); }, 3000);

// function myFunction(value){
//     document.getElementById("demo").innerHTML = value;
// }

//using callback

// function getFile(myCallback){
//     let req = new XMLHttpRequest();
//     req.onload = function(){
//         if (req.status == 200){
//             myCallback(this.responseText);
//         } else{
//             myCallback("error: " + req.status);
//         }
//     }
//     req.open('GET' , "mycar.html")
//     req.send();
// }
// getFile(myDisplayer);
// async function showavatar(){
// let response = await fetch('data.json');
// let user = await response.json();
// console.log(user) ;
// }

// showavatar();

class thenable{
    constructor(num){
        this.num = num;
    }
    then(resolve, reject){
        alert(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }

}
async function f(){
 let results = await new thenable(1);
 alert(results)

}
f();