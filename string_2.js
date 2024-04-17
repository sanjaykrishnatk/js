//w.a.p to check given number is mob no or not 10digit
//w.a.p to check given mail id is @gmail.com
//w.a.p to check a word starts with q

num='1234567895'
console.log(num.length==10?`Valid Mobile number`:`Invalid number`);

mail='test@gmail.com'
console.log(mail.endsWith('@gmail.com')?`Valid Gmail ID`:`Invalid Gmail ID`);

str='quotient'
console.log(str.startsWith('q')?`Word starts with "q"`:`Word does not starts with "q"`);