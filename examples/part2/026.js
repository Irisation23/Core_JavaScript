//자료형 변환 이해하기
//묵시적 형변환
console.log("5" + 1);
console.log("5" - 1);

console.log("5" + 1); // 51
console.log("5" - 1); // 4
console.log("There is " + 5); //There is 5
console.log("Five" * 2); // NaN

//명시적 형변환
var str = 5;
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);