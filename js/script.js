//Remover o texto do placeholder quando o usuário clicar no input

const inputLocal = document.querySelector('#inputLocal')
const inputRetirada = document.querySelector('#inputLocalRetirada')
const inputData = document.querySelector('#inputData')
const inputDataRetirada = document.querySelector('#inputDataRetirada')


//Input local
inputLocal.addEventListener('focus', function(){
    inputLocal.placeholder = ""
})

inputLocal.addEventListener('blur', function(){
    if (inputLocal.value === ""){
        inputLocal.placeholder = "Local"
    }
})

//Input Local de retirada
inputRetirada.addEventListener('focus', function(){
    inputRetirada.placeholder = ""
})

inputRetirada.addEventListener('blur', function(){
    if (inputRetirada.value === ""){
        inputRetirada.placeholder = "Retirada"
    }
})

//Input data
inputData.addEventListener('focus', function(){
    inputData.placeholder = ""
})

inputData.addEventListener('blur', function(){
    if (inputData.value === ""){
        inputData.placeholder = "dd/mm/yyyy"
    }
})

//Input data de retirada
inputDataRetirada.addEventListener('focus', function(){
    inputDataRetirada.placeholder = ""
})

inputDataRetirada.addEventListener('blur', function(){
    if (inputDataRetirada.value === ""){
        inputDataRetirada.placeholder = "dd/mm/yyyy"
    }
})
