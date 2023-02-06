const path = require('path')
const myModule = require('./exports')

console.log(myModule)
console.log(path.basename(__filename))