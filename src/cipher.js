const cipher = {
  
  encode: function(shiftMenssage, offset){
  
    let index
    let cifrar
    let letras = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
    console.log(letras.length)
    for(index = 0>=65; index <=90; index ++){
      cifrar= shiftMenssage.charCodeAt(index)
      console.log(cifrar= shiftMenssage.charCodeAt(index))
    }
    
    return String.fromCharCode ((cifrar))
    
  }, 

  //decode: fucntion (mensagem, offset){
    
    
  //}

};

export default cipher;
