let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);

arr = arr.reverse();
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
arr1.pop();
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [5, 6, 7, 8, 9, 10];

const arr6 = arr4.concat(arr5.slice(1));

console.log(arr6);
