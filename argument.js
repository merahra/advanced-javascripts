function add(num1,num2){
    return num1+num2;
}
result = add(2,3);
console.log(result);
//uporer bishoy ta normal but keo jodi add(2,3,4,5,...n) tokhon argument use korbo


function jog(num21,num22){
    // console.log(argument);
    // console.log(...argument);
    console.log([...arguments]);
    return num21+num22+ arguments[2];//akta besi input hoise tai eta kintu for chalaile sob hobe
}
result = jog(2,3,5);
console.log(result);