import cipher from './cipher.js';

let bntcifrar = document.getElementById("buttoncifrar")
let bntdecifrar = document.getElementById("buttondecifrar")



bntcifrar.addEventListener("click", function (e) {
    let string = (document.getElementById("textuser").value)
    let offset = Number(document.getElementById("offset").value)
    let resul = cipher.encode(string, offset)
    alert(resul)



})



bntdecifrar.addEventListener("click", function (e) {
    let string = (document.getElementById("textuser").value)
    let offset = Number(document.getElementById("offset").value)
    let resul2 = cipher.decode(string, offset)
    alert(resul2)

})


console.log(cipher);