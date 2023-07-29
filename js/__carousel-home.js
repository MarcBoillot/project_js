let slider = ['img/Capture d’écran 2023-07-28 111946.png','img/Capture d’écran 2023-07-28 190744.png','img/Capture d’écran 2023-07-28 111659.png']
let i = 0;
function slideClick (sens){
   i += sens;
   if(i<0){
    i = slider.length-1;
   } else if (i>=slider.length){
    i = 0;
   } 
   document.getElementById('img1').src = slider[i];
}
function autoSlide() {
    slideClick(1);
}
setInterval(autoSlide, 3000);