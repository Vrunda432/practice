const obj={
    name:"vrunda",
    age:25,
    address:{
    ploat:"d/1 sidheshvarpark",
    landmark:" near tapovan banglow",
    city:"surendranager",
    pincode:363001,
}
}
console.log(obj);
let jsonstr=JSON.stringify(obj);//convrt data in to string
console.log("🚀 ~ file: Json.js:13 ~ jsonstr:", jsonstr);

let normaldata=JSON.parse(jsonstr);// to convrt in to normaldata
console.log("🚀 ~ file: Json.js:16 ~ normaldata:", normaldata);
