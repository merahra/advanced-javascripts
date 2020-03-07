let bonus = 20;  //global scope
function sum(first, second){
    let result = first + second + bonus;
    console.log(result); /*functioner vitore kaj korbe baire noi*/
    if(result>9){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}
const output = sum(2,23);
console.log(bonus);
console.log(output);


// whesting ki ?
//kono kisu declare korle otar scope take upore tene function theke ber kore uporer parent er sathe jog kore dibe
//bloc scope ki
//global scope ki?
//referral website for scope
//thatjsdude.com