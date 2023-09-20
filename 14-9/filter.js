let arr=[1,2,3,4,5,6,7,8];
let filtervv=arr.filter((e)=>{
    console.log("e",e);
    return e>4;
});
console.log("arr",filtervv);