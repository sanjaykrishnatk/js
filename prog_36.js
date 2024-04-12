for(row=1;row<=9;row++){
    str='';
    if(row<=5){
        for(col=1;col<=row;col++){
            str+=`* `;
        }
        console.log(str);
    }else{
        for(col=9;col>=row;col--){
            str+=`* `;
        }
        console.log(str);
}
}