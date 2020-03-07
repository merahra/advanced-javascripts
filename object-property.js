const student = [
    {id:21, name:"raju"},
    {id:31, name:"hobby"},
    {id:41, name:"rana"},
    {id:71, name:"hasib"}
]
const names = student.map(s => s.name);
const ids = student.map(s=>s.id);
const big = student.filter(s=>s.id>41);
const big1 = student.find(s=>s.id>31);
console.log(names,ids,big,big1);

// console.log(student.name);
// let output=[];
// for(let i=0; i<student.length; i++){
//     let element =student[i];
//     output.push (element);
// }
// console.log(output);

