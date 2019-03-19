const path = require('path')

const resources = [
  './global/variables.scss'
]

module.exports = resources.map(file => path.resolve(__dirname, file))