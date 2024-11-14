let express = require('express') // same as ---> import express from 'express'
let cors = require('cors')

let app = express()
app.use(cors())
app.use(express.json())
require('./conn')
let User = require('./userModel')
app.get('/', (req, res) => {
    // res.send('hello from backend')
    // res.send('<h1>hello from backend</h1>')
    let arr = [
        'magan', 'maahi', 'jatin', 'chhagan'
    ]
    res.send(arr)
})


app.get('/users', async (req, res) => {
    let users = await User.find()
    res.send(users)
})

app.post('/register', async (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })


    let createdUSer = await newUser.save()

    if (createdUSer) {
        res.send('user registered')
    } else {

        res.send('Error : user not registered')
    }
})

// let user = {
//     name: 'jatin',
//     email: 'jatin@gmail.com'
// }

// let keys = 'new'

// user = { ...user, [keys]: 'magan' }

// console.log(user)

app.listen(8000, () => {
    console.log('server is running on port 8000')
})