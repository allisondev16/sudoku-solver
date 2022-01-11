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

    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && (i < 21 || i > 53)) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 29 && i < 51)) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && (i < 27 || i > 59))
    ) {
        inputElement.classList.add('odd-section')
    }
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


}


solveButton.addEventListener('click', solve)