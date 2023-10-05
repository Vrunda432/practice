// let obj={
//     a:100,
//     b:200
// };
// //let {a,b}=obj;
// a=obj?.a;
// b=obj?.b;
// console.log("🚀 ~ file: distructuring.js:6 ~ b:", b);
// console.log("🚀 ~ file: distructuring.js:6 ~ a:", a);

function returnobj(params) {
    return{
        name:"------uv",
        city:"---surat",
    };
}

    const obj2=returnobj();
    console.log("🚀 ~ file: distructuring.js:18 ~ returnobj ~ obj2:", obj2);
    
    const{name,city}=returnobj();
    console.log("🚀 ~ file: distructuring.js:21 ~ returnobj ~ name:", name);
    console.log("🚀 ~ file: distructuring.js:21 ~ returnobj ~ city:", city);
    

let arr=[1,2,3,4]
let[x,y,z]=arr
console.log("🚀 ~ file: distructuring.js:28 ~ z:", z);
console.log("🚀 ~ file: distructuring.js:28 ~ y:", y);
console.log("🚀 ~ file: distructuring.js:28 ~ x:", x);
