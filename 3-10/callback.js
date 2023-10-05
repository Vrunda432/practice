function fun1(argfun,Cb) {
        setTimeout(()=>{
        console.log("🚀 ~ file: callback.js:2 ~ fun1 ~ fun1:", fun1);
        Cb(argfun);
    },[2000]);
}
function fun2(cb2) {
        setTimeout(()=>{
        console.log("🚀 ~ file: callback.js:8 ~ fun2 ~ fun2:", fun2);
        cb2();

    },3000);
}
function fun3() {
    console.log("🚀 ~ file: callback.js:15 ~ fun3 ~ fun3:", fun3);
    
}
fun1(fun3,fun2);