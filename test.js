function addNumbers() {
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var answer = Number(firstNumber) + Number(secondNumber)

    document.getElementById('answerBox').innerHTML = answer
}


