//prime number or not 

num=89;
flag=true;
if(num<=1){
 flag=false;
}else{
    for(var i=2;i<num;i++){
        if(num>1 && num%i==0){
        flag=false    
        break;   
        }
    }
}

flag?console.log(`${num} is a prime number`):console.log(`${num} is not a prime number`);