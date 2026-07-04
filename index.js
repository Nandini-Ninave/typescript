"use strict";
// function fun(userName:string){
//     var userName:string = "hello"
// }
function getDim(shape, point) {
    return (`${shape} - ${point.x} - ${point.y}`);
}
console.log(getDim("circle", { x: 20, y: 90 }));
let id;
id = "pari";
console.log(id);
id = 90;
console.log(id);
function getArr(arr) {
    console.log(arr);
}
getArr([1, "hello", 90, true]);
function getInfo(person) {
    console.log(`${person.id} - ${person.name}`);
}
getInfo({ name: "pari", id: 90 });
function addfun(addnum, a, b) {
    console.log(addnum(a, b));
}
const add = (x, y) => x + y;
addfun(add, 5, 10);
