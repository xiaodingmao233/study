// var foo = {
//   value: 1
// }

// function bar () {
//   console.log(this.value)
// }

// var bindFoo = bar.bind(foo)
// bindFoo()

Function.prototype.bind2 = function (context) {
  var self = this
  return function () {
    return self.apply(context)
  }
}
