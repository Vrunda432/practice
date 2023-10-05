let jdata=require("./data.json")


// print city name based on population

function citybypopulation(populations) {
    let populationfill=jdata.filter((e)=>{
        // Number(populations)
        return e.population >populations;
    });
    
    
    let citynamebypopulation=populationfill.map((e)=>{

        return e?.city;  
    });
    
    return citynamebypopulation;
};

let cityn1=citybypopulation(1000000)
console.log(cityn1);