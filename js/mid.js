
$(document).ready(function () {
    $("span").detach();
    $("p").last().text($("p").first().text());

});
// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
// let promise = job(true);
// promise.then(function (data) {
//     console.log(data);
//     return job(false);
// })
//     .catch(function (error) {
//         console.log(error);
//         return 'Error caught';
//     });


// var a = 10;
// var b = 8;
// function x(a) {
//     b = 2;
//     var sum = a + b;
//     console.log("sum " + sum);
//     var c = function () {
//         2 * b;
//     }
//     var b = 3;
//     console.log(b);
//     return c;
// }
// var c = x(a);
// c();



// "use strict";

// (function () {
//     function Employee(id) {
//         this.id = id;
//         this.name = "Default";
//         this.employer = {
//             name: "MUM"
//         };
//     }

//     // Employee.prototype.getName = function () {
//     //     return this.name;
//     // }

//     // Employee.prototype.getEmployerName = function () {
//     //     return this.employer.name;
//     // }

//     var employee = new Employee(98000);
//     var john = Object.create(employee);
//     john.getName = function () {
//         return this.name;
//     }
//     john.getEmployerName = function () {
//         return this.employer.name;
//     }
//     console.log(john.getEmployerName());
// }
// )();

// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//     console.log("x1: " + x);
//     console.log("a2: " + a);
//     var f = function () {
//         b = a;
//         console.log("b3: " + b);
//         b = c;
//         var a = 3;
//     }
//     f();
//     console.log("b4: " + b);
//     x = 6;
// }
// c(8, 9, 7);
// console.log("b5: " + b);
// console.log("x6: " + x);