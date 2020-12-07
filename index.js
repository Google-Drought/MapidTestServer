#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 8888


app.use(express.static('<your root directory>/test_mapids/www'));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

