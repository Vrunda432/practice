let jdata=require("../../30-9/data/data.json")

function city(params) {
    let cityname=jdata.map((e)=>{
        return e.city
    })
    
    let cityshow=cityname.filter((e)=>{
        return e.length>10
    }) 
    console.log("cityshow", cityshow)

    
}

 city();