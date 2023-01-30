const getFlagValue = require('./flag')

console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)