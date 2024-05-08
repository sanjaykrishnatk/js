class A{
    methoda(){
        console.log('inside first method');
    }
}
class B extends A{
    methoda(){
        console.log('inside second method');
    }
    methoda(){
        console.log('inside third method');
    }
}

const obj=new B()
obj.methoda();