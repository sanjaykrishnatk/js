weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

obj={};
weatherData.forEach(item=>{
    if(item["district"] in obj){
        if(obj[item.district]<item.weather){
            obj[item.district]=item.weather
        }
    }else{
        obj[item["district"]]=item["weather"]
    }})
console.log(obj);


// wd={}
// for(data of weatherData){
//     district=data.district
//     currTemp=data.weather
//     if(district in wd){
//         oddTemp=wd[district]
//         if(oddTemp>currTemp){
//             wd[district]=oddTemp
//         }else{
//             wd[district]=oddTemp
//         }
//     }else{
//         wd[district]=currTemp
//     }
// }
// console.log(wd);
