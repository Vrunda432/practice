const m1=new Promise((resolve,reject)=>{
    const arr=[1,2,3,4,5];
    let exist=arr.includes(5);
    //throw new Error("menually gerated error");
    if (exist) {
        resolve({name:"vrunda"});
    }
    else{
        reject("5 is not in array");
    }
       console.log("🚀 ~ file: promise.js:4 ~ newPromise ~ exist:", exist);
    });
    
    m1.then((res)=>{
        console.log("res",res);
        return {...res,city:"surat"}

       
       
    })
    .then((res1) => {
        console.log("🚀 ~ file: promise.js:37 ~ .then ~ res1:", res1);
       
        return {...res1,age:25}

    })
    .then((res3) => {
        console.log("-----res-3------>", res3);
        
    })
    .catch((error)=>{
        console.log("error",error.message);
         
    })

    
    