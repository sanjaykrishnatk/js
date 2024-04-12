//nested array

a=[[2,10],[50,25],[2,100],[7,66],[33,9]]

//w.a.p to find the numbers less thanor equal to 10

for(let num of a){
    // console.log(num);
    for(let i of num){
        if(i<=10){
            console.log(i);
        }
    }
}