fruits=[`apple`,`orange`,`mango`,`lemon`,`berry`]

for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}
console.log(`first method ended`);
for(let i in fruits){
    console.log(fruits[i]);
}
console.log(`2nd method ended`);
for(let i of fruits){
    console.log(i);
}