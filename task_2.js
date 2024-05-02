// 2) Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

str='dog'
op=[];
for(i=0;i<str.length;i++){
    for(j=i+1;j<=str.length;j++){
        op.push(str.substring(i,j))
    }
}
console.log(op);