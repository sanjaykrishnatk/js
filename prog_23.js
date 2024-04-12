//w.a.p yo display number whose exponentials is in the range of 8-36 where user can input power value
power=2;
i=1
power_value=0;
while(i**power<=36){
    power_value=i**power;
    if(power_value>=8){
        console.log(i);
    }
    i++;
}