class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary
    //constructor
    constructor(eName,eDesg,empLo,empSal){
        this.empName=eName,
        this.empDesig=eDesg,
        this.empLocation=empLo,
        this.empSalary=empSal
    }
    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
    }
}

//object

const obj = new Employee('Neel','Developer','Kochi',25000)
obj.display();