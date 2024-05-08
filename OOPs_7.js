class A{
    methoda(){
        console.log(`inside first method`);
    }
    methoda(n){
        this.n1=n
        console.log(`inside methood a with arguement ${this.n1}`);
    }
    methoda(n,m){

        console.log(`inside methood a with arguement ${n} and ${m}`);
    }
}

obj=new A;
obj.methoda();
obj.methoda(1)