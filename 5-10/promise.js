// const v1=new Promise((resolve,reject)=>{
// const arr=[1,2,3,4,5];
// let exist=arr.includes(50);
// if (exist) {
//     resolve("5 is avalible");
// }
// else{
//     reject("5 is not in array");
// }
//    console.log("🚀 ~ file: promise.js:4 ~ newPromise ~ exist:", exist);
// });
// v1.then((res)=>{
//     console.log("res",res)
// })
// .catch((error)=>{
//     console.log("error",error);

// })
//syncronus working in promise//

const m1=new Promise((resolve,reject)=>{
    const arr=[1,2,3,4,5];
    let exist=arr.includes(5);
    //throw new Error("menually gerated error");
    if (exist) {
        resolve("5 is avalible");
    }
    else{
        reject("5 is not in array");
    }
       console.log("🚀 ~ file: promise.js:4 ~ newPromise ~ exist:", exist);
    });
    m1.then((res)=>{
        console.log("res",res);
        return[1,2,3];
    })
    .then((res1) => {
        console.log("🚀 ~ file: promise.js:37 ~ .then ~ res1:", res1);
    
    	
    })
    .catch((error)=>{
        console.log("error",error.message);
         
    })

    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("-----resolve---")
        })
    })
    console.log(p2);