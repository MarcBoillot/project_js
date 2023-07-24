class carousel {
    constructor (element, ption = {}){
        this.element = element
        this.option = Object.assign({},{
            slidesToScroll:1,
            slideVisible:1
        }, options)
    }
}
document.addEventListener('DOMContentLoaded', function(){
new carousel (document.querySelector('#carousel1'),
{
    slidesToScroll: 3,
    slideVisible:3
}) 

})