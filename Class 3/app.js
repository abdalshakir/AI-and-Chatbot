// Pass by Reference or Pass by Value

let arr1 = [1,2,4,6];
let arr2 = arr1

arr1.push(10);

console.log("arr1 :", arr1);
console.log("arr2 :", arr2)

arr2 = [...arr1];

let obj1 = {
    name: 'saad',
    phone: 123456
}

let obj2 = obj1;

obj2.name = 'asad';

console.log('obj1 :' , obj1);
console.log('obj2 :' , obj2);

obj2 = Object.assign({}, obj1);