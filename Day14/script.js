// Promise


let promise = new Promise((res,rej) =>{
    res()
    // rej()
    
})
// console.log(promise);

// promise.then(()=>{
//     console.log("Promise Fulfiled");
    
// })

// promise.catch(()=>{
//     console.log("Promise Rejected");
    
// })

let step1 = function(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res()
            console.log("Photo Selected");
            
        },4000)
    })
}

let step2 = function(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res()
            console.log("Caption");
            
        },2000)
    })
}

let step3 = function(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res()
            console.log("Filter");
            
        },2000)
    })
}

let step4 = function(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            res()
            console.log("Post");
            
        },2000)
    })
}


// Then and Catch

// step1().then(()=>{
//     return step2().then(()=>{
//         return step3().then(()=>{
//             return step4().then(()=>{

//             })
//         })
//     })
// })


// await and async

// async function call() {
//     await step1()
//     await step2()
//     await step3()
//     await step4()
// }

// call();



let promise1 = new Promise(()=>{
    console.log("Hello");
    
})

console.log("Hii");
