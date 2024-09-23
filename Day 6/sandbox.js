document.addEventListener("DOMContentLoaded", function (){
    let y = Math.floor(Math.random()*10 + 1);
    
    document.getElementById("guess").onclick = function (){
       let x = document.getElementById("number").value;
       console.log(y)
    if(x == y ){
        alert("You guessed the write Number " + y); 
        document.getElementById("message").innerHTML = "Congratulations! You guessed correctly.";
    }
    else if(x < y){
        alert("Sorry try again your choose a higher Number");
        document.getElementById("message").innerHTML = "Congratulations! You guessed correctly.";
    }
    else if(x > y){
        alert("Sorry try again choose a smaller Number");
        document.getElementById("message").innerHTML = "Congratulations! You guessed correctly.";
    }
   
    else{
        document.getElementById("number").innerText += "Your guess must be between 1 and 10.";
    }
    }
});