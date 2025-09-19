// max sub array sum code

// let arr = [1,2,-3,4,5]
// let k= 3
// let n = arr.length;
// let maxSum = 0;

// for(let  i = 0; i<=n-k; i++){
//     let currSum = 0;

//     for(let j = i; j<i+k; j++){
//         currSum+=arr[j];
//     }

//     if(currSum>maxSum)
//     {
//         maxSum = currSum;
//     }
// }
// console.log(maxSum);


//Sliding window approach

// let arr = [1,2,-3,4,5]
// let k= 3
// let n = arr.length;
// let wSum = 0;

// for(let i = 0;i<k; i++){
//    wSum+=arr[i];
// }

// let maxSum = wSum
// for(let i= k; i<n; i++){
//     wSum = wSum+arr[i]-arr[i-k]
//     if(wSum>maxSum){
//         maxSum = wSum
//     }
// }

// console.log(maxSum);

// let arr = [1,2,-3,4,5];
// let maxSum = 0;
// let currSum = 0;

// for(let i  = 0; i<arr.length; i++){
//     currSum+=arr[i];
//     if(currSum>maxSum){
//         maxSum = currSum
//     }
//     if(currSum<maxSum){
//         currSum=0;
//     }

// }



// let p1 = new Promise((res,rej)=>{
//     res()
// })

// let p2 = new Promise((res,rej)=>{
//     res()
// })

// let p3 = new Promise((res,rej)=>{
//     res()
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// })


import user from "./home.js";
console.log(user);

import { lastName,sum} from "./home.js";
console.log(lastName);
sum();





