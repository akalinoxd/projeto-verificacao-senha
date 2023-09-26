// declarando funções
function compararSenha(senha1, senha2){
    if(senha1 != senha2){
        return true
    }else if(senha1 === senha2){
        return false
    }
}

function contarCaracter(senha){
    const senhaSeparada = senha.split('')
    if(senhaSeparada.length < 6){
        return true
    }else{
        return false
    }
}

function naoContemCaracterEspecial(senha){
    const senhaSeparada = senha.split('')
    const charEspecial = ['_', '@', '#', '$', '%', '&', '*']
    let charsEspeciaisContidos = 0

    senhaSeparada.forEach(charSenha => {
        charEspecial.forEach(charEspecial => {
            if(charSenha != charEspecial){
            }else if(charSenha === charEspecial){
                charsEspeciaisContidos++
            }
        })
    })

    if(charsEspeciaisContidos < 1){
        return true
    }else{
        return false
    }
}

function naoContemLetrasMaiusculasOuMinusculas(senha){
    const senhaSeparada = senha.split('')
    const naoLetras = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '@', '#', '$', '%', '&', '*', '!']
    let maiuscula = 0
    let minuscula = 0

    senhaSeparada.forEach(elem => {
        if(naoLetras.includes(elem)){
            // nao faça nada
        }else if(elem === elem.toUpperCase()){
            maiuscula++
        }else if(elem === elem.toLowerCase()){
            minuscula++
        }
    })

    if(maiuscula == 0 || minuscula == 0){
        return true
    }else{
        return false
    }
}

function naoContemNumero(senha){
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let qtdNumeros = 0
    numeros.forEach(num => {
        if(senha.includes(num)){
            qtdNumeros++
        }
    })

    if(qtdNumeros < 1){
        return true
    }else{
        return false
    }
}

function contemCaracteresRepetidos(senha){
    const senhaSeparada = senha.split('')
    const naoLetras = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '@', '#', '$', '%', '&', '*', '!']
    let caracteresRepetidos = 0
    const letrasSenha = []

    for(let i = 0; i < senhaSeparada.length; i++){
        if(naoLetras.includes(senhaSeparada[i])){
            // nao faça nada
        }else{
            letrasSenha.push(senhaSeparada[i], i)
        }
    }

    for(let i = 0; i < letrasSenha.length; i+=2){
        let letra1 = letrasSenha[i]
        let letra2 = letrasSenha[i+2]
        if(letra1 != undefined && letra2 != undefined){
            if(letra1.toLowerCase() == letra2.toLowerCase() && letrasSenha[i+1]+1 == letrasSenha[i+3]){
                caracteresRepetidos++
            }
        }
    }

    if(caracteresRepetidos >= 2){
        return true
    }else{
        return false
    }
}

function contemSequenciaDeNumerosCrescente(senha){
    const senhaSeparada = senha.split('')
    const numeros = ['0','1','2','3','4','5','6','7','8','9']
    const numerosSenha = []
    let numerosEmSequencia = 0

    for(let i = 0; i < senhaSeparada.length; i++){
        for(let c = 0; c < numeros.length; c++){
            if(senhaSeparada[i] == numeros[c]){
                numerosSenha.push(parseInt(senhaSeparada[i]), i)
            }
        }
    }
    
    for(let i = 0; i < numerosSenha.length; i+=2){
        if(numerosSenha[i]+1 == numerosSenha[i+2] && numerosSenha[i+1]+1 == numerosSenha[i+3]){
            numerosEmSequencia++
        }  
    }

    if(numerosEmSequencia >= 2){
        return true
    }else{
        return false
    }
}

function contemSequenciaDeNumerosDecrescente(senha){
    const senhaSeparada = senha.split('')
    const numeros = ['0','1','2','3','4','5','6','7','8','9']
    const numerosSenha = []
    let numerosEmSequencia = 0

    for(let i = 0; i < senhaSeparada.length; i++){
        for(let c = 0; c < numeros.length; c++){
            if(senhaSeparada[i] == numeros[c]){
                numerosSenha.push(parseInt(senhaSeparada[i]), i)
            }
        }
    }
    
    for(let i = 0; i < numerosSenha.length; i+=2){
        if(numerosSenha[i]-1 == numerosSenha[i+2] && numerosSenha[i+1]+1 == numerosSenha[i+3]){
            numerosEmSequencia++
        }  
    }

    if(numerosEmSequencia >= 2){
        return true
    }else{
        return false
    }
}

function exibirResultado(elem, string){
    elem.innerText = string
}

// execução

const botao = document.getElementById('botao')
const resultado = document.getElementById('resultado')

const nomeCriador1 = document.getElementById('nomeCriador1').textContent
const nomeCriador2 = document.getElementById('nomeCriador2').textContent

botao.onclick = e => {
    let senha = document.getElementById('senha').value
    let confirmSenha = document.getElementById('confirmSenha').value

    if(senha === nomeCriador1 && confirmSenha === nomeCriador2 || senha === nomeCriador2 && confirmSenha === nomeCriador1){

        exibirResultado(resultado, 'Nome dos Criadores OK!')

    }else if(compararSenha(senha, confirmSenha)){

        exibirResultado(resultado, 'As duas senhas tem que ser iguais')

    }else if(contarCaracter(senha)){

        exibirResultado(resultado, 'A senha tem que ter no mínimo 6 dígitos')

    }else if(naoContemCaracterEspecial(senha)){

        exibirResultado(resultado, 'A senha deve possuir ao menos um caracter especial (_, @, #, $, %, &, *)')

    }else if(naoContemLetrasMaiusculasOuMinusculas(senha)){

        exibirResultado(resultado, 'A senha tem que conter no mínimo uma letra maiúscula e uma minúscula')

    }else if(naoContemNumero(senha)){

        exibirResultado(resultado, 'A senha tem que conter no mínimo um número')

    }else if(contemCaracteresRepetidos(senha)){

        exibirResultado(resultado, 'A senha não pode conter 3 caracteres repetidos')

    }else if(contemSequenciaDeNumerosCrescente(senha)){

        exibirResultado(resultado, 'A senha não pode conter sequência de números crescentes (ex: 123, 789)')

    }else if(contemSequenciaDeNumerosDecrescente(senha)){

        exibirResultado(resultado, 'A senha não pode conter sequência de números decrescentes (ex: 321, 987)')

    }else{
        exibirResultado(resultado, 'Esta é uma senha válida!')
    }
}