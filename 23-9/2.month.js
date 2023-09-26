
// var date= new Date();
// var month= date.getMonth();
// var year= date.getFullYear();

// var monthNames=[
//     "january","february","march","April","May","june","july","Auguest","September","October","November","December"];

//     console.log(monthNames[Date],[Month],[Year]);

//1.
// let currentdate=new Date()
// console.log("currentdate", currentdate);

// let month=["January", "February", "March", "April", "May", "June", "July"," August", "September", "October", "November", "December"]

// let weekday=["Sunday","Monday","Thuseday","Wednesday","Turseday","Friday","Sataurday"]
//      if(weekday[0]="sunday"){
//            weekday[0]=" To day is Fun day"
//      }
//    console.log("cuurernt :", currentdate.getDate());

//    let munthnum=currentdate.getMonth();
//    let daynum=currentdate.getDay();
//    let dd= currentdate.getDate();
//    let mm=currentdate.getMonth();
//    let yy =currentdate.getFullYear();
  
// //   let y= (dd,month[munthnum],yy+"and"+weekday[daynum])

// //  console.log(y);
//  console.log(`today date is: ${dd}/${month[munthnum]}/${yy} and  ${weekday[daynum]}`);

 //2.
//  let currentdate=new Date()
// console.log("currentdate", currentdate);

// let month=["January", "February", "March", "April", "May", "June", "July"," August", "September", "October", "November", "December"]

// let weekday=["Sunday","Monday","Thuseday","Wednesday","Turseday","Friday","Sataurday"]
//      if(weekday[0]="sunday"){
//            weekday[0]=" To day is Fun day"
//      }
//    console.log("cuurernt :", currentdate.getDate());

//    let munthnum=currentdate.getMonth();
//    let daynum=currentdate.getDay();
//    let dd= currentdate.getDate();
//    let mm=currentdate.getMonth();
//    let yy =currentdate.getFullYear();
  
//   let y= (dd+" "+month[munthnum]+" "+yy+" and "+weekday[daynum])

//  console.log(y);
// //  console.log(today date is: ${dd}/${month[munthnum]}/${yy} and  ${weekday[daynum]} );


//3.
// let currentdate=new Date()
// console.log("currentdate", currentdate);
// let weekday=["Sunday","Monday","Thuseday","Wednesday","Turseday","Friday","Sataurday"];
// let month=["January", "February", "March", "April", "May", "June", "July"," August", "September", "October", "November", "December"]
//    console.log("cuurernt :", currentdate.getDate());
//    let munthnum=currentdate.getMonth();
//    let daynum=currentdate.getDay();
//   let dd= currentdate.getDate();
//   let mm=currentdate.getMonth()+1;
//   let yy =currentdate.getFullYear();



 
//  console.log(`today date is: ${dd}/${month[munthnum]}/${yy} and ${weekday[daynum]}`);

 //2.
  let string="vrunda k patel";
 let g = string.split(" ").reverse().join(" ") .split("") .reverse() .join("");
 console.log("string:", g);

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
let show1= fun1();
console.log("lastone",show1);

//

for (let i = 1; i < 7; i++) {
   // let y = i
   // console.log("🚀 ~ file: task5.js:3 ~ y:", y)
   let x = Math.round(Math.random()*i)+1;
   console.log("🚀 ~ file: task5.js:3 ~ x:", x);
  
 }

