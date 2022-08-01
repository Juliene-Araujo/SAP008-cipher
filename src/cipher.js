const cipher = {

  encode: function (offset, mensagem) {

    if (typeof mensagem != "string" || typeof offset != "number" || mensagem === "" || offset === 0) {

      throw new TypeError("Mensagem ou deslocamento inválido")

    }

    let textocifrado = ""

    for (let index = 0; index <= mensagem.length - 1; index++) {
      const cifrar = ((mensagem.charCodeAt(index) - 65 + offset) % 26 + 65)
      const letracifrada = String.fromCharCode(cifrar)
      textocifrado = textocifrado + letracifrada
    }
    return textocifrado
  },


  decode: function (offset, mensagem) {

    if (typeof mensagem != "string" || typeof offset != "number" || mensagem === "" || offset === 0) {

      throw new TypeError("Mensagem ou deslocamento inválido")

    }

    let textodecifrado = ""

    for (let index = 0; index <= mensagem.length - 1; index++) {
      const decifrar = ((mensagem.charCodeAt(index) - 90 - offset) % 26 + 90)
      const letradecifrada = String.fromCharCode(decifrar)
      textodecifrado = textodecifrado + letradecifrada
    }
    return textodecifrado
  }




};

export default cipher;
