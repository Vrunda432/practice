let familyTree ={
    name: "babudada",
    age:86,
    child:[
        {
            id:100,
            name:"kishorbhai",
            age:55,
            occupation:"zonal-markting manager",
            vehicle:[
               {
                name:"creta",
                number:6108,
               },
               {
                name:"kia",
                number:2022,
               }
            ],
            child: [
                {
                    name:"vrunda",
                    age:28,
                },
                {
                    name:"ishan",
                    age:25,
                },
            ],
        },
    {
        id:101,
        name:"rameshbhai",
        age:50,
        occupation:"job",
        vehicle:[
           {
            name:"thar",
            number:3040,
           },
           {
            name:"activa",
            number:2011,
           },

        ],
        child:[
            {
                name:"mansi",
                age:21,
            },
            {
                name:"kirtan",
                age:22,
            },
        ],
    },
    {
        id:103,
        name:"jaysukh",
        age:54,
        occupation:"farmer",
        vehicle:[
            {
                name:"honda",
                number:3060,
            },
            {
                name:"sckoda",
                number:2011,
            },
        ],
        child:[
            {
                name:"tisha",
                age:20,
            },
            {
                name:"harsh",
                age:26,
            },
        ],
    },

    
    ],
}

//map method//
//to print 2nd kaka nu vehicalname//
//  let vname=familyTree.child[1].vehicle.map((e) =>{
    
//      return e.name
//  })
//  console.log(vname);

//3rd chacha son age + krnaa//

let age1=familyTree.child[2].child.map((e)=>{
    
   return e.age
     }
 )

// console.log("age",age1);
let total=age1.reduce((lastev,e)=>{
    return lastev+e
},0)
console.log("total of age",total);