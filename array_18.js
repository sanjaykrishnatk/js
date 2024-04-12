a=[10,11,12,13,14,15]
console.log(a.map(num => num**3));

sq=a.map(num => num>13 ? num-=1 : num+=1);
console.log(sq);