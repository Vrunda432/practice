function fun1() {
    for (let i = 0; i < Infinity; i++) {
      var m =  Math.trunc(Math.random() * 10) + 1;
      // console.log("check:",y)
      if (m >6) {
          break;
       }
       console.log(" random num", m);
    }
      
    return m;
    
 }
let show= fun1 ()
console.log("🚀 ~ file: random.js:15 ~ show:", show);



for (let i = 1; i < 7; i++) {
   // let y = i
   // console.log("🚀 ~ file: task5.js:3 ~ y:", y)
   let x = Math.round(Math.random()*i)+1;
   console.log("🚀 ~ file: task5.js:3 ~ x:", x)
  
 }
