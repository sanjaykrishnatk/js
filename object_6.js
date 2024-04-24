array=[10,20,30,40,30,20,50,60,70,10,40,80]
//w.a.p to find number count from the given array
nc={};
array.forEach(item => { item in nc?nc[item]+=1 : nc[item]=1});
console.log(nc);