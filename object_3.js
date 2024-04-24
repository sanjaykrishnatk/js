var car={
    name:'baleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10 Lakh'
}
//w.a.p to print price model and manufacture name of the given car

//w.a.p to add varient key to the car object with value has 'manual'

//w.a.p to add a new value 'automatic' to the key varient

//w.a.p to add a new key as 'colour' with value red,blue,green

console.log(`print price model and manufacture name of the given car`);
console.log(`Model is ${car.model} and manufacturer is ${car.manufacturer}`);
console.log('--------------------------');
console.log('add varient key to the car object with value has manual');
car["varient"]=['Manual']
console.log(car);
console.log('-----------------------');
console.log('add a new value automatic to the key varient');
car.varient.push('Automatic')
console.log(car);
console.log('-------------------');
console.log('add a new key as colour with value red,blue,green');
car["color"]=['red','blue','green']
console.log(car);