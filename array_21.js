fruits = ['apple','pineapple','mango','orange','kiwi']

mango=fruits.find(f=>f=='mango')
console.log(mango);

//is mango pressent in the array
b=fruits.includes('mango')
console.log(b?`yes`:`no`);

i=fruits.indexOf('mango')
console.log(i);