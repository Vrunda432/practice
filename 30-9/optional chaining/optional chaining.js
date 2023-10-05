let user={
    name:"vrunda",
    age:28,
};
console.log("user",user);

//let x1=user .address.city;
//console.log("🚀 ~ file: optional chaining.js:8 ~ x1:", x1);
//let x=user?(user .address? user. address.city:undefined):undefined;

let y=user?.address?.city?.pincode;
console.log("🚀 ~ file: optional chaining.js:11 ~ y:", y);

user?.print?.()


user?.address={city:"surat"};
