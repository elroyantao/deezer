const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(cors());
app.use('/api', proxy('https://api.deezer.com'));

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Running ${process.env.NODE_ENV || 'development'} build`)

})
