//armstrong number

num=1634;
og=num;
temp=0;
rem=0;
length=num.toString().length;
while(num!==0){
   rem=num%10;
   temp+=rem**length;
   num=parseInt(num/10); 
}
if(og==temp){
    console.log(`${og} is an armstrong number`);
}else{
    console.log(`${og} is not an armstrong number`);
}