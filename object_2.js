//w.a.p to check employee location key is present in the given object
employee={
    id:1000,
    name:"Neel",
    designation:"Developer",
    age:35
}
console.log('emplocation' in employee ? 'Present':'not present');

// how to add a key value pair into an object
//object["key"]=value

employee["experience"]=3
console.log(employee);


//check gender 'key' in the given object, if present print 'yes' else add gender key to the given object with value as male
console.log(`check gender qn -----`);
'gender' in employee ? console.log('Yes'):employee["gender"]='Male';
console.log(employee);

//update value is object

employee.age+=5;
console.log(employee);

//delete key from an object

//delete method-return boolean value
delete employee.age
console.log(employee);


