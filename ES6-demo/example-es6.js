// let [a,b,c] = [1,2]  不完全解构
// console.log(a,b,c) // 1 2 undefined

// let [a,b = 2, c] = [1,undefined,3] // 默认值
// console.log(a,b,c) // 1 2 3

// function fn() {
//     return 2
// }
// let [x = fn()] = [undefined]
// console.log(x) // 2

// let {name, age} = {name: 'deejay', age: 21}
// console.log(name,age) // deejay 21

// let {age, name} = {name: 'deejay', age: 21}
// console.log(age,name) // 21 'deejay'

// let {name: N, age} = {name: 'Deejay'}
// console.log(N) // Deejay
// console.log(name) // ReferenceError

// let {sin, cos, tan} = Math

// [[1, 2], [3, 4]].map(([a, b]) => {console.log(a + b)});

// function fn (x,x,y) {
//     console.log(x,x,y)
// }
// fn(1,2,3)
// console.log(fn.length)

// var x = 1
// function Test (x,y) {
//     this.x = x
//     this.y = y
// }
// Test.prototype.say = function () {
//     console.log(this.x)
// }
// let y = new Test ('name','age')

// class Test {
//     constructor(x,y) {
//         this.x = x
//         this.y = y
//     }
//     say() {
//         console.log(this.x)
//     }
// }
// let y = new Test('deejay',21)
// y.say()

// function fn (superArr,subArr) {
//     subArr.forEach((e)=> {
//         superArr.splice(superArr.indexOf(e),1)
//     })
//     return superArr
// }
// let res = fn([1,2,3,4,5],[1,2,4])
// console.log(res)

// function fn (superArr,subArr) {
//     return superArr.filter((e) => {
//         return !subArr.includes(e)
//     })
// }
// var res = fn([1,2,3,4,5], [1,2,4])
// console.log(res)

// function rest (...vals) { // vals本身就是一个数组   所以以后可以不用写 [].splice.call(arguments,1,1)这种函数了
//     console.log(vals) // array
// }
// rest(1,2,3,4,5)

// let fn = () => {
//     console.log(1111)
//     return undefined
// }
// fn()

// let x = 1
// function fn (x,y = x) { // 默认值的函数参数（）也是一个作用域
//     console.log(x,y)
// }
// fn(1,2) // 1 2
// fn(1) // 1

// let x = 1
// function fn (y = x) {
//     let x = 2
//     console.log(y)
// }
// fn() // 没传参 (y = x)也是一个作用域，其中没有定义x  那么去找外部作用域的x  既输出1

// let x = 1
// function fn (x, y = function () {x = 2}) {
//     x = 3  // 这里的x就是 参数 （）作用域中一开始声明的x
//     y()
//     console.log(x)
// }
// fn()
// console.log(x)

// function emptyFn () {
//     throw new Error('Empty params!')
// }
// function fn (targetParam = emptyFn()) { // 可以用来判断是否没有默认值
//     return targetParam
// }
// fn()

/*es6字符串的遍历*/
// let str = 'DeeJay'
// for (let targetStr of str) {
//     console.log(targetStr)// D e e J a y
// }

// 模板字符串
// let str = `In JavaScript, \\n is a line-feed`
// console.log(str)

//模板字符串中  加变量
// let num = 0
// setInterval(() => {
//     num ++
//     let str = `The number is ${num} now.` // 写到${}中
//     console.log(str)
// },1000)

// ... 扩展运算符
// function fn (...rest) {
//     console.log(rest) // [1,2,3]
//     console.log(...rest) // 1 2 3
// }
// fn(1,2,3)

// let arr = Array.of(3)
// console.log(arr)// [3]
// let arr2 = Array.of(3,1,1)
// console.log(arr2) // [3,1,1]


// let arr = [-1,-2,3,4]
// let res = arr.find((e) => { // 找到值
//     return e > 0
// })
// console.log(res)
// let res2 = arr.findIndex((e) => { // 找到index
//     return e > 0
// })
// console.log(res2)

