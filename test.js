function calculateNumbers() {
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var operation = document.getElementById('operation').value
    var answer = 0

    if(operation === "plus"){
        answer = Number(firstNumber) + Number(secondNumber)
    }
    if (operation === "minus"){
        answer = Number(firstNumber) - Number(secondNumber)
    }
    if (operation === "divide"){
        answer = Number(firstNumber) / Number(secondNumber)
    }
    if (operation === "multiply"){
        answer = Number(firstNumber) * Number(secondNumber)
    }

    

    document.getElementById('answerBox').innerHTML = answer
}