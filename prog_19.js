//w.a.p to find reverse of as number

num=123;
rem=0;
rev=0;
while(num!==0){
    rem=num%10;
    rev=rev*10+rem;
    num=Math.floor(num/10);
}
console.log(rev);