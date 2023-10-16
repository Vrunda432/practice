
try{
    let no=fun2();
    let x=sum(no,30);
    console.log("🚀 ~ file: try& catch.js:14 ~ x:", x);
    
}
catch(error){
    console.log("🚀 ~ file: try& catch.js:18 ~ error:", error);
    
}
function sum (a,b){
    try {
       return a+b; 
    } catch (error) {
        return error.message;
        
    }
}
function fun2(){
    let arr=[1,2,3,4,5];
    let x=arr.find((e)=> e>10);
    console.log("🚀 ~ file: try& catch.js:23 ~ fun2 ~ x:", x);
    if(!x){
        throw new Error("--- no is not find----")
    }
   return x;
}
