require('dotenv').config() //Enviroment variable of Port

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('funfusion72')
})

app.get('/login', (req, res) => {
    res.send('<h1>login at code with coffee chai</h>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>code with coffee chai</h>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})