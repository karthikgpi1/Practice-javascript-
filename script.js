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

//-------------------------------


// fetch('https://restcountries.com/v3.1/all')
//     .then((resp) => resp.json())
//     .then((result) => {
//         result.forEach((element) => {
//             console.log(element.name);
//         }); 
//     })

//     .catch((err) => console.log(err));
    


    //------------------------

    // fetch('https://restcountries.com/v3.1/all')
    // .then((resp) => resp.json())
    // .then((result) => {
    //     result.forEach((element) => {
    //         let { name, religion} = element;
    //         console.log(name, religion);
    //     }); 
    // })

    // .catch((err) => console.log(err));
    
//-----------array forloop in modulus-------------

// let data = [1,2,3,4,5,6,7,8,9,10];

// let arr1 = [];

// for (let index = 0; index < data.length; index++)  {
//     if (data[index] % 2 === 0) {
//         console.log(data[index]);
//         arr1.push(data[index]);
//     }
// }
      
// console.log(arr1);

//------------------------------

// let data = [1,2,3,4,5,6,7,8,9,10];

// let arr1 = [];

// for (let index = 0; index < data.length; index++)  {
//     if (data[index] % 2 !== 0) {
//         console.log(data[index]);
//         arr1.push(data[index]);
//     }
// }
      
// console.log(arr1);


//-----------------------same concept with foreach method---

// let data = [1,2,3,4,5,6,7,8,9,10];

// let arr1 = [];

// data.forEach (function (value) {
//     if (value % 2 != 0) {
//         arr1.push(value)
//     }
// });
    

      
// console.log(arr1);


//----------------filter and reduce--------------


// let data = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;
// data.forEach(function (value) {
//     if (value % 2 !=0) {
//         sum += value;
//     }
// });

// console.log(sum);

// let arr1 = data.filter((value) => {
//     return value % 2 !== 0;
// });
// console.log(arr1);


// let result = arr1.reduce(function (prev, curr) {
//     return prev + curr;
// });

// console.log(arr1,result);


//------------map method------------


// let obj = [
//     {
//         name: "karthik",
//         age: 22,
//         place: "vellore",
//         email: "karthikgopi420@gmail.com",
//     },

//     {
//         name: "gopi",
//         age: 27,
//         place: "vellore",
//         email: "gopijothi@gmail.com",
//     },

//     {
//         name: "sri",
//         age: 24,
//         place: "vellore",
//         email: "srisri@gmail.com",
//     },

//     {
//         name: "jagan",
//         age: 23,
//         place: "vellore",
//         email: "jagansri619@gmail.com",
//     },
// ];

// let emailArr = obj.map((element) => {
//     return element.email;
// });

// console.log(emailArr);


//--------------------------------------


// let obj = [
//     {
//         name: "karthik",
//         age: 22,
//         place: "vellore",
//         email: "karthikgopi420@gmail.com",
//     },

//     {
//         name: "gopi",
//         age: 27,
//         place: "vellore",
//         email: "gopijothi@gmail.com",
//     },

//     {
//         name: "sri",
//         age: 24,
//         place: "vellore",
//         email: "srisri@gmail.com",
//     },

//     {
//         name: "raki",
//         age: 24,
//         place: "vellore",
//         email: "rakibhai@gmail.com",
//     },

//     {
//         name: "jagan",
//         age: 22,
//         place: "vellore",
//         email: "jagansri619@gmail.com",
//     },
// ];

// obj.filter((element) => {
//     if (element.age == 22 || element.age == 24)
//     console.log(element);
// });


//-----------------------------------



// let obj = [
//     {
//         name: "karthik",
//         age: 22,
//         place: "vellore",
//         email: "karthikgopi420@gmail.com",
//     },

//     {
//         name: "gopi",
//         age: 27,
//         place: "vellore",
//         email: "gopijothi@gmail.com",
//     },

//     {
//         name: "sri",
//         age: 24,
//         place: "vellore",
//         email: "srisri@gmail.com",
//     },

//     {
//         name: "raki",
//         age: 24,
//         place: "vellore",
//         email: "rakibhai@gmail.com",
//     },

//     {
//         name: "jagan",
//         age: 22,
//         place: "vellore",
//         email: "jagansri619@gmail.com",
//     },
// ];

// let rr = obj.reduce((prev, curr) => {
//     if ( curr.age == 24) {
//         console.log("prev", prev);
//         console.log(curr);
//     }
// }, 0);

// console.log(rr);

//-----------------------





