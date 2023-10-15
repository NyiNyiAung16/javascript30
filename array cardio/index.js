const inventors = [
    {first:'mgmg',last:'oo',year:1500,passed:1700},
    {first:'lin',last:'lin',year:1490,passed:1522},
    {first:'susu',last:'aung',year:1362,passed:1466},
    {first:'kyaw',last:'oo',year:1688,passed:1769},
    {first:'zin',last:'mar',year:1544,passed:1725},
    {first:'ma',last:'hla',year:1523,passed:1763},
    {first:'ko',last:'pyoe',year:1399,passed:1488}
];

const people = [
    'mg,aung',
    'zin,mar',
    'lin,lin',
    'ko,phoe',
    'ma,hla',
    'maung,aung',
    'su,mar',
    'thet,aung',
    'thet,htoo',
    'htoo,aung',
    'aung,khaing',
    'mani,lar'
];

// Array.prototype.filter
const fifteenYears = inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1600 ? true : false);

console.table(fifteenYears);


// Array.prototype.map
const fullName = inventors.map(inventor => {
    return `${inventor.first} ${inventor.last}`;
});
console.log(fullName);


// Array.prototype.sort
const earlyYear = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(earlyYear)


// Array.prototype.reduce
const totalyears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year);
},0);
console.log(totalyears)


//sort by inventor lived years
const live = inventors.sort((a,b)=>{
    const lastguy = a.passed - a.year;
    const nextguy = b.passed - b.year;
    return lastguy > nextguy ? -1 : 1;
});
console.table(live);


//sort by last name 
const alpha = people.sort((a,b)=>{
    const [afirst,alast] = a.split(',');
    const [bfirst,blast] = b.split(',');
    return alast > blast ? 1 : -1;
});
console.table(alpha);


const data = ['car','car','truck','bike','walk','car','van','bike','walk','van','car','truck'];

const transportation = data.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(transportation)