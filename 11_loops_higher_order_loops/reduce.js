const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reducedSum = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  10
);

console.log(reducedSum);

const cart = [
  { id: 1, productName: 'Milk', price: 120 },
  { id: 2, productName: 'Tea', price: 150 },
  { id: 1, productName: 'Coffee', price: 200 },
];

function mapper(accumulator, product) {
  return accumulator + product.price;
}
let total = cart.reduce(mapper, 30);

console.log(total);
