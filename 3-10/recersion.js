//call a function inside it's own body//

function fun1(x){
    console.log("🚀 ~ file: recersion.js:4 ~ fun1 ~ x:", x);
    if(x>0){
        fun1(x-1);
    }
    else{
        console.log("loop finish")
    }
}
fun1(10);