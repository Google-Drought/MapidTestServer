#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 8888


app.use(express.static('/Users/bdaudert/EE/CLIMATE_ENGINE/MapidTestServer/www'));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

