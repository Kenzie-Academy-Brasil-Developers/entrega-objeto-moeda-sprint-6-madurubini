const coin = {
  state: 0,

  flip: function () {
          function randomNumber(){
        return  Math.floor(Math.random()*2)
      }
     return this.state = randomNumber()
      
  },

  toString: function () {
      this.flip()
      if(this.state === 0){
          return "Heads"
         
      }
      if(this.state === 1 ) {
          return "Tails"
      }
  },

  toHTML: function () {
    const image = document.createElement("img");
    const moeda = document.getElementById('moeda')
    


    if(coin.toString() === "Heads"){
        image.src = "./assets/cara.png"
        image.alt = "Heads"
        image.width = 180

    }
    if(coin.toString() === "Tails"){
        image.src = "./assets/coroa.png"
        image.alt = "Tails"
        image.width = 200


    }
    return moeda.appendChild(image)
    ;
  },
  
};




