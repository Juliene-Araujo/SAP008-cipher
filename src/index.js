import cipher from './cipher.js';

let bntcifrar = document.getElementById("buttoncifrar")
let bntdecifrar = document.getElementById("buttondecifrar")
const texto = document.getElementById("textuser")
const deslocamento = document.getElementById("offset")





bntcifrar.addEventListener("click", function (e) {
    e.preventDefault()

    const mensagem = texto.value.toUpperCase()
    const offset= Number(deslocamento.value)

    try {
        const resul = cipher.encode(offset, mensagem)
        alert(resul)

    } catch (error) {
       alert (error.message)
    }
})





bntdecifrar.addEventListener("click", function (e) {
    e.preventDefault
    
    let mensagem = (texto.value.toUpperCase())
    let offset = Number(deslocamento.value)

    try {
        let resul2 = cipher.decode(offset, mensagem)
        alert(resul2)
        
    } catch (error) {
        alert(error.message)
        
    }

})
