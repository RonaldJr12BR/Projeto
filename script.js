function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }  
    da pra facilitar o codigo de cima fazendo o codigo de baixo*/

    html.classList.toggle("light")

    
    
    /*Pegar a tag img
    const img = document.querySelector("#profile img")

    /* substituir a imagem
    if(html.classList.contains('light')){

        se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./nome da pasta/nome q a foto esta salva")
    } else {
      se tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./nome da pasta/nome q a foto esta salva")
    } */


}
