//sync- line wise , run code 1 by 1
//async- not run 1 by 1

function fun1(params) {
        setTimeout(()=>{
        console.log("🚀 ~ file: sync-async.js:5 ~ fun1 ~ fun1:", fun1);
        
    },[2000]);
}
function fun2(params) {
    console.log("🚀 ~ file: sync-async.js:11 ~ fun2 ~ fun2:", fun2);
    
}
fun1();
fun2();