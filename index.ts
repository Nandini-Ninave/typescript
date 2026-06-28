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

function nums(a:number, b:number, ...c:number[]){
    console.log(a,b,c)
}
nums(2,3,4,5)