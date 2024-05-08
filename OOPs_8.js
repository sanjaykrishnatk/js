class A{
    methoda(...arg){
        console.log(arg);
    console.log(arg.reduce((n1,n2)=>n1+n2));    
    }
}

const obj=new A();
obj.methoda(5,3,5,7)