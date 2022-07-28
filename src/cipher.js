const cipher = {

  encode: function (string, offset) {
    let textocifrado = ""

    for (let index = 0; index <= string.length - 1; index++) {
      const cifrar = ((string.charCodeAt(index) - 65 + offset) % 26 + 65)
      const letracifrada = String.fromCharCode(cifrar)
      textocifrado = textocifrado + letracifrada
    }
    return textocifrado
  },

  decode: function (string, offset) {
    let textodecifrado=""

    for (let index = 0; index <= string.length - 1; index++) {
      const decifrar = ((string.charCodeAt(index)- 90 - offset) % 26 + 90)
      const letradecifrada = String.fromCharCode(decifrar)
      textodecifrado = textodecifrado+letradecifrada 
    }
    return textodecifrado
  }




};

export default cipher;
