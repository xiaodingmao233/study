function createWelcome () {

  var action="欢迎: "
  
  return function print (name) {
  
  console.log(action + name)
  
  }
  
}
var print = createWelcome()

var action="不欢迎: "

print("领导")