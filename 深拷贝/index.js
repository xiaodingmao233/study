const oldObj = {
  name: '哈默',
  age: 20,
  colors: ['a', 'b', 'c'],
  friend: {
    name: '小夏'
  }
}

// const newObj1 = oldObj
// newObj1.name = '小野'
// console.log('oldObj', oldObj)
// console.log('newObj1', newObj1)

function deepClone (obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result

  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const newObj2 = deepClone(oldObj)
newObj2.friend.name = '小野'
newObj2.colors[0] = 'w'
console.log('oldObj', oldObj)
console.log('newObj2', newObj2)
