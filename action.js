let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let inputValue = document.getElementById("userInput");
let resultMessage = document.getElementById("gameResult");
let firstNumberrandomnumber = Math.floor(Math.random() * 100);
let secondNumberrandomnumber = Math.floor(Math.random() * 100);
firstNumber.textContent = firstNumberrandomnumber;
secondNumber.textContent = secondNumberrandomnumber;

function restart() {
    firstNumberrandomnumber = Math.floor(Math.random() * 100);
    secondNumberrandomnumber = Math.floor(Math.random() * 100);
    firstNumber.textContent = firstNumberrandomnumber;
    secondNumber.textContent = secondNumberrandomnumber;
    inputValue.value = "";
    resultMessage.textContent = "";
}
restart();

function checkkerfunction() {
    let compare = parseInt(firstNumberrandomnumber) + parseInt(secondNumberrandomnumber);
    if (compare == inputValue.value) {
        let resultMessageValue = "Congratulation! You got it Right."
        resultMessage.textContent = resultMessageValue;
        resultMessage.style.color = "#028a0f"
    } else {
        let resultMessageValue = "Please Try Again!"
        resultMessage.textContent = resultMessageValue;
        resultMessage.style.color = "#1e217c"
    }
}