a=[10,20,30,20,30,40,50,60,10,10,30,20]
output=[];
// for(let i in a){
//     count=0;
//     temp=a[i];
//     for(let num of a){
//         if(num==temp){
//             count++;
//         }
//     }
//     if(count>1){
//         present=false;
//         for(let num of output){
//             if(num==temp){
//                 present=true;
//                 break;
//             }
//         }
//         if(!present){
//          output.push(a[i]);
//         }
//     }
// }
// console.log(output);

for(i=0;i<=a.length;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j]){
            present=false;
            for(let num of output){
                if(num==a[i]){
                    present=true;
                    break;
                }
            }
            if(!present){
             output.push(a[i]);
            }
        }
    }
}
output.length === 0 ? console.log('No duplicates'):console.log(output);

     