const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const solvable = document.querySelector('#solvable')
const squares = 81
const submission = []

for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '1')
    inputElement.setAttribute('max', '9')
    puzzleBoard.appendChild(inputElement)
}

const createArray = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
}

const populateSolution = (isSolvable, solution) => {
    if (isSolvable && solution) {
        const inputs = document.querySelectorAll('input')

        // make solutionArray into one array
        const finalSolutionArray = []
        for (let index = 0; index < solution.length; index++) {
            const currentArray = solution[index]
            finalSolutionArray.push(...currentArray)
        }

        // populate the solution in to the board
        inputs.forEach((input, i) => {
            input.value = finalSolutionArray[i]
        })

        solvable.innerHTML = "Solved!"
        solveButton.removeAttribute('disabled')
        solveButton.innerHTML = 'Solve'
    } else {
        solvable.innerHTML = "Not solvable!"
        solveButton.removeAttribute('disabled')
        solveButton.innerHTML = 'Solve'
    }
}

const solve = () => {
    solveButton.setAttribute('disabled', 'true')
    solveButton.innerHTML = 'Loading...'

    createArray()
    const arrayToString = submission.join('')

    const options = {
        method: 'GET',
        url: 'https://sudoku-board.p.rapidapi.com/solve-board',
        params: {
            sudo: arrayToString,
            stype: 'list'
        },
        headers: {
            'x-rapidapi-host': 'sudoku-board.p.rapidapi.com',
            'x-rapidapi-key': '639b5a8537msh53a9d6eb2b85039p180844jsn3986e4cf168e'
        }
    };

    const result = axios.request(options).then(response => {
        populateSolution(response.data.response.solvable, response.data.response.solution)
    }).catch(error => {
        console.error(error)
        // API is sometimes encountering error if not solvable, this is a workaround solution:
        solvable.innerHTML = "Not solvable!"
        solveButton.removeAttribute('disabled')
        solveButton.innerHTML = 'Solve'
    })
}


solveButton.addEventListener('click', solve)