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
    const painel = document.getElementById('painel')
    const image = document.createElement("img");

    
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
    return painel.appendChild(image)
    ;
  },
  
};


function display20Flips() {
    const results = [];
    for(let i = 0; i < 20; i++){
        let atual = coin.toString()
        results.push(atual)  
    }
    let bloco = document.createElement('div')
    let resultado = document.createElement("p")
    bloco.classList.add('bloco')
    bloco.appendChild(resultado)
    resultado.innerHTML = results
    resultado.classList.add('texto')
    painel.appendChild(bloco)
    return results
  }
  
  function display20Images() {
    const results = [];
    for(let i = 0; i < 20; i++){
        let atual = coin.toHTML()
        results.push(atual)  
    }
    return results
  }

