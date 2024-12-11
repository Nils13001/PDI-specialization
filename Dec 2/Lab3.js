let mynum = [10, 20, 30, 40];

var tot = mynum.reduce((acc, item) => acc+item, 700);

var sq = mynum.map((item)=>item*item);

console.log(tot);
console.log(sq);

