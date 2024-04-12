arr=[10,11,12,3,2,4]

//w.a.p to check whether 2 is present or not
value=2;
present=false;
for(let num of arr){
 if(num==value){
    present=true;
    break;
 }
}
console.log(present ? `Number is present` : `Number not present` );