const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const cut = nums.slice(2,8);/** 2no. index er age and 8 no index soho er porer index gulo dlete korbe*/
console.log(cut);
console.log(nums);//main arry slice change kore na

const nums2 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const remove =nums2.splice(2,8);/* 2 no. index soh er por theke 8ta index delete korbe...(8no index porjonto delete noi)*/
const removeAndInject =nums2.splice(2,8,3,2,11,23);
console.log(remove);
console.log(nums2);// main array splice change kore dei

/// duitar majhe difference run koralei pawa jave

const together = nums.join("");
console.log(together);
const together2 = nums.join(" ");
console.log(together2);
const together3 = nums.join(",");
console.log(together3);
const together4 = nums.join("ami");
console.log(together4);