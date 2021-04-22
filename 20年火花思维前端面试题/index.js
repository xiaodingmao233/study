// 1
// var a = 'a'
// function A () {
//   console.log(a)
//   var a = 'b'
//   console.log(a)
// }
// console.log(a)
// A()
// console.log(a)




// var a = 'a'
// function A () {
//   console.log(a)
//   let a = 'b'
//   console.log(a)
// }
// A()



// 2
// var obj = {
//   name: 'obj',
//   hello () {
//     console.log(this.name)
//   }
// }
// obj.hello()
// var h = obj.hello
// h()



// var obj = {
//   name: 'obj',
//   // hi () {
//   //   return function () {
//   //     console.log(this)
//   //     console.log(this.name)
//   //   }
//   // }
//   hi () {
//     return () => {
//       console.log(this)
//       console.log(this.name)
//     }
//   }
// }
// var h2 = obj.hi()
// // console.log(h2)
// h2()



// 3
// var arr = [true, function () {}, [{}, [2]]]


// 4
// var str = 'src=图片a'

// var imgSrc
// var strArr = str.split(' ')
// console.log(strArr)

// for (var i = 0, len = strArr.length; i < len; i++) {
//   // console.log(strArr[i])
//   if (strArr[i].match("src=")) {
//     imgSrc = strArr[i]
//   }
// }
// console.log(imgSrc)

// strArr.map(item => {
//   if (item.match("src=")) {
//     imgSrc = item
//   }
// })
// console.log(imgSrc)

// 5
// console.log('a')
// let promise = new Promise(function(resolve, reject) {
//   console.log('b')
//   setTimeout(function () {
//     resolve('c')
//   }, 1000)
// })
// setTimeout(function () {
//   console.log('d')
// }, 0)
// promise.then(function (e) {
//   console.log(e)
// })
// console.log('f')
// // a b f d c

// 6
// var obj = {}
// function test () {
//   Object.defineProperty(obj, 'name', {
//     get: function () {
//       console.log('aaa')
//     },
//     set: function (newValue) {
//       debugger;
//       console.log('bbb')
//     },
//     enumerable: true,
//     configurable: true
//   })
// }

// test()
// for (var i = 0; i < 2; i++) {
//   console.log(i)
//   obj.name = i
// }

// 7
// let arr = [
//   { id: 8, obj: '88' },
//   { id: 3, obj: '33' },
//   { id: 4, obj: '44' },
//   { id: 7, obj: '77' }
// ]

// arr.sort(function (a, b) {
//   console.log('a:', a, 'b:', b)
//   if (a.id < b.id) {
//     return -1
//   } else if (a.if == b.id) {
//     return 0
//   } else {
//     return 1
//   }
// })
// console.log(arr)
