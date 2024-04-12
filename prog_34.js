// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(row=1;row<=4;row++){
    str='';
    for(col=1;col<=row;col++){
        str+=`${col} `
    }
    console.log(str);
}