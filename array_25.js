//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(`all product details`);
console.log(`-----------------------------`);
products.forEach(pro => {
  console.log(pro[1]);  
});
//2. display product whose price < Rs.50
console.log(`display product whose price < Rs.50`);
console.log(`-----------------------------`);
products.filter(pro=>pro[2]<50).forEach(pro=>console.log(pro))
//3. print price of oreo
console.log(`print price of oreo`);
console.log(`-----------------------------`);
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);
//4. print costly product name
console.log(`costly product`);
console.log(`-----------------------------`);
highest=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(highest);
//5. display out of stock product
console.log(`out of stock product`);
console.log(`-----------------------------`);
stock=products.filter(pro=>pro[3]==0).forEach(pro=>console.log(pro))
//6. sort products based on stock in decsending order
console.log(`sort based on stock in descending order`);
console.log(`-----------------------------`);
order=products.sort((pro1,pro2)=>pro2[3]-pro1[3])
console.log(order);
//7. print product having maximum available stock
console.log(`highest stock`);
console.log(`-----------------------------`);
highestStock=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(highestStock);
//8. is there any product can be purchased by Rs. 10
console.log(`product price less than 10`);
console.log(`----------------------------------`);
belowTen=products.some(pro=>pro[2]<=10)
console.log(belowTen?'yes':'no');
//9. Is there any product in the range of 10 to 30
console.log(`product present in range of 10 to 30`);
console.log(`----------------------------------`);
between=products.some(pro=>pro[2]>=10 && pro[2]<=30)
console.log(between?'yes':'no');
//10. print all products in the price range of 10 to 30
console.log(`all product in price range of 10 to 30`);
console.log(`----------------------------------`);
products.filter((pro1)=>pro1[2]>=10 && pro1[2]<=30).forEach(pro=>console.log(pro))
