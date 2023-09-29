//refrence//

obj1={
    a:200,
    b:300,
}
obj2=obj1;
//console.log(obj1);
console.log(obj2);

//copy//
obj1={
    a:200,
    b:300,
};
obj2=obj1;
console.log("🚀 ~ file: refrence-copy.js:17 ~ obj1:", obj1);
obj2={...obj1};
console.log("🚀 ~ file: refrence-copy.js:18 ~ obj2:", obj2);
obj3={};
for(const key in obj1){
    console.log(obj1[key]);
    obj3[key]=obj1[key];
    
}

//copy//
obj1.a=700;
console.log("🚀 ~ file: refrence-copy.js:24 ~ obj1:", obj1);
console.log("🚀 ~ file: refrence-copy.js:24 ~ obj3:", obj3);

//spered//
let obj4={...obj1,c:"vrunda"};
obj1.a=300;
console.log("🚀 ~ file: refrence-copy.js:36 ~ obj1:", obj1);
console.log("🚀 ~ file: refrence-copy.js:34 ~ obj4:", obj4);

