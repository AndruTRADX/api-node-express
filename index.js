const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = 3000

app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://127.0.0.1:5500']
const options = {
  origin: (origin, calback) => {
    if (whitelist.includes(origin)) {
      calback(null, true)
    } else {
      calback(new Error('no permitido'))
    }
  }
}
app.use(cors(options))

// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola, mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Se esta corriendo en el puerto ' + port)
})
