// EXAMPLE 1 - Update an Object's Property in an Array of Objects using `findIndex`

const arr = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Charlie'},
];

const index = arr.findIndex(obj => {
  return obj.id === 2;
});
console.log(index); // 👉️ 1

arr[index].name = 'Alfred';

// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Alfred' },
//   { id: 3, name: 'Charlie' }
// ]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Update an Object's Property in an Array of Objects using `map`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 1, name: 'Bob'},
//   {id: 3, name: 'Charlie'},
// ];

// const newArr = arr.map(obj => {
//   if (obj.id === 1) {
//     return {...obj, name: 'Alfred'};
//   }

//   return obj;
// });

// // [
// //   { id: 1, name: 'Alfred' },
// //   { id: 1, name: 'Alfred' },
// //   { id: 3, name: 'Charlie' }
// // ]
// console.log(newArr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Update an Object's Property in an Array of Objects using `for...of`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 1, name: 'Bob'},
//   {id: 3, name: 'Charlie'},
// ];

// for (const obj of arr) {
//   if (obj.id === 1) {
//     obj.name = 'Alfred';

//     break;
//   }
// }

// // [
// //   { id: 1, name: 'Alfred' },
// //   { id: 1, name: 'Bob' },
// //   { id: 3, name: 'Charlie' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Update an Object's Property in an Array of Objects using `find`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Charlie'},
// ];

// const obj = arr.find(obj => {
//   return obj.id === 2;
// });

// console.log(obj); // 👉️ { id: 2, name: 'Bob' }

// if (obj !== undefined) {
//   obj.name = 'Alfred';
// }

// // [
// //   { id: 1, name: 'Alice' },
// //   { id: 2, name: 'Alfred' },
// //   { id: 3, name: 'Charlie' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Update an Object's Property in an Array of Objects using `for`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Charlie'},
// ];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index].id === 2) {
//     arr[index].name = 'Alfred';
//     break;
//   }
// }

// [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Alfred'},
//   {id: 3, name: 'Charlie'},
// ];
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Change a Value of an Object in an Array using `Array.slice()`

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 2, name: 'Bob'},
//   {id: 3, name: 'Carl'},
// ];

// const index = arr.findIndex(object => {
//   return object.id === 2;
// }); // 👉️ 1

// let updatedArray = [];

// if (index !== -1) {
//   const updatedObject = {...arr[index], name: 'John'};

//   updatedArray = [
//     ...arr.slice(0, index),
//     updatedObject,
//     ...arr.slice(index + 1),
//   ];
// }

// // [
// //   { id: 1, name: 'Alice' },
// //   { id: 2, name: 'John' },
// //   { id: 3, name: 'Carl' }
// // ]
// console.log(updatedArray);
