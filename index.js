"use strict";
// function fun(userName:string){
//     var userName:string = "hello"
// }
// var userName: string = "k";
// console.log(typeof userName);
// console.log(userName)
// let value: any = "hello"
// value = 1.1
// // value = true
// console.log(typeof value)
// console.log(value)
// let std: {
//     name: string,
//     age: number
// }=
// {
//     name: "Riya",
//     age:9
// }
// console.log(std)
// let arr:number[] = [1,2,3]
// console.log(arr)
// let arr:(number|string)[] = [1,2,3,"hello"]
// console.log(arr)
// let arr:Array<number|string> = [1,2,3,"hello"]
// console.log(arr)
// function std(name:string, age:number):void{
//     console.log(name, age)
// }
// std("pari", 12)
function std(name, age, course) {
    let info = course ? `${course}` : "";
    console.log(name, age, info);
}
std("pari", 12, "b.tech");
