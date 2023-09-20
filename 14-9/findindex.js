let arr=[1,4,6,7,8,9,2];
let index=arr.findIndex((e)=>{
    console.log("e",e);
    return e>5;
});
 console.log("index",index);