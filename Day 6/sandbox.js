document.addEventListener("DOMContentLoaded", function (){
    let y = Math.floor(Math.random()*10 + 1);
    
    document.getElementById("guess").onclick = function (){
       let x = document.getElementById("number").value;
       console.log(y)
    if(x == y ){
        alert("You guessed the write Number " + y); 
    }
    else if(x > y){
        alert("Sorry try again your choose a higher Number");
    }
    else if(x < y){
        alert("Sorry try again choose a smaller Number");
    }
    else{
        alert("Please enter a value from 0-10");
    }
    }
});