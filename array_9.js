//w.a.p to print common numbers from a given array
p=[10,11,12,20,30]
q=[11,20,25,30,33]
// common=[];
//common 11,20,30

// for(i=0;i<p.length;i++){
//     for(j=0;j<q.length;j++){
//         if(p[i]==q[j]){
//         common.push(p[i]);
//         }
//     }
// }
// common.length===0 ? console.log(`No common elements`):console.log(common);
isFound=false;
for(let i of p){
    for(let j of q){
        if(i==j){
            isFound=true;
            console.log(i);
        }
    }
}
!isFound && console.log(`no common numbers`);