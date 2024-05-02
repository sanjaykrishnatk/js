// 3) Sample data with nested arrays 
 const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

//  1) Find the sum of all numbers in the nested arrays.
console.log('sum of all numbers in the nested arrays');
console.log('----------------------------------------');
console.log(data.flat(3).reduce((a,b)=>a+b));
console.log('----------------------------------------');
// 2) Find the maximum number in the entire nested array.
console.log('maximum number in the entire nested array');
console.log('----------------------------------------');
console.log(data.flat(3).reduce((a,b)=>a>b?a:b));
console.log('----------------------------------------');
// 3) Find the average of all numbers in the nested arrays.
console.log('average of all numbers in the nested arrays');
console.log('----------------------------------------');
arr=data.flat(3);
console.log(arr.reduce((a,b)=>a+b)/arr.length);
console.log('----------------------------------------');
//  4) Find square of each number in the nested arrays.
console.log('square of each number in the nested arrays');
console.log('----------------------------------------');
arr=data.flat(3);
sq=[];
arr.forEach(element => sq.push(element**2));
console.log(sq);
console.log('----------------------------------------');
//  5) Find all even numbers from the nested arrays.
console.log('even numbers from the nested arrays');
console.log('----------------------------------------');
arr=data.flat(3);
arr.forEach(element => element%2==0&&console.log(element));
console.log('----------------------------------------');
// 6) Use reduceRight to concatenate all nested arrays in reverse order.
console.log('6)Use reduceRight to concatenate all nested arrays in reverse order.');
console.log('----------------------------------------');
console.log(data.reduceRight((n1,n2)=>[...n1,...n2]));
console.log('----------------------------------------');
// 7) create a flattened array from the nested arrays.
console.log('flattened array from the nested arrays');
console.log('----------------------------------------');
arr=data.flat(3);
console.log(arr);
console.log('----------------------------------------');
// 8) check if the number 5 is present in any of the nested arrays
console.log('check if the number 5 is present in any of the nested arrays');
console.log('----------------------------------------');
console.log(data.some(item=>item.includes(5)))
console.log('----------------------------------------');
// 9) create a single string of all numbers separated by a comma. 
console.log('single string of all numbers separated by a comma. ');
console.log('----------------------------------------');
console.log( data.flat(3).toString());;
console.log('----------------------------------------');
//  10) Print each number in the nested arrays.
console.log('Print each number in the nested arrays. ');
console.log('----------------------------------------');
data.flat(3).forEach(item=>console.log(item));
console.log('----------------------------------------');
// 11) Sort the nested arrays based on the sum of their numbers.
console.log('Sort the nested arrays based on the sum of their numbers.');
console.log('----------------------------------------');
sortedArr=data.sort((a,b)=>b.reduce((n1,n2)=>n1+n2)-a.reduce((n1,n2)=>n1+n2))
console.log(sortedArr);
console.log('----------------------------------------');
// 12) Use map to get the product of the first and last number in each nested array.
console.log('Use map to get the product of the first and last number in each nested array');
console.log('----------------------------------------');
mapArr=[];
data.forEach(item=>mapArr.unshift(item[0]*item[item.length-1]))
console.log(mapArr);
console.log('----------------------------------------');
// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
console.log('filter to get all arrays where the sum of numbers is greater than 15.');
console.log('----------------------------------------');
nwArr=data.filter(item=>item.reduce((a,b)=>a+b)>15)
console.log(nwArr);
console.log('----------------------------------------');
// 14) Use reduce to find the product of all numbers in the nested arrays.
console.log('Use reduce to find the product of all numbers in the nested arrays.');
console.log('----------------------------------------');
product=data.flat(3).reduce((a,b)=>a*b)
console.log(product);
console.log('----------------------------------------');
//  15) create an array of square roots of all numbers in the nested arrays.
console.log('create an array of square roots of all numbers in the nested arrays.');
console.log('----------------------------------------');
sqRoot=data.flat(3).map(item=>Math.sqrt(item))
console.log(sqRoot);
console.log('----------------------------------------');
// 16) Use includes to check if the number 20 is present in any of the nested arrays.
console.log('Use includes to check if the number 20 is present in any of the nested arrays.');
console.log('----------------------------------------');
isPresent=false;
data.forEach(item=>{
    if(item.includes(20)){
        console.log('20 is present in one of the nested array');
        isPresent=true;
    }
})
!isPresent&&console.log('20 not present in the nested arrays');
console.log('----------------------------------------');
// 17) Use map to convert each number in the nested arrays to its string representation.
console.log('Use map to convert each number in the nested arrays to its string representation.');
console.log('----------------------------------------');
mapArr=data.map(item=>item.map(element=>element.toString()))
console.log(mapArr);
console.log('----------------------------------------');
// 18) Use filter to get all arrays where the length is greater than 2
console.log('filter to get all arrays where the length is greater than 2');
console.log('----------------------------------------');
console.log(data.filter(item=>(item.length)>2));
console.log('----------------------------------------');

// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
console.log('Use reduceRight to flatten and concatenate all nested arrays in reverse order.');
console.log('----------------------------------------');
console.log(data.reduceRight((n1,n2)=>[...n1,...n2]));
console.log('----------------------------------------');

//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
console.log('arrayFrom to create an array of squares of all even numbers in the nested arrays');
console.log('----------------------------------------');
evSq=[];
Array.from(data).forEach(item=>item.forEach(element=>element%2==0&&evSq.push(element**2)));
console.log(evSq);
console.log('----------------------------------------');
// 21) Sort the nested arrays based on the length of each array.
console.log('Sort the nested arrays based on the length of each array.');
console.log('----------------------------------------');
console.log(data.sort((a,b)=>a.length-b.length));
console.log('----------------------------------------');
// 22) Use map to convert each number in the nested arrays to its negative.
console.log('Use map to convert each number in the nested arrays to its negative.');
console.log('----------------------------------------');
neg=data.map(item=>item.map(element=>element-element*2))
console.log(neg);
console.log('----------------------------------------');
// 23) Use filter to get all arrays where the last number is greater than 10.
console.log('Use filter to get all arrays where the last number is greater than 10.');
console.log('----------------------------------------');
data.filter(item=>item[item.length-1]>10&&console.log(item))
console.log('----------------------------------------');
//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.

// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.

//  26) Use includes to check if the number 15 is present in any of the nested arrays.
console.log('Use includes to check if the number 15 is present in any of the nested arrays.');
console.log('----------------------------------------');
present=data.find(item=>item.includes(15))
!present?console.log('15 not present'):console.log('15 Present in one of the nested array');
console.log('----------------------------------------');
// 27) Use map to convert each number in the nested arrays to its absolute value.
console.log('Use map to convert each number in the nested arrays to its absolute value.');
console.log('----------------------------------------');
absolute=data.map(item=>item.map(element=>element<0?-element:element))
console.log(absolute);
console.log('----------------------------------------');
// 28) Use filter to get all arrays where the first number is less than 5.
console.log('Use filter to get all arrays where the first number is less than 5.');
console.log('----------------------------------------');
console.log(data.filter(item=>item[0]<5));
console.log('----------------------------------------');
// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.

console.log(' Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.');
console.log('----------------------------------------');
console.log(Array.from(data.flat(3).filter(item=>item>5)));
console.log('----------------------------------------');