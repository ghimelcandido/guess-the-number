const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10);
let attemptsNumber = 1;


function functionClick(event){
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide") 
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${attemptsNumber} Tentativas`
    }
    inputNumber.value = ""
    attemptsNumber++
}

    const buttonTry = document.querySelector("#buttonTry")
    const buttonTryAgain = document.querySelector("#buttonTryAgain")

    buttonTry.addEventListener('click', functionClick)
    buttonTryAgain.addEventListener('click', function(){
        screen1.classList.remove("hide")
        screen2.classList.add("hide")
        attemptsNumber = 1
        location.reload()
    })