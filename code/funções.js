// function compararSenha(senha1, senha2){
//     if(senha1 != senha2){
//         return true
//     }else if(senha1 === senha2){
//         return false
//     }
// }

// function contarCaracter(senha){
//     const senhaSeparada = senha.split('')
//     if(senhaSeparada.length >= 6){
//         return true
//     }else{
//         return false
//     }
// }

// function caracterEspecial(senha){
//     const charEspecial = ['_', '@', '#', '$', '%', '&', '*']
//     charEspecial.forEach(char => {
//         if(senha.includes(char)){
//             return true
//         }else{
//             return false
//         }
//     })
// }

// function letrasMaiusculasEMinusculas(senha){
//     const senhaSeparada = senha.split('')
//     let maiuscula = 0
//     let minuscula = 0

//     senhaSeparada.forEach(char => {
//         if(char == char.toUpperCase()){
//             maiuscula++
//         }else if(char == char.toLowerCase()){
//             minuscula++
//         }
//     })

//     if(maiuscula >= 1 && minuscula >= 1){
//         return true
//     }else{
//         return false
//     }
// }

// function contemNumero(senha){
//     const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//     let qtdNumeros = 0
//     numeros.forEach(num => {
//         if(senha.includes(num)){
//             qtdNumeros++
//         }
//     })
//     if(qtdNumeros >= 1){
//         return true
//     }else{
//         return false
//     }
// }

// function caracterRepetido(senha){
//     const senhaSeparada = senha.split('')
//     let repeticoesGerais = 0
//     senhaSeparada.forEach(char1 => {
//         let letraRepetida = 0
//         senhaSeparada.forEach(char2 => {
//             if(char1 === char2){
//                 letraRepetida++
//             }
//         })
//         if(letrasRepetidas >= 3){
//             repeticoesGerais++
//         }
//     })
//     if(repeticoesGerais > 1){
//         return true
//     }else{
//         return false
//     }
// }

// function numerosEmOrdem(senha){
//     const senhaSeparada = senha.split('')
//     const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//     const numerosSenha = []
//     const numerosIndex = []

//     senhaSeparada.forEach((char, index) => {
//         numeros.forEach(num => {
//             if(char === num){
//                 numerosSenha.push(parseInt(char))
//                 numerosIndex.push(index)
//             }
//         })
//     })

//     numerosSenha.forEach(num => {
        
//     })
// }

// function sequenciaNumerosCrescente(senha){
//     const senhaSeparada = senha.split('')
//     const numeros = ['0','1','2','3','4','5','6','7','8','9']
//     const numerosSenha = []
//     let numerosEmSequencia = 0

//     for(let i = 0; i < senhaSeparada.length; i++){
//         for(let c = 0; c < numeros.length; c++){
//             if(senhaSeparada[i] == numeros[c]){
//                 numerosSenha.push(parseInt(senhaSeparada[i]), i)
//             }
//         }
//     }
    
//     for(let i = 0; i < numerosSenha.length; i+=2){
//         if(numerosSenha[i]+1 == numerosSenha[i+2] && numerosSenha[i+1]+1 == numerosSenha[i+3]){
//             numerosEmSequencia++
//         }  
//     }

//     if(numerosEmSequencia >= 2){
//         return true
//     }else{
//         return false
//     }
// }

// function sequenciaNumerosDecrescente(senha){
//     const senhaSeparada = senha.split('')
//     const numeros = ['0','1','2','3','4','5','6','7','8','9']
//     const numerosSenha = []
//     let numerosEmSequencia = 0

//     for(let i = 0; i < senhaSeparada.length; i++){
//         for(let c = 0; c < numeros.length; c++){
//             if(senhaSeparada[i] == numeros[c]){
//                 numerosSenha.push(parseInt(senhaSeparada[i]), i)
//             }
//         }
//     }
    
//     for(let i = 0; i < numerosSenha.length; i+=2){
//         if(numerosSenha[i]-1 == numerosSenha[i+2] && numerosSenha[i+1]+1 == numerosSenha[i+3]){
//             numerosEmSequencia++
//         }  
//     }

//     if(numerosEmSequencia >= 2){
//         return true
//     }else{
//         return false
//     }
// }

// function exibirResultado(elem, string){
//     elem.innerText = string
// }

// module.exports = {
//     compararSenha,
//     contarCaracter,
//     caracterEspecial,
//     letrasMaiusculasEMinusculas,
//     contemNumero,
//     caracterRepetido,
//     numerosEmOrdem,
//     sequenciaNumerosCrescente,
//     sequenciaNumerosDecrescente,
//     exibirResultado
// }