const library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling',
    status: { own: true, reading: false, read: false },
  },
  {
    title: 'Wings of Fire',
    author: 'Dr. APJ Abdul Kalam',
    status: { own: true, reading: false, read: false },
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kioshaki',
    status: { own: true, reading: false, read: false },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//De-structuring
// const { title: first_book } = library[0];

// console.log(first_book);

//convering to json

const str = JSON.stringify(library);
console.log(str);
const libraryJson = JSON.parse(str);
console.log(libraryJson);
