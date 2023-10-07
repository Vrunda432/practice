
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
            children: [
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



function fm1(id) {
    let familydata=familyTree.child.find((e)=>{
        
    
    console.log("🚀 ~ file: familyid.js:2 ~ fm1 ~ id:", e.id);
    return e?.id=== id;
})
if(familydata){
    return familydata.child.filter((e)=>{
        console.log(e.name)
    })
}
else{
    return "name not find";
}


}

let so =fm1(101)
//console.log("🚀 ~ file: familyid.js:104 ~ so:", so);
