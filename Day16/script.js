// let btn = document.querySelector("button")
// let body = document.querySelector("body")
// let h2 = document.querySelector("h2")

// btn.onclick = function(){
//     // console.log("hello");
//     body.style.backgroundColor = "red"
    
// }

// btn.addEventListener("click",()=>{
//     h2.innerText = "hello"
//     body.style.backgroundColor = "blue";
// })

let inp = document.querySelector("input")
let h1 = document.querySelector("h1")
inp.addEventListener("input",(e)=>{
    // console.log("Hello");
    // console.log(e.target.value);
   h1.innerText = e.target.value;
    
    
    
})