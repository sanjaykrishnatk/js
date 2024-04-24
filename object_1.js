//[1000,'Neel','Developer','Kochi',25000,3]

employee={
    id:1000,
    name:"Neel",
    designation:"Developer"
}
console.log(employee);
console.log(employee['designation']);
console.log(employee.designation);

//how to access keys in a object
// ``````````````````````````````````````````````

//in method is used to follow the keys in the object
console.log('````````````````````````')
for(let key in employee){
    console.log(key);
}
console.log('``````````````````````````````');