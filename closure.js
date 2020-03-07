function stopwatch(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

//closure ???
//closure: kono akta function er moddhe aro akta function thake and ei second function take amra jodi 
//return kori tahole akta close environment toiri kore nijer akta external variable ke follow kore eke closure bole
//thatjsdude.com