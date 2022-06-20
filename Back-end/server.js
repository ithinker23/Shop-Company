const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

const valRouter = require('./routes/valRouter');
app.use('/validify', valRouter);

const itemsRouter = require('./routes/itemsRouter')
app.use('/inventory', itemsRouter);

const cookieRouter = require('./routes/cookieRouter')
app.use('/cookieAuth', cookieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})