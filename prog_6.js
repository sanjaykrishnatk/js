// prog to swap two numbers
num1=20;
num2=30;

console.log(`before swap num1 ${num1}`);
console.log(`before swap num2 ${num2}`);
num2=num2-num1;
num1=num1+num2;
num2=num1-num2;

console.log(`after swap num1 ${num1}`);
console.log(`after swap num2 ${num2}`);

num3=60;
num4=40;

console.log(`before swap num1 ${num3}`);
console.log(`before swap num2 ${num4}`);
num3=num3+num4;
num4=num3-num4;
num3=num3-num4;

console.log(`after swap num1 ${num3}`);
console.log(`after swap num2 ${num4}`);