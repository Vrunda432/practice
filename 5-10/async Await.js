function fun1(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"vrunda",city:"anand"})
        },2000);
        
    })
}
function print(obj) {
    console.log(`my name is ${obj.name}`);
    console.log(`my city is ${obj.city}`);
}
const mainfun=async()=>{
    const data=await fun1()
    console.log("🚀 ~ file: async Await.js:14 ~ mainfun ~ data:", data);
    
    print(data);
}
mainfun();