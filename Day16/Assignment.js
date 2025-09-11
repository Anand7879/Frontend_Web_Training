let formEl = document.querySelector("form")

formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log("hello");
    
    // console.log(formEl[0].value);
    // console.log(formEl[1].value);
    // console.log(formEl[2].value);
    // console.log(formEl[3].value);
    
    let data = {
        name:formEl[0].value,
        FatherName:formEl[1].value,
        age:formEl[2].value,
        Gender:formEl[3].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))
    
    
})

let btn = document.getElementById('Del');
btn.addEventListener("click",(e)=>{
    localStorage.removeItem("formData")

})
