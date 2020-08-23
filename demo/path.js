const path = require('path')

console.log('To get name file:', path.basename(__filename))

console.log("To get the name  of the directory:", path.dirname(__filename))

console.log("To get the file extension :", path.extname(__filename))

console.log("Parse :", path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))
