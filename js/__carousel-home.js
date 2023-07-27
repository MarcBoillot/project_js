//----------------------------------------------------------------
//le caroussel
//----------------------------------------------------------------
/*class caroussel {
    //@param {HTMLElement} element
    //@param {Object} options
    //@param {Object} options.slidesToScroll nb d'elements a fire defiler
    //@param {Object} options.slidesVisible nb d'elements visible dans le slide
  
  
    constructor (element, options = {}){
      this.element = element
      this.options = Object.assign({},{
        slidesToScroll: 1,
        slidesVisible: 1
      }, options)
      this.children = [].slice.call(element.children)
      let root = this.createDivWithClass('caroussel');
      let container = this.createDivWithClass('caroussel__container');
      root.appendChild(container);
      this.element.appendChild(root);
      this.children.forEach(function (child) {
        this.createDivWithClass('caroussel__item')
        container.appendchild(child)
      });
    }
  }
  document.addEventListener('DOMContentLoaded', function (){
    new caroussel(document.querySelector('#caroussel'), {
      slidesToScroll: 3,
      slidesVisible:3
    })
  })
  function createDivWithClass(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
  }*/

  function buttonClick() {
    document.getElementById("myCaroussel").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.nextbtn')) {
      var caroussel = document.getElementsByClassName("caroussel-content");
      var i;
      for (i = 0; i < caroussel.length; i++) {
        var openDropdown = caroussel[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }