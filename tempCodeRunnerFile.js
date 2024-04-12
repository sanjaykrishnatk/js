//palindrome or not
num=22;
let temp=num;
rem=0;
rev=0;
while(temp>0){
rem=temp%10;
rev=rev*10+rem;
temp=Math.floor(temp/10);
}
if(rev==num){
    console.log(`Palindrome number`);
}else{
    console.log(`Not a palindrome number`);
}