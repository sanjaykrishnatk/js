// for(i=1;i<=4;i++){
//     str="";
//  if(i==1){
//     for(j=4;j>i;j--){
//         str+=" ";
//     }
//     for(j=1;j<=i;j++){
//         str+="* ";
//     }
//     console.log(str);
//  }else if(i>1 && i<=3){
//     for(j=4;j>i;j--){
//         str+=" ";
//     }
//     for(j=1;j<=2;j++){
//         if(i==3){
//             str+="*   ";
//         }else{
//             str+="* ";
//         }
//     }
//     console.log(str);
//  }else{
//     for(j=1;j<=4;j++){
//         str+="* "; 
//     }
//     console.log(str);
//  }
//  }  

for(row=1;row<=4;row++){
    str='';
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str+="*";
        }else{
            str+=" ";
        }
    }
    console.log(str);
}