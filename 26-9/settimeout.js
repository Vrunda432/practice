setTimeout(()=>{
    console.log("setTimeout");
    
},2000);

const id=setInterval(()=>{
    console.log("🚀 ~ file: settimeout.js:7 ~ id ~ setInterval:, setInterval");
    
},3000);

setTimeout(()=>{
    clearInterval(id);
},9000);