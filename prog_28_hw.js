//armstrong numbers between 8 and 500
min=8;
max=500;
for(min=8;min<max;min++){
    len=min.toString().length;
    num=min;
    sum=0;
    rem=0;
    for(i=1;i<=len;i++){
      rem=num%10;
      sum+=rem**len;
      num=parseInt(num/10);
    }
    if(sum==min && len>1){
        console.log(sum);
    }
}


