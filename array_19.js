a=[10,11,2,7,3,6,1]

//w.a.p to find the highest of the given arrray 
console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));
//w.a.p to find the lowest of the given arrray 
console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));
//w.a.p to find the sum of the given arrray 
sum=a.reduce((n1,n2)=>n1+n2)
console.log(sum);
