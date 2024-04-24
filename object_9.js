products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log('Print the product name only');
console.log('------------------------------------');
products.forEach(item=>console.log(item.pName))
console.log('------------------------------------');
//2. print all mobile details whose display is lcd
console.log(' print all mobile details whose display is lcd');
console.log('------------------------------------');
products.filter(item=>item.display=='lcd').forEach(item=>console.log(item.pName))
console.log('------------------------------------');
//3. print 5g mobile phone name
console.log('print 5g mobile phone name');
console.log('------------------------------------');
products.filter(item=>item.band=='5g').forEach(item=>console.log(item.pName))
console.log('------------------------------------');
//4. sort mobile based on price
console.log('sort mobile based on price');
console.log('------------------------------------');
products.sort((a,b)=>a.price-b.price).forEach(item=>console.log(item.pName));
console.log('------------------------------------');

//5. print costly mobile
console.log(' print costly mobile');
console.log('------------------------------------');
cm=products.reduce((a,b)=>a.price>b.price?a:b)
console.log(cm.pName);
console.log('------------------------------------');

//6. print low cost mobile
console.log('  print low cost mobile');
console.log('------------------------------------');
lm=products.reduce((a,b)=>a.price<b.price?a:b)
console.log(lm.pName);
console.log('------------------------------------');