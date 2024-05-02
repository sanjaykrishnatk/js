accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('total no of accounts');
console.log('---------------------------------------------');
console.log(accounts.length);
console.log('---------------------------------------------');
//2. print account number whose ac_type is savings
console.log('account number whose ac_type is savings');
console.log('---------------------------------------------');
accounts.filter(ac=>ac["ac_type"]=='savings').forEach(ac=>console.log(ac));
console.log('---------------------------------------------');
//3.print the balance of accnount number 1000
console.log('the balance of account number 1000');
console.log('---------------------------------------------');
ac_1000=accounts.find(ac=>ac.acno==1000);
console.log(ac_1000.balance);
console.log('---------------------------------------------');

//4. print all gpay transactions
console.log('all gpay transactions');
console.log('---------------------------------------------');
gpay=accounts.map(ac=>ac.transaction);
gpay.forEach(ac=>ac.filter(item=>item.mode=='gpay').forEach(txn=>console.log(txn)))
console.log('---------------------------------------------');
//5. print all transaction whose amount > 5000
console.log('all transaction whose amount > 5000');
console.log('---------------------------------------------');
txn=accounts.map(ac=>ac.transaction);
txn.forEach(ac=>ac.filter(item=>item.amount>5000).forEach(txn=>console.log(txn)))
console.log('---------------------------------------------');
//6. print credit transaction of account 1002
console.log('credit transaction of account 1002');
console.log('---------------------------------------------');
credit=accounts.map(ac=>ac.transaction);
credit.forEach(ac=>ac.filter(item=>item.to==1002).forEach(txn=>console.log(txn)))
console.log('---------------------------------------------');
//7. print debit transaction of account 1002
console.log('debit transaction of account 1002');
console.log('---------------------------------------------');
debit=accounts.find(item=>item.acno==1002);
debit.transaction.forEach(txn=>console.log(txn))
console.log('---------------------------------------------');
//8. print transaction history of 1002
console.log('transaction history of 1002');
console.log('---------------------------------------------');
console.log('--------credit------------------');
credit=accounts.map(ac=>ac.transaction);
credit.forEach(ac=>ac.filter(item=>item.to==1002).forEach(txn=>console.log(txn)))
console.log('--------debit------------------');
debit=accounts.find(item=>item.acno==1002);
debit.transaction.forEach(txn=>console.log(txn))
//spread operator(...) to combine two arrays
console.log('---------------------------------------------');
//9. print highest balance account details
console.log('highest balance account details');
console.log('---------------------------------------------');
highest=accounts.reduce((a1,a2)=>a1.balance>a2.balance?a1:a2)
console.log(highest);