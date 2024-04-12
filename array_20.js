//filter()
a=[10,12,15,13,25,2,3,5]

//w.a.p to print all even numbers from a given array
console.log(`all even numbers from a given array`);
console.log(a.filter(num=>num%2==0));
//w.a.p to print all numbers>13 from the given array
console.log(`print all numbers>13 from the given array`);
console.log(a.filter(num=>num>13));


c=a.some(num=>num>13)
console.log(c);