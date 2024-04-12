//call back function


function greet(name,callback){
    console.log(`Hai ${name}`);
    callback()
}

function callme(){
    console.log(`am a callback function`);
}

greet(`sanjay`,callme);