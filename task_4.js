// 4) Sample data with mixed types in nested arrays
const mixedData = [
  [1, 'apple', 3, 'banana'],
  [4, 'orange', 6, 'grape'],
  [7, 'pear', 9, 'kiwi'],
  [10, 'melon', 12, 'strawberry']
];

// 1) Use map to create an array of strings containing both the type and value of each element.
console.log('Use map to create an array of strings containing both the type and value of each element.');
console.log('-------------------------------------');
op=mixedData.map(item=>item.map(element=>`${typeof(element)}:${element}`))
console.log(op);
console.log('-------------------------------------');

// 2) Use filter to get all arrays where the number of strings is greater than the number of numbers
console.log('Use filter to get all arrays where the number of strings is greater than the number of numbers');
console.log('-------------------------------------');
numCount=0;
strCount=0;
isPresent=false;
mixedData.filter(item=>{
    item.forEach(element=>{
        typeof(element)=='number'&& numCount++
        typeof(element)=='string'&& strCount++
    })
    if(strCount>numCount){
        isPresent=true;
        console.log(item);
    }
})
!isPresent&&console.log('Items satisfying the specific conditions not present');
console.log('-------------------------------------');
//  3) Use reduce to concatenate all strings in the nested arrays into a single sentence.
console.log('Use reduce to concatenate all strings in the nested arrays into a single sentence.');
console.log('-------------------------------------');
str=mixedData.map(item=>item[1]+" "+item[3])
op=str.reduce((e1,e2)=>e1+" "+e2)
console.log(op);
console.log('-------------------------------------');

// 4) Use arrayFrom to create an array of unique strings from the nested arrays.

//  5) Use sort to sort the nested arrays based on the length of strings in each array.
console.log('Use sort to sort the nested arrays based on the length of strings in each array.');
console.log('-------------------------------------');
op=mixedData.sort((s1,s2)=>(s2[1].length+s2[3].length)-(s1[1].length+s1[3].length))
console.log(op);
console.log('-------------------------------------');
//  6) Use map to convert each string in the nested arrays to its uppercase form.
console.log('Use map to convert each string in the nested arrays to its uppercase form.');
console.log('-------------------------------------');
upperCase=mixedData.map(item=>item.map(element=>typeof element=='string'?element.toUpperCase():element))
console.log(upperCase);
console.log('-------------------------------------');


//  7) Use filter to get all arrays where the sum of numbers is greater than 20.
console.log('Use filter to get all arrays where the sum of numbers is greater than 20.');
console.log('-------------------------------------');
op=mixedData.filter(item=>item[0]+item[2]>20)
console.log(op);
console.log('-------------------------------------');

// 8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
console.log('Use reduceRight to concatenate and flatten all nested arrays in reverse order.');
console.log('-------------------------------------');
op=mixedData.reduceRight((e1,e2)=>[...e1,...e2])
console.log(op);
console.log('-------------------------------------');
// 9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.
console.log('Use arrayFrom to create an array of the lengths of all strings in the nested arrays.');
console.log('-------------------------------------');
op=Array.from(mixedData).flat(3).filter(item=>typeof item=='string').map(item=>item.length)
console.log(op);
console.log('-------------------------------------');
//  10) Use includes to check if the word 'apple' is present in any of the nested arrays.
console.log('Use includes to check if the word apple is present in any of the nested arrays.');
console.log('-------------------------------------');
op=mixedData.some(item=>item.includes('apple'))
console.log(op);
console.log('-------------------------------------');