//w.a.p to print fizz when number is divisible by 3
// buzz when divisible by 5
// fizzbuzz when divisible by 15


num=45;

if(num%15==0){
    console.log(`fizzbuzz`);
}else if(num%5==0){
    console.log(`buzz`);
}else if(num%3==0){
    console.log(`fizz`);
}else{
    console.log(`${num} is not divisible by 15, 5, 3`);
}