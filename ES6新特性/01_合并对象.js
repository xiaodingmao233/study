const part1 = { id: 10, name: 'Howard Moon' }
const part2 = { id: 11, password: 'Password!' }
const user1 = { ...part1, ...part2 }
console.log(user1)


// 删除对象属性
const noPassword = ({ password, ...rest }) => rest
const user = { id: 100, name: 'Howard Moon', password: 'Password!'}

console.log(noPassword(user))

// rest参数,返回的是一个对象
const obj = {a: 2, b: 3, c: 4, d: 5};
const {a, ...rest} = obj; // 2 { b: 3, c: 4, d: 5 }
const noA = ({a, ...rest}) => rest
console.log(noA(obj))
console.log(a, rest)

