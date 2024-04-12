//prog to find sec largest among 3 num and arrange them in descending order

num1=10;
num2=20;
num3=30;

largest=0;
sec_largest=0;
smallest=0;

if(num1 > num2 && num1>num3){
    largest=num1;
    sec_largest=num2>num3?num2:num3;
    smallest = num2 < num3 ? num2 : num3;
}else if(num2 > num1 && num2>num3){
    largest=num2;
    sec_largest=num1>num3?num1:num3;  
    smallest = num1 < num3 ? num1 : num3;
}else{
    largest=num3;
    sec_largest=num2>num1?num2:num1;
    smallest = num2 < num1 ? num2 : num1;
}
console.log(`Largest : ${largest}, Second largest : ${sec_largest}, Smallest : ${smallest}`);