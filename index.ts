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

    // function std(name:string, age:number, course?:string){
    //     let info = course?`${course}`:""
    //     console.log(name, age, info)
    // }
    // std("pari", 12, "b.tech")

// function std(name:string, age:number, course:string = "M.Tech"){
//     let info = course?`${course}`:""
//     console.log(name, age, info)
// }
// std("pari", 12)

// function add({a,b}:{a:number, b:number}){
//     return a+b
// }
// console.log(add({a:2,b:3}))

// function nums(a:number, b:number, ...c:number[]){
//     console.log(a,b,c)
// }
// nums(2,3,4,5)


//interface
// interface Std{
//     name:string, 
//     age:number,
//     course:string
// }
// let std:Std={
//     name:"pari",
//     age:19,
//     course:"B.tech"
// }
// function userInfo(std:Std):string{
//     return (`${std.name} - ${std.age} - ${std.course}`)
// }
// console.log(userInfo(std))

//type alias for object
type Point = {
    x:number,
    y:number
}
type Shape = "circle"|"square"
function getDim(shape:Shape, point:Point):string{
    return (`${shape} - ${point.x} - ${point.y}`)
} 
console.log(getDim("circle", {x:20, y:90}))

//type alias for union
type Id = number|string
let id:Id
id = "pari"
console.log(id)
id = 90
console.log(id)

//type alias for array
// type NumArray = string[]
// function getArr(numArr:NumArray):void{
//     console.log(numArr)
// }
// getArr(["Hello","world"])

//type alias for tuple
type Arr = [number,string,number,boolean]
function getArr(arr:Arr):void{
    console.log(arr)
}
getArr([1,"hello", 90, true])

//type alias for intersection
type Emp={
    name:string
}
type Std={
    id:number
}
type Person = Emp & Std
function getInfo (person:Person):void{
    console.log(`${person.id} - ${person.name}`)
}
getInfo({name:"pari", id:90})

//type alias for function 
type Add = (a:number,b:number)=>number
function addfun (addnum:Add, a:number, b:number):void{
   console.log(addnum(a,b))
}
const add:Add = (x:number,y:number)=>x+y
addfun(add, 5,10)