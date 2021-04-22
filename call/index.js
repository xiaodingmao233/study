function person () {
  console.log(this.name)
}

var egg = {
  name: 'aaa'
}

// person.call(egg)
// person(egg)

// Function.prototype.newCall = function (obj) {
//   obj.p = this
//   var newArguments = []
//   for (var i = 0; i < arguments.length; i++) {
//     newArguments.push(arguments[i])
//   }
//   // console.log(newArguments)
//   obj.p(newArguments)
//   delete obj.p
// }

// person.newCall(egg, '1', '2', '3', '4')
