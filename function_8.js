//nested function

const global = 'global';

const parent =()=>{
    let parentVariable ='Parent';
    console.log(`parent variable is ${parentVariable}`);
    //cannot be accessed as it is inside child function console.log(`parent variable is ${childVariable}`); 

    const child=()=>{
        let childVariable ='Child';
        console.log(`parent variable is ${childVariable}`); 
        console.log(`parent variable is ${parentVariable}`);
  
    }
    child()
}

parent()