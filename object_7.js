//w.a.p to find the first recursive letter
pattern='ABCBBCAACB'
arr=pattern.split("");
obj={}
for(let letter of arr){
    if(letter in obj){
        obj[letter]+=1
        console.log(`First Repeated Letter is ${letter}`);
        break;
    }else{
        obj[letter]=1;
    }
}

// Array.from(pattern).map(char=>char in obj?console.log(char):obj[char]=1)