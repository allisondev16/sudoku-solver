const PORT = 8000
const express = require('express')
const axios = require('axios').default
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

app.post('/solve', (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://sudoku-board.p.rapidapi.com/solve-board',
        params: {
            sudo: req.body.numbers,
            stype: 'list'
        },
        headers: {
            'x-rapidapi-host': 'sudoku-board.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    };

    axios.request(options).then(response => {
        res.json(response.data);
    }).catch(error => {
        console.error('Error: ', error)
    })
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))