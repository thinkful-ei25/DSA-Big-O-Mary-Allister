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


//////// example of O(n)
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

console.log('Generate Fib:', generateFib(7));

//////// example of O log(n)

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

console.log('Efficient Search:', efficientSearch([1,2,3,4,5,6], 7))

////////example of O (1)

function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log('Random element: ', findRandomElement([1, 3, 5, 7, 9, 11]))

//////// example of O (n)

function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

console.log('is prime?:', isPrime(37))