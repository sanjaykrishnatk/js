num=11;
for(row=1;row<=5;row++){
    str="";
    for(j=1;j<=5-row;j++){
        str+="   ";
    }
    for(col=1;col<=2*row-1;col++){
       str=str+num+" " 
       num++
    }
    console.log(str);
}