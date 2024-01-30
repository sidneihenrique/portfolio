function navSmartphone(){
    document.querySelector('nav#smartphone').classList.toggle('open');
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Velocidade da rolagem em milissegundos
    speedAsDuration: true // Usa a velocidade como duração da rolagem
});

document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      console.log(scroll)  

      navSmartphone();

      // Obtém o destino do link interno
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      console.log(targetElement)

      // Rola suavemente para o elemento de destino usando a biblioteca smooth-scroll
      scroll.animateScroll(targetElement);
    });
  });
