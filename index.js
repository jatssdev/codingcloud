let express = require('express') // same as ---> import express from 'express'
let cors = require('cors')

let app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    // res.send('hello from backend')
    // res.send('<h1>hello from backend</h1>')
    let arr = [
        'magan', 'maahi', 'jatin', 'chhagan'
    ]
    res.send(arr)
})


app.get('/users', (req, res) => {
    let users = [
        'jatin', 'maahi', 'magan', 'simon', 'dinesh', 'ruchita'
    ]
    res.send(users)
})

app.post('/register', (req, res) => {
    console.log(req.body)

    res.send('user registered!')
})





app.listen(8000, () => {
    console.log('server is running on port 8000')
})