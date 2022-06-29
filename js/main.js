let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervola = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervola);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}



const cuatro = document.querySelector(".carrusel-items")
let maxScrollLeft = cuatro.scrollWidth - cuatro.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function (){
        cuatro.scrollLeft = cuatro.scrollLeft + step;
        if(cuatro.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if(cuatro.scrollLeft === 0){
            step = step * -1;
        }
    }, 10);
}

const stop = () => {
    clearInterval(intervalo);
};

cuatro.addEventListener('mouseover', () => {
    stop();
})

cuatro.addEventListener('mouseout', () => {
    start();
})

start();

const btn3 = document.querySelector('.btn3');
const nav = document.querySelector('.nav');

btn3.addEventListener('click', () => {
    nav.classList.toggle('activado');
});