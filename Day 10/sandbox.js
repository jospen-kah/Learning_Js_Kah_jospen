const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const equal = document.getElementById("equal")
const div = document.getElementById("div")
const add = document.getElementById("add")
const mul = document.getElementById("mul")
const sub = document.getElementById("sub")
const del = document.getElementById("del")
const clear = document.getElementById("clear")
const screenContainer = document.getElementById("screen-container")

one.addEventListener("click", function(){
    screenContainer.innerHTML += 1
    
  });
  two.addEventListener("click", function(){
    screenContainer.innerHTML += 2
    
  });
  three.addEventListener("click", function(){
    screenContainer.innerHTML += 3
    
  });

  four.addEventListener("click", function(){
    screenContainer.innerHTML += 4
    
  });
  five.addEventListener("click", function(){
    screenContainer.innerHTML += 5
    
  });
  six.addEventListener("click", function(){
    screenContainer.innerHTML += 6
    
  });
  seven.addEventListener("click", function(){
    screenContainer.innerHTML += 7
    
  });
  eight.addEventListener("click", function(){
    screenContainer.innerHTML += 8
    
  });
  nine.addEventListener("click", function(){
    screenContainer.innerHTML += 9
    
  });
  zero.addEventListener("click", function(){
    screenContainer.innerHTML += 0
    
  });
  add.addEventListener("click", function(){
    screenContainer.innerHTML += "+"
    
  });
  sub.addEventListener("click", function(){
    screenContainer.innerHTML += "-"
    
  });
  div.addEventListener("click", function(){
    screenContainer.innerHTML += "/"
    
  });
  mul.addEventListener("click", function(){
    screenContainer.innerHTML += "*"
    
  });
  clear.addEventListener("click", function(){
    screenContainer.innerHTML = ''
    
  });

  del.addEventListener("click", function(){
    screenContainer.textContent  = screenContainer.textContent.slice(0, -1);
  })

  equal.addEventListener('click', function(){
    try{
        
    screenContainer.textContent = eval(screenContainer.textContent);
    }
    catch{
        screenContainer.textContent = 'error';
    } 
  })


