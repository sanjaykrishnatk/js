a=['max','miller','mini','manu']
console.log(a);
//remove mini and manu
a.splice(2,2)
console.log(a);
//add maxwell as third item
a.splice(2,0,'Maxwell')
console.log(a);

//remove miller and add ken at same position as that of miller
a.splice(1,1,'Ken')
console.log(a);