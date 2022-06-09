const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const loginCheckerRouter = require('./routes/loginChecker');
app.use('/loginChecker', loginCheckerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
