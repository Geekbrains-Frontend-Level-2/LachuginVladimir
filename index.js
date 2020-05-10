const http = require('http') 
const fs = require('fs')
const path = require('path')
const url = require('url') 


const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
}

const server = http.createServer()


server.on('request', (req, res) => {
  const parsedUrl = new URL(req.url, 'https://node-http.glitch.me/')
  

  let pathName = parsedUrl.pathname
  let ext = path.extname(pathName)
  
  if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
    res.writeHead(302, {'Location': pathName.slice(0, -1)})
    res.end()
    return
  }
  
  if (pathName === '/') { 
    ext = '.html' 
    pathName = '/index.html'
  } else if (!ext) { 
    ext = '.html' 
    pathName += ext
  }
  
  const filePath = path.join(process.cwd(), '/public', pathName) 
  
  fs.exists(filePath, function (exists, err) {
    
    if (!exists || !mimeTypes[ext]) {
      console.log('Файл не найден: ' + pathName)
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('404 Not Found')
      res.end()
      return
    }
    
    res.writeHead(200, {'Content-Type': mimeTypes[ext]})
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  })
})

const port = process.env.PORT || 3000

server.listen(port)
console.log('Server started on port:', port)