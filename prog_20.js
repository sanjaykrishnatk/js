//palindrome or not
num=121;
temp=num;
rem=0;
rev=0;
while(num>0){
rem=num%10;
rev=rev*10+rem;
num=Math.floor(num/10);
}
if(rev==temp){
    console.log(`Palindrome number`);
}else{
    console.log(`Not a palindrome number`);
}