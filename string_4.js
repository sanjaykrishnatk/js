sentence='good morning all'

//w.a.p to print all vowels in the given sentence. [a,e,i,o,u]
str=sentence.split('');
vowels=['a','e','i','o','u']
// str.forEach(letter=>vowels.includes(letter)&&console.log(letter))
str.filter(letter=>vowels.includes(letter)).forEach(letter=>console.log(letter))