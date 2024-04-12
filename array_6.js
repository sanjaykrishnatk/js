//input array = [4,5,6]
//output array=[11,10,9]

arr1 = [4,5,6];
arr2=[];
// length=arr1.length;
// n=7;
// for(let num of arr1){
//  arr2.push(num+n);
//  n-=2;
// }
// console.log(arr2); 


sum=0;
for(let i of arr1){
    sum+=i;
}
for(let num of arr1){
    arr2.push(sum-num);
}
console.log(arr2);