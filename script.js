//--------------------


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];


// console.log(arr1, arr2);

// console.log(arr1.concat(arr2));    //es5

// console.log([...arr1, ...arr2]);   // es6

// console.log(...arr1, ...arr2);      //this is new method
                                   //for using without cama

//-----------------spread-------------------------------


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];


// let obj1 = {
//     a: 1,
//     b: 2,
// };

// let obj2 = {
//     c:3,
//     d: 4
// };

// let x = ["hello"];

// console.log([...arr1, ...arr2, ...x]);  //three dot is spread operators

// console.log({...obj1, ...obj2});

//------------------rest-----------------------------



// function foo(x,y) {       //it doesn't care about rest object
//     console.log(x,y);
// }

// foo(1,2,3,4,5,6,7,8,9);

//-------------------------


// function foo(x, ...y) {     //thrible dot is rest object
//     console.log(x,y);
// }

// foo(1,2,3,4,5,6,7,8,9);

//--------------------------------
