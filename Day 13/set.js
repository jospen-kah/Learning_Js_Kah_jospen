// const letter =  new Set();
// const a = "a"
// const b = "b"
// const c = "c"
// letter.add(a)
// letter.add(b)
// letter.add(c)
// const it =letter.values()
// letter.forEach( (x)=>{
// document.getElementById("demo").innerHTML += `<ul>
//     <li>${x}</li>
// </ul>`
// })

const fruits  = new Map()
fruits.set("apples" , 500)
fruits.set("apple" , 500)


fruits.forEach( (key, value) => {
    document.getElementById("demo") +="The key is: " + key + "and the value is"+ value;
});
