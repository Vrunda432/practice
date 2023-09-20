
let obj = {
    name: "vrunda",
    age: 28,
    city: "surat",
  };
  
  let keysArr = Object.keys(obj);
  console.log("keysArr:", keysArr);
  
  let valuesArr = Object.values(obj);
  console.log("valuesArr:", valuesArr);
  
  let entriesArr = Object.entries(obj); //[["name","vrunda"]]
  console.log("entriesArr:", entriesArr);
  
  // give a every key of object
  for (const key in obj) {
    console.log("-------->key:", key);
    obj.key;
    console.log(" obj.key:", obj[key]);
  }