'use strict';

//////// example of O (n)

function countSheep(num){
    //stopping condition of base case
    
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

countSheep(5);


//////// example of O (n)

function double_all(arr) {
    console.log(arr);
    if (!arr.length) {
        return [];
    }
    let x = [arr[0] * 2, ...double_all(arr.slice(1))];
    console.log(x);
    return x;
}

double_all([1, 2, 3, 4])


//////// example of O (n)

function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

//////// example of O (n)

function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}


//////// example of O (n)
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//////// example of log(n)

let binaryCounter = 0;
function convertToBinary(num){
    binaryCounter++;
    if(num>0) {
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    } else {
        return ''; //base case - at some point the divisions will lead to 0
    }
}

console.log(convertToBinary(1000));
console.log(binaryCounter);


///////// example of 0 (n)
function add(num) {
    if ( num === 100) {
        return 'done'
    }
    return add(num + 1)
}

add(99)
////example of O(n)
function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
      return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
  }


  /////////////////////////////////////////O(2^n)
  let count= 0;
  function fibonacci(n) {
   count++;
    if (n <= 0) {
      return 0;
    }
    // Base case
    if (n <= 2) {
      return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }



  //////////////////////////////////////////////////// o(2^n)
  function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}


animals{
    mammals{
        dogs{
            husky
            golden
        }
        cats{
            bengal
        }
    }
}