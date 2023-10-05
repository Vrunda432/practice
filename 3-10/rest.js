const arr=[1,2,3,4,5,6];
//let [a,b,c]=arr;
let [a,b,...c]=arr;
console.log("🚀 ~ file: rest.js:3 ~ c:", c);
console.log("🚀 ~ file: rest.js:3 ~ b:", b);
console.log("🚀 ~ file: rest.js:3 ~ a:", a);

function fun1(a,b,...c){
    console.log("🚀 ~ file: rest.js:9 ~ fun1 ~ c:", c);
    console.log("🚀 ~ file: rest.js:9 ~ fun1 ~ b:", b);
    console.log("🚀 ~ file: rest.js:9 ~ fun1 ~ a:", a);
    

let total=0
c.map((e)=>{
    total+=e;

});
return a+b+total;
}
let x=fun1(1,2,3,4,5,6,7)
console.log("x:", x);


let obj={
    x1:10,
    b1:20,
    c1:30,
    d1:40,
};
let {x1,b1,...c1}=obj;
console.log("🚀 ~ file: rest.js:32 ~ c1:", c1);
console.log("🚀 ~ file: rest.js:32 ~ b1:", b1);
console.log("🚀 ~ file: rest.js:32 ~ x1:", x1);
