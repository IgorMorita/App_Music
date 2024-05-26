const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/pages/index.html")
})

app.listen(8080, () => {
    console.log('Hi');
})