const coin = {
  state: 0,

  flip: function () {
          function randomNumber(){
        return  Math.floor(Math.random()*2)
      }
      this.state = randomNumber()
      
  },

  toString: function () {
      if(this.state === 0){
          return "Heads"
      }
      else {
          return "Tails"
      }
  },

  toHTML: function () {
    const image = document.createElement("img");
    // Colocar uma imagem correspondente a essa valor.
    // image.src = "./CAMINHO/IMAGEM.JPEG"
    // image.alt = "Heads/Tails"
    return image;
  },
  
};




