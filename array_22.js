//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

//print total numbers of employee


//print developer employee details

// print details of employee Laisha

//sort employee based on their salary in descending order


//sort employee based on their experience in ascending order


// print the employ name whose have the higest salary
console.log(`all employee details`);
employee.forEach(emp => {
  console.log(emp);  
});

console.log(`all employee name`);
employee.forEach(emp => {
  console.log(emp[1]);  
});
console.log(`developer employee details`);
employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro));
console.log(`Details of employee laisha`);
console.log(employee.find(emp=>emp[1]=='Laisha'));

console.log(`salary > 30000`);
employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro))
   console.log(`employee details based on their salary in descending order`);
   employee.sort((a,b)=>b[4]-a[4])
   console.log(employee);
   high=employee[0]

  console.log(`employee details based on their experience in ascending order`);
  employee.sort((a,b)=>a[5]-b[5])
  console.log(employee);

  console.log(`highest salary`);
  empsal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
  console.log(empsal[1]);
 
  console.log(`lowest salary`);
  empsal=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
  console.log(empsal[1]);
 
