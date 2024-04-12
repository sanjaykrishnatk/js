b=[2,3,4,5]
psum=6
low=0
up=b.length-1;
isPresent=false;
while(low<up){
    csum=b[low]+b[up]
    if(csum==psum){
        console.log(`(${b[low]},${b[up]})`);
        low++
        isPresent=true;
    }else if(csum<psum){
        low++
    }else{
        up--
    }
}
!isPresent && console.log(`no pair`);