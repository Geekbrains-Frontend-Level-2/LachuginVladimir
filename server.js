
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const publicPath = './public'

  console.log(req.url)

  let body = null

  if (body = req.url === `/style/style.css`) {
    body = fs.readFileSync(`${publicPath}/style/style.css`, 'utf8')
  } else if (body = req.url === `/js/main.js`) {
    body = fs.readFileSync(`${publicPath}/js/main.js`, 'utf8')
  } else {
    body = fs.readFileSync(`${publicPath}/index.html`, 'utf8')
  }



  // const body = req.url === `/style/style.css`
  //   ? fs.readFileSync(`${publicPath}/style/style.css`, 'utf8')
  //   : fs.readFileSync(`${publicPath}/index.html`, 'utf8')
  res.end(body)
})

const port = process.env.PORT || 3000

server.listen(port)
console.log('Server started on port: ', port)