for(i=1;i<=4;i++){
    str="";
    for(j=4;j>i;j--){
        str+=" ";
    }
    for(j=1;j<=i;j++){
        str+="* ";
    }
    console.log(str);
}