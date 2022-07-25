import cipher from './cipher.js';

//let textUser = (document.getElementById("textuser").value)
//let offset = (document.getElementById("offset").value)
let bntcifrar = document.getElementById("bntcifrar")
let bntdecifrar = document.getElementById("bntdecifrar")



bntcifrar.addEventListener("click", function(e){
    let mensagem = (document.getElementById("textuser").value)
    let offset = (document.getElementById("offset").value)
    alert(cipher.encode(mensagem, offset))
})


bntdecifrar.addEventListener("click", function(e){
    let textUser= (document.getElementById("textuser").value)
    let offset= (document.getElementById("offset").value)
    alert(cipher.decode(mensagem, letras, offset))
})


console.log(cipher);