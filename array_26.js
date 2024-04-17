//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log(`district having Highest +ve case`);
console.log(`----------------------------------`);
  positiveCase=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
  console.log(positiveCase[1]);
//2. district having Highest 1st dose vaccine
console.log(`district having Highest 1st dose vaccine`);
console.log(`----------------------------------`);
  firstDose=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
  console.log(firstDose[1]);
//3. district having lowest death rate
console.log(`district having lowest death rate`);
console.log(`----------------------------------`);
  deathRate=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
  console.log(deathRate[1]);
//4. sort data with +ve case in descending order
console.log(`sort data with +ve case in descending order`);
console.log(`----------------------------------`);
    covid_data.sort((d1,d2)=>d2[2]-d1[2]).forEach(data=>console.log(data))
//5. is district with +ve cases > 15000
console.log(`district with +ve cases > 15000`);
console.log(`----------------------------------`);
abv15=covid_data.some(data=>data[2]>15000)
console.log(abv15?'yes':'no');
//6. sort data with 1st dose vaccine ascending order
console.log(`sort data with 1st dose vaccine ascending order`);
console.log(`----------------------------------`);
   covid_data.sort((d1,d2)=>d1[5]-d2[5]).forEach(data=>console.log(data))
//7. Print Thrissur details
console.log(`Thrissur details`);
console.log(`----------------------------------`);
thrissur=covid_data.find(data=>data[1]=='Thrissur')
console.log(thrissur);
//8. Print total number of positive cases
console.log(`total number of positive cases`);
console.log(`----------------------------------`);
totalCases=covid_data.map(pc=>pc[2]);
console.log(totalCases.reduce((d1,d2)=>d1+d2));
//9. Print total number of curred cases
console.log(`total number of curred cases`);
console.log(`----------------------------------`);
totalCured=covid_data.map(cc=>cc[4]);
console.log(totalCured.reduce((d1,d2)=>d1+d2));
//10. Print curred cases in Idukki
console.log(`cured cases in Idukki`);
console.log(`----------------------------------`);
idukki=covid_data.find(data=>data[1]=='Idukki')
console.log(idukki[4]);