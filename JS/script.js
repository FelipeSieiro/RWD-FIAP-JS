const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const calculateButton = document.querySelector("#calculate")
const messageElement = document.querySelector("#message")


let weight
let heigth

//on change
weightInput.addEventListener('change', (event) => {
    weight = event.target.value
    console.log(weight)
})

heightInput.addEventListener('change', (event) => {
    heigth = event.target.value
    console.log(heigth)
})

calculateButton.addEventListener("click", () => {
    //peso/altura*altura
    const imc = weight / ( heigth * heigth)
    console.log(imc)

    if(imc<18.5){
        alert("Abaixo do peso ideal")
    } else if(imc < 24.9){
        alert("Peso ideal")
    } else if(imc < 29.9){
        alert("Sobrepeso")
    } else if(imc < 34.9){
        alert("Obsedidade I")
    } else if(imc < 39.9){
        alert("Obesidade II")
    } else{
        alert("Obesidade III")
    }
})