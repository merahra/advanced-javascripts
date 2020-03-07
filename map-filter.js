const num = [2,3,4,6,7,12,5];
const output =[];
for(let i=0; i<num.length; i++){
    const element = num[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// function square(element){
//     return element * element;
// }
// const square = element => element *element;*****upore function er shortcut
// const result = num.map(square);//map mane holo kono ekta element ke dhore kono kisu kora
const result = num.map(element => element*element);
console.log(result);

// filter holo condition apply kore kono kisu ber kora
const bigger = num.filter(element => element>5);
console.log(bigger);

//arekta bapar ase es-6 e "find" eta filter er moto kaj kore tobe difference holo filter joto gulo
//ase sob gulo array kore diye dai
//kintu find sudhu prothom aktake dei jeta filter kore je array pawa jai sekhan theke
const big = num.find(element => element>5);
console.log(big);