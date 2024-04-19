//check string palindrome or not
str='malayalam';
length=str.length-1;
isPalindrome=true;
start=0;
// for(i=0;i<str.length;i++){
//  if(str[i]==str[length]){
//     length--;
//  }else{
//     isPalindrome=false;
// }
// }
while(start<length){
    if(str[start]!=str[length]){
        isPalindrome=false;
    }
    start++
    length--
}
console.log(isPalindrome?'Palindrome':'Not a palindrome');