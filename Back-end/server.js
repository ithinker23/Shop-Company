const express = require('express')
const app = express()
const port = 5000

const loginCheckerRoutes = require('./routes/loginChecker');
loginCheckerRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
