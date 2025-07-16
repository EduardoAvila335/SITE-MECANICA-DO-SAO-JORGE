let elementos = document.querySelectorAll('.animacao');
const localizacao = document.querySelector('.localização');
const carros = document.querySelectorAll('.flex');
const troca = document.querySelectorAll('.troca');
let indice = 0;



const Observar = new IntersectionObserver((divs) => {
   divs.forEach((div) => {
        if(div.isIntersecting){
            div.target.classList.add('animado');   
        }else{
            div.target.classList.remove('animado');
        }
   }); 
});

elementos.forEach((elemento) => {Observar.observe(elemento)});

document.querySelector('.local').addEventListener('click', () =>{
    localizacao.style.left = '34%';
})

document.querySelector('.mascara').addEventListener('click', () =>{
    localizacao.style.left = '-30%'
})


function trocaDediv(){
    troca.forEach((div) =>{
if(div.classList.contains('active')){
    setTimeout(()=>{
        div.classList.remove('active');

        indice = indice > troca.length - 1 ? 0 : indice++
        troca[indice].classList.add('active')
    }, 500)
}
})
};




function trocaDeCarro(){
carros.forEach((carro) =>{
if(carro.classList.contains('visivel')){
    setTimeout(()=>{
        carro.classList.remove('visivel');
        indice++

        indice = indice > carros.length - 1 ? 0 : indice++
        carros[indice].classList.add('visivel')
    }, 500)
}
})
};

setInterval(trocaDeCarro, 5000);
setInterval(trocaDediv, 5000);


