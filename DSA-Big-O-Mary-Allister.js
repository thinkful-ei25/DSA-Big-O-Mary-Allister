////// Example of o(1)
// function isEven(value){
//     if (value % 2 == 0){
//       return true;
//     }
//     else
//       return false;
//   }
//   console.log(isEven(3))


  ////// Example of o(n^2)
//   function areYouHere(arr1, arr2) {
//     for (let i=0; i<arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j=0; j<arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// console.log(areYouHere([1,2,3],[2,2,5]))

//////// Example of o(n)
// function doubleArrayValues(array) {
//     for (let i=0; i<array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }
// console.log(doubleArrayValues([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9]))

//////// Example of o(n)
// function naiveSearch(array, item) {
//     for (let i=0; i<array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
// console.log(naiveSearch([1,2,3], 2))

//////// Example of o(n^2)
// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
   
//         }
//     }
//     return 'done'
// }
// console.log(createPairs([1,2,3,4,5]))