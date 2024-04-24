text="hai hello all hello world all"

//w.a.p to print word count

str=text.split(" ")
console.log(str);
wordCount={};
// for(word of str){
//     if(word in wordCount){
//         console.log(word+'already present');
//         wordCount[word]+=1
//     }else{
//         console.log(word+'not present');
//         wordCount[word]=1
//     }
// }

text.split(' ').forEach(item => {item in wordCount?wordCount[item]+=1:wordCount[item]=1});
console.log(wordCount);
