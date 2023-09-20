let arr=[1,2,3,4,5];
let total=arr.reduce((lastReturnValue,e)=>{
    console.log("lastReturnValue",lastReturnValue);
    console.log("e",e);
    return (5+ lastReturnValue)+(5+e);
},0)








