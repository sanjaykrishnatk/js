function display(num){
    expression.value+=num;
}
function clearAll(){
    expression.value="";
}
function op(){
    try{
        expression.value=eval(expression.value)
    }catch(error){
        expression.value='ERROR';
        setTimeout(clearAll,1000)
    }
}
function back(){
    expression.value= expression.value.slice(0,-1);
}