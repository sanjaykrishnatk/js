//Home work create an student object and revise all methods

student={
    enroll_no:83,
    name:"DoFlemingo",
}
//print student name
console.log(`Student name : ${student.name}`);
console.log('``````````````````````````````````````');
// add age
console.log(`add age`);
console.log('``````````````````````````````````````');
student["age"]=21
console.log(student);
console.log('``````````````````````````````````````');
//add university name
console.log(`add university name`);
console.log('``````````````````````````````````````');
student["uni"]=['MGU']
console.log(student);
console.log('``````````````````````````````````````');
//add college name along with University name
console.log(`add college name along with University name`);
console.log('``````````````````````````````````````');
student.uni.push('ABC College')
console.log(student);
console.log('``````````````````````````````````````');
//add course 
console.log(`add course `);
console.log('``````````````````````````````````````');
student["course"]="BCA";
console.log(student);
console.log('``````````````````````````````````````');
//delete age
console.log(`delete age`);
console.log('``````````````````````````````````````');
delete student.age

console.log(student);