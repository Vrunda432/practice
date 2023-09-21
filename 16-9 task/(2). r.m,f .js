//2.sum of array in reduce,map or for loop.//

//reduce method//


// let arr=[1,2,3,4];

// console.log([1,2,3,4].reduce((a,b)=> a+b,0))
// console.log([].reduce((a,b)=>a+b,0))

//map method//

const number=[1,2,3,4,5];
let add=number.map((num,sum=0 )=> sum=sum+num);
console.log(add);



//for loop//
// var array=[1,2,3,4]
// var sum=0;
// array.forEach(n =>sum+=n);
// console.log(sum);
    