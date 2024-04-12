expense=[12000,24000,35000,10000,54000,40000]

sum=0;
low=expense[0];
high=expense[0];

for(let i of expense){
    sum+=i;
    if(i>high){
        high=i;
    }
    if(i<low){
        low=i
    }

}
console.log(`sum is ${sum} high : ${high} low : ${low}`);