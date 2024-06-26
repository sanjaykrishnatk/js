//write methods for solving the given questions

class Bank{
    //propery
    accountDetails={
            1000:{
            acno:1000,username:'userone',password:'userone',balance:50000
        },
            1001:{
            acno:1000,username:'usertwo',password:'usertwo',balance:5000
        },   1002:{
            acno:1000,username:'userthree',password:'userthree',balance:10000
        },   1003:{
            acno:1000,username:'userfour',password:'userfour',balance:6000
        }   
    }
    validateAccount(acno){
        if(acno in this.accountDetails){
            return true;
        }
    }
    authenticateAccount(acno,uname,pwd){
        if(this.validateAccount(acno)){
            // console.log(this.accountDetails[acno].username);
            // console.log(this.accountDetails[acno].username);
            if(uname==this.accountDetails[acno].username&&pwd==this.accountDetails[acno].password){
                console.log('Authentication Successful');
            }else{
                console.log('Authentication Unsuccessful');
            }
        }  
    }
    checkBalance(acno,pwd){
        if(this.validateAccount(acno)&&pwd==this.accountDetails[acno].password){
            console.log(`Account Balance of ${acno} : ${this.accountDetails[acno].balance}`);
        }  
    }

     
    fundTransfer(debAcno,creAcno,amt,pwd){
        if(this.validateAccount(debAcno) && this.validateAccount(creAcno)){
            if(this.accountDetails[debAcno].balance>=amt){
                console.log('Account balance before transfer');
                this.checkBalance(debAcno,pwd)
                console.log(`Account Balance of ${creAcno} : ${this.accountDetails[creAcno].balance}`);
                this.accountDetails[debAcno].balance-=amt
                this.accountDetails[creAcno].balance+=amt
                console.log('Account balance after transfer');
                this.checkBalance(debAcno,pwd)
                console.log(`Account Balance of ${creAcno} : ${this.accountDetails[creAcno].balance}`);


            }else{
                console.log('Insufficient Balance');
            }

        }else{
            console.log('Account does not exist');
        }  
    }
}

// validate a given account number
console.log('validate a given account number');
console.log('-----------------------------------------');
   obj=new Bank();
   obj.validateAccount(1000)?console.log('Account Exists'):console.log('Account does not exists');
   console.log('-----------------------------------------');
   console.log('Authenticate the account');
   console.log('-----------------------------------------');
   obj.authenticateAccount(1000,'userone','userone')
   console.log('-----------------------------------------');
   console.log('check balance');
   console.log('-----------------------------------------');
   obj.checkBalance(1000,'userone')
   console.log('-----------------------------------------');
   console.log('fund transfer');
   console.log('-----------------------------------------');

   obj.fundTransfer(1000,1001,5000,'userone')

//authenticate the account

//check the balance

//fund transfer