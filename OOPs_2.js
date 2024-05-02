// class Students{
//     rollNo
//     name
//     course

//     constructor(sRollNo,sName,sCourse){
//         this.rollNo=sRollNo
//         this.name=sName
//         this.course=sCourse
//     }
    
//     display(){
//         console.log('-----------------------------------');
//         console.log(`Student rollno is ${this.rollNo}, name is ${this.name}, course is ${this.course} `);
//         console.log('-----------------------------------');
//     }
// }

// const s1=new Students(26,'Sanjay','MEARN')
// const s2=new Students(16,'Amal','ASP .NET')
// const s3=new Students(10,'Sanjay','PYTHON')

// s1.display();
// s2.display();
// s3.display();

class Students{
    constructor(sRollNo,sName,sCourse){
        this.rollNo=sRollNo
        this.name=sName
        this.course=sCourse
        this.display();
    }
    
    display(){
        console.log('-----------------------------------');
        console.log(`Student rollno is ${this.rollNo}, name is ${this.name}, course is ${this.course} `);
        console.log('-----------------------------------');
    }
}
const s1=new Students(26,'Sanjay','MEARN')
const s2=new Students(16,'Amal','ASP .NET')
const s3=new Students(10,'Sanjay','PYTHON')
