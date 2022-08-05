const cipher = {

  encode: function (offset, mensagem) {

    if (typeof mensagem != "string" || typeof offset != "number" || mensagem === "" || offset === 0) {

      throw new TypeError("Mensagem ou deslocamento inválido")

    }

    let textocifrado = ""

    for (let index = 0; index <= mensagem.length - 1; index++) {

      let letra = mensagem.charCodeAt(index)

      if (letra >= 65 && letra <= 90) {
        const cifrar = ((mensagem.charCodeAt(index) - 65 + offset) % 26 + 65)
        const letracifrada = String.fromCharCode(cifrar)
        textocifrado += letracifrada;
      }
      if (letra >= 97 && letra <= 122) {
        const cifrar = ((mensagem.charCodeAt(index) - 97 + offset) % 26 + 97)
        const letracifrada = String.fromCharCode(cifrar)
        textocifrado += letracifrada;
      }
      if (letra >= 32 && letra <= 64) {
        const cifrar = ((mensagem.charCodeAt(index) - 32 + offset) % 33 + 32)
        const letracifrada = String.fromCharCode(cifrar)
        textocifrado += letracifrada
      }
    }

    return textocifrado

  },


  decode: function (offset, mensagem) {

    if (typeof mensagem != "string" || typeof offset != "number" || mensagem === "" || offset === 0) {

      throw new TypeError("Mensagem ou deslocamento inválido")

    }

    let textodecifrado = ""

    for (let index = 0; index <= mensagem.length - 1; index++) {
      let letra = mensagem.charCodeAt(index)

      if (letra >= 65 && letra <= 90) {
        const decifrar = ((mensagem.charCodeAt(index) - 90 - offset) % 26 + 90)
        const letradecifrada = String.fromCharCode(decifrar)
        textodecifrado += letradecifrada
      }
      if (letra >= 97 && letra <= 122) {
        const decifrar = ((mensagem.charCodeAt(index) - 122 - offset) % 26 + 122)
        const letradecifrada = String.fromCharCode(decifrar)
        textodecifrado += letradecifrada
      }
      if (letra >= 32 && letra <= 64) {
        const decifrar = ((mensagem.charCodeAt(index) - 64 - offset) % 33 + 64)
        const letradecifrada = String.fromCharCode(decifrar)
        textodecifrado += letradecifrada
      }
    }
    return textodecifrado
  }
};

export default cipher;
