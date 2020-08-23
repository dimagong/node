//FILE SYSTEM
const fs = require('fs')
const path = require('path')
const { Buffer } = require('buffer')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw err
//     console.log('The folder created')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
//console.log('filePath', filePath)

// fs.writeFile(filePath, 'hello node', err => {
//     if (err) throw err
//     console.log('The file created')
// })

// fs.appendFile(filePath, '\n hello Again', err => {
//     if (err) throw err
//     console.log('The NEW file created')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) throw err

    console.log("Content:", content)
    //const data = Buffer.from(content)
    //console.log("Content:", data.toString())
})