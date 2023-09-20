let arr=[1,2,3,4,5,6,7,8,9,10];

let abc=arr.forEach((e,i) =>{
    console.log(i,"e---->",e);
    return e;
});
console.log("abc",abc);