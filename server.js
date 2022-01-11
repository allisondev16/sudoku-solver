const PORT = 8000
const express = require('express')
const axios = require('axios').default
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

// app.post('/solve', (req, res) => {
//     const options = {
//         method: 'GET',
//         url: 'https://sudoku-board.p.rapidapi.com/solve-board',
//         params: {
//             sudo: '...3232..326..2326.2326......',
//             stype: 'list'
//         },
//         headers: {
//             'x-rapidapi-host': 'sudoku-board.p.rapidapi.com',
//             'x-rapidapi-key': process.env.RAPID_API_KEY
//         }
//     };

//     const result = axios.request(options).then(response => {
//         populateSolution(response.data.response.solvable, response.data.response.solution)
//     }).catch(error => {
//         console.error(error)
//         // API is sometimes encountering error if not solvable, this is a workaround solution:
//         solvable.innerHTML = "Not solvable!"
//         solveButton.removeAttribute('disabled')
//         solveButton.innerHTML = 'Solve'
//     })
// })


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))