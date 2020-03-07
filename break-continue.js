const num = [1,2,3,4,5,6,7,8,9,10,11];
for(let i=0; i<num.length;i++){
    console.log(num[i]);
    if(num[i]>5){           /* eta run korle loop okhane stop hoye jabe*/
        break;
    }
}

const num2 = [1,2,-3,4,-5,6,7,8,-9,10,11];
for(let i=0; i<num2.length;i++){
    console.log(num2[i]);
    if(num2[i]<0){           /* eta run korle <o or negetive value bad diye loop run korbe*/
        continue;
    }