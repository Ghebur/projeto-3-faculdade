function revelarAoScroll() {
  const elementos = document.querySelectorAll('.reveal'); /*seleciona todos os elementos com a claasse reveal*/
  for (const el of elementos) {
    const windowHeight = window.innerHeight; /*altura da janela do navegador*/
    const elementTop = el.getBoundingClientRect().top; /*distancia do topo do elemento até o topo da janela*/
    const elementoVisivel = 100;

    if (elementTop < windowHeight - elementoVisivel) { /*Se o elemento está quase visível na tela, adiciona a classe .ativo*/
      el.classList.add('ativo');
    } 
    else {
      el.classList.remove('ativo');
    }
  }
}

window.addEventListener('scroll', revelarAoScroll); /*toda vez que rola a pagina a funçao é chamada*/
