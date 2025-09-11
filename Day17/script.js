let form1 = document.getElementById('form1')
let form2 = document.getElementById('form2')
let signup = document.getElementById('signup')
let login = document.getElementById('login')

form1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data = {
        name:form1[0].value,
        email:form1[1].value,
        pass:form1[2].value
    }
    localStorage.setItem("formData",JSON.stringify(data))
})

form2.addEventListener("submit",(e)=>{
    e.preventDefault();

    let savedata = localStorage.getItem("formData")
    let dataObj = JSON.parse(savedata)

    let loginObj = {
        email:form2[0].value,
        pass:form2[1].value
    }
    if(dataObj.email==loginObj.email && dataObj.pass==loginObj.pass){
    prompt("login doneeeee")
}else{
    prompt("errrrrr ")
}
})

