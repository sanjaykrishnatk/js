// 1)sort array in asccending order
// Algoruthm
// get the search item
// initialize lower index and upper index
// mid=low+up/2
// mid=searchItem
// item found the display
// mid>searchItem
// up=mid-1
// mid<searchItem
// low=mid+1
// repeat untill the above statement untill the low and up value meets



// arr=[10,11,12,3,2,4];
// sortedArr=arr.sort((n1,n2)=>n1-n2);
// console.log(`Sorted array is ${sortedArr}`);
// value=10;
// low=0;
// high=arr.length-1;
// for(let i in sortedArr){
//     mid=Math.floor((low+high)/2);
//     if(value==sortedArr[mid]){
//       console.log(`Element found at index position ${mid}`);
//       break;
//     }else if(value>sortedArr[mid]){
//         low=mid+1;
//     }else{
//        high=mid-1;
//     }
// }


arr=[10,11,12,3,2,4];
low=0;
up=arr.length-1;
isPresent=false;
searchItem=2;
arr.sort((a,b)=>a-b);
count=0;
while(low<=up){
  count++;
  mid=Math.floor((low+up)/2);
if(arr[mid]==searchItem){
 isPresent=true;
 break;
}
else if(arr[mid]>searchItem){
  up=mid-1
}else{
  low=mid+1
}
}
console.log(isPresent?`Present`:`Not present`);
console.log(count);
