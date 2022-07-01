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


// function foo(x, ...y) {     //trible dot is rest object
//     console.log(x,y);       //trible dot is placed only last parameters 
// }                           //incase we have placed first parameters its error an console 

// // foo(1,2,3,4,5,6,7,8,9);

// foo(1, {a:2}, {b:3}, 4, 5, 6, "hello", 7, 8, 9);

//-------------foreach-------------------

// let obj = {
//     name: "john",
//     task:["sleep","eat", "walk"],
//     showTask:function () {
//     this.task.forEach(function (task) {
//         console.log(task);
//     });

//    },
// };


// obj.showTask();



//---------------------------------------


// let obj = {
//         name: "john",
//         task:["sleep","eat", "walk"],
//         showTask:function () {
//         let_this = this;                        //using for john sleep, john eat, john walk
//         this.task.forEach(function (task) {
//             console.log(_this.name, task);
//         });
    
//        },
//     };
    
    
//     obj.showTask();


//---------------array destructuring------------------------


// let obj1 = {
//     name:"john",
//     task: ["sleep", "eat", "walk"],
// };

// let obj2 = {
//     name:"sally",
//     task: ["sleep", "eat", "walk"],
// };   

// let arr1 = [1,2,3,4,5];

// let x, y;

// [x, y] = arr1;

// console.log(x, y);


//---------------------------------



// let obj1 = {
//     name:"john",
//     task: ["sleep", "eat", "walk"],
// };

// let obj2 = {
//     name:"sally",
//     task: ["sleep", "eat", "walk"],
// };   

// let arr1 = [1,2,3,4,5];

// let x, y;

// [x, y, ...z] = arr1;        //trible dot is rest objects

// console.log(x, y, z);

//------------------------------------

// let obj1 = {
//     name:"john",
//     task: ["sleep", "eat", "walk"],
// };

// let obj2 = {
//     name:"sally",
//     task: ["sleep", "eat", "walk"],
// };  


// let { task } = obj1;
// console.log(task);

