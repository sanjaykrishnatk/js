baleno={
    model:'Hatch back',
    manufacturer:'Maruti',
    varient:['automatic','manual']
}
glanza={
    manufacturer:'Toyota'
}
glanza.__proto__=baleno
console.log(glanza.model);
