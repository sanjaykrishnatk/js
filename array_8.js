//w.a.p to to print pairs whose sum is 6
b=[2,3,4,5]
pairs=false
sum=7
for(i=0;i<=b.length;i++){
    for(j=i+1;j<=b.length;j++){
        if(b[i]+b[j]==sum){
            pairs=true;
            console.log(`${b[i]},${b[j]}`);
        }
    }
}

!pairs && console.log(`no pairs`);