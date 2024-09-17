document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("submit").onclick = function() {
       let x = document.getElementById("shapes").value;
   if (x == "circle") { 
      
           // Remove length and width input fields
           let lengthElem = document.getElementById("length");
           let widthElem = document.getElementById("width");
           let baseElem = document.getElementById("base");
           let heightElem = document.getElementById("height");
           
           
           if (lengthElem) lengthElem.remove();
           if (widthElem) widthElem.remove();
           if (baseElem) baseElem.remove();
           if (heightElem) heightElem.remove();
           
          
      
  
   document.getElementById("calculate").onclick = function() {
       // Remove length and width input fields
       let r = document.getElementById("radius").value;
       const p = 22/7;
       let area = p * r * r;
       document.getElementById("area").innerHTML += area ;
   
   };
 
 }
 //calcualing the area of the rectangle
   else if(x == "rectangle")
   {
              // Remove length and width input fields
              let radiusElem = document.getElementById("radius");
              let baseElem = document.getElementById("base");
              let heightElem = document.getElementById("height");
              
              if (radiusElem) radiusElem.remove();
              if (baseElem) baseElem.remove();
              if (heightElem) heightElem.remove();
             
             
         
     
      document.getElementById("calculate").onclick = function() {
          // Remove length and width input fields
          let l = document.getElementById("length").value;
          let w = document.getElementById("width").value;
          let area =  l * w;
          document.getElementById("area").innerHTML += area ;
      
      };
   }
 
 
   //calcualing the area of the rectangle
   else if(x == "square")
       {
                  // Remove length and width input fields
                  let radiusElem = document.getElementById("radius");
                  let widthElem = document.getElementById("width");
                  let baseElem = document.getElementById("base");
                  let heightElem = document.getElementById("height");
                  
                  if (radiusElem) radiusElem.remove();
                  if (widthElem) widthElem.remove();
                  if (baseElem) baseElem.remove();
                  if (heightElem) heightElem.remove();
                 
                 
             
         
          document.getElementById("calculate").onclick = function() {
              // Remove length and width input fields
              let l = document.getElementById("length").value;
              
              let area =  l * l;
              document.getElementById("area").innerHTML += area ;
          
          };
       }
 //calculating the area of the triangle
       else if(x == "triangle")
           {
                      // Remove radius, length and width input fields
                      let radiusElem = document.getElementById("radius");
                      let widthElem = document.getElementById("width");
                      let lengthElem = document.getElementById("length");
                      
                      
                      if (radiusElem) radiusElem.remove();
                      if (widthElem) widthElem.remove();
                      if (lengthElem) lengthElem.remove();
                      
                     
                     
                 
             
              document.getElementById("calculate").onclick = function() {
                  // Remove length and width input fields
                  let h = document.getElementById("height").value;
                  let b = document.getElementById("base").value;
                  
                  let area =  (1/2)*b*h;
                  document.getElementById("area").innerHTML += area ;
              
              };
           };
 
    }
 });
 