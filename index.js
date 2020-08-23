const htpp = require('http')
const fs = require('fs')
const path = require('path')


const server = htpp.createServer((req, res) => {


    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })

    //         res.end(data)
    //     })
    // } else if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) throw err

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })

    //         res.end(data)
    //     })
    // }



    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    console.log('filePath', filePath)

    const ext = path.extname(filePath)
    console.log('ext', ext)

    let contentType = ''
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
        //break;
    }

    if (!ext) filePath += '.html'
    console.log('filePath', filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }

            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }

    })

})


const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been run on ${PORT}...`)
})







// const chalk = require('chalk')
// const text = require('./data')


//console.log(chalk.blue('hello'))
// console.log(chalk.blue(text))
// console.log(__dirname)
