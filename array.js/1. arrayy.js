//1. print 9th and 10th index of array
//let arr=[1,2,3,4,5,6,7,8,9,10,11];

//let arr1=arr.indexOf(10);
//let arr2=arr.indexOf(11);
//console.log(arr1,arr2);

//2. print every element of array by map and for loop

//let arr=[1,2,3,4,5,6,7,8,9]
 //let arr1=arr.map((e)=>{
   // return e;
 //});
 //console.log(arr1);

 //for loop//
//for( let i=0;i<arr.length;i++){
    //const element=arr[i];
//}
//console.log(arr);

//3.change a value of 6th index with 100

//let arr=[1,2,3,4,5,6,7,8,9,10];
//let  x=arr.splice(5,1,100);
//console.log(arr);

//4.print a array till element value not grater then 100
//let arr1=[40,50,30,100,499,699];
//let arr2=arr1.filter((e)=>{
//    return e<100;
//});
//console.log(arr2);

//5. add 1 in every element of an array


//let arr=[1,2,3,4,5,6,7,8,9,10];
//let arr1=arr.map((e,i)=>{
    //return e+1;
//});
//console.log(arr1);

//6.add 0 in start of array

//let arr=[1,2,3,4,5,6,7,8,9,10];
//arr.unshift(0);
//console.log(arr);

//7.add  99 in end of array
//let arr=[1,2,3,4,5,6,7,8,9,10];

//arr.push(99);
//console.log(arr);

//8. remove 1 element from start of  array

//let arr=[1,2,3,4,5,6,7,8,9,10];
 //arr.shift();
 //console.log(arr);

 //9. remove 1 element from end of array
 //let arr=[1,2,3,4,5,6,7,8,9,10];
 //arr.pop();
// console.log(arr);

//10. do sum of all value of an array with use of map, reduce and for-loop

//11. sort a array in acending decending
//let arr=[1,20,3,4,5,6,7,8,9,10];

//acending 
//arr.sort();
//console.log(arr);

//let vp=arr.sort((a,b)=>{
   // return a-b;
//});
//console.log(vp);

//decending
//arr.sort();
//console.log(arr);

//let vp=arr.sort((a,b)=>{
   // return b-a;
//});
//console.log(vp);

//12. reverce an array with use of method
//let arr=[1,20,3,4,5,6,7,8,9,10];
//let vp=arr.reverse();
//console.log(vp);

//13. reverce an array with use of for-loop
// const reversearr=[];

// for(let i=arr.length -1 ;i>=0; i--){
//   reversearr.push(arr[i]);
// }


//task-2
//[1,2,3,6,7,9,3,56,8]

//1. give all value which can devided by 2 - not use filter
// let arr=[1,2,3,6,7,9,3,56,8];
// let arr1=arr.map((e)=>{
//   return e/2;
// });
// console.log(arr1);



//2. give all value above 3 by use of filter
// let arr1=[1,2,3,6,7,9,3,56,8];
// let arr=arr1.filter((e)=>{
//   return e>3;
// });
// console.log(arr);




//task-4

//1.['i','am', 'urvish'] ==> want ['hsivru','ma','i']
//by use of loop.

let arr=['i','am', 'urvish'];
let arr1=arr.reverse().join();
console.log(arr1);
