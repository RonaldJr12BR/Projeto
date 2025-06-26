//

function toggleMode() {
  const html = document.documentElement;

  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }  
    da pra facilitar o codigo de cima fazendo o codigo de baixo*/

  html.classList.toggle("light");

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

function criaBotoes() {
  // Array de botões
  var links = [
    { label: "Inscrever-se no NLW", href: "#" },
    { label: "Baixar meu e-book", href: "#" },
    { label: "Ver meu portfólio", href: "https://github.com/RonaldWB-jr" },
    {
      label: "Carros esportivos",
      href: "https://carros-esportivos-zeta.vercel.app/",
    },
    { label: "Conheça o explorer", href: "#" },
    { label: "Google", href: "https://google.com.br" },
    { label: "Youtube", href: "https://youtube.com" },
    { label: "Rockeseat", href: "https://app.rocketseat.com.br/" },
  ];

  // Pego a UL cujo ID é "botoes"
  const ul_botoes = document.getElementById("botoes");

  // Faço um laço em todos os botões do array
  for (var i = 0; i < links.length; i++) {
    // Crio uma tag "LI" => [<li></li>]
    const new_li = document.createElement("li");

    // Crio uma tag "A" => [<a></a>]
    const new_a = document.createElement("a");

    // Adiciono o HREF na tag A que eu criei
    new_a.href = links[i].href;

    // Adiciona o texto do botãon na tag A que eu criei
    new_a.innerHTML = links[i].label;

    // Adiciona a tag "A" dentro do "LI" que criei
    new_li.append(new_a);

    // E ficou assim
    // <li>
    //   <a></a>
    // </li>

    // Adiciona o "LI" dentro da "UL" de botoes
    ul_botoes.append(new_li);
  }
}

window.onload = function () {
  criaBotoes();
};
