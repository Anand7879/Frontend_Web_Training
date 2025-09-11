let btn = document.getElementById('Add')
let inp = document.querySelector('input')
let ul = document.querySelector('ul')
let body = document.querySelector('body')
let RemoveAll = document.getElementById('RemoveAll')
let RemoveFirst = document.getElementById('RemoveFirst')

let arr = []
btn.addEventListener("click",()=>{
    let data = inp.value
    let li = document.createElement("li")
    li.innerText = data
    ul.append(li)
    inp.value =" "
   
    arr.push(data)
    localStorage.setItem("Data",arr)
})

RemoveAll.addEventListener('click',(e)=>{
    // ul.remove()
    // let NewUL = document.createElement('ul')
    // ul = NewUL
    // body.append(ul);

    localStorage.removeItem("Data")
    
})

RemoveFirst.addEventListener('click',()=>{
    arr.shift();
    localStorage.setItem("Data",arr);
    // let x = ul.firstChild;
    // x.remove();
})