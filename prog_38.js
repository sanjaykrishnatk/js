for(i=1;i<=10;i++){
    str="";
    if(i<5){
        for(spa=5;spa>i;spa++){
            spa+=" ";
        }
        for(j=1;j<=i;j++){
            str+=" *"
        }
        console.log(str);
    }else{
        for(spa=6;spac<=i;spa++){
            str+=" "
        }
        for(j=10;j>i;j--){
            str+=" *"
        }
        console.log(str);
    }
}