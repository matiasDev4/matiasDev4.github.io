const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir')

cerrar.addEventListener('click', ()=>{
    nav.classList.toggle('mobile:right-[100%]')
})
abrir.addEventListener('click', ()=>{
    nav.classList.remove('mobile:right-[100%]')
})

function link(){
    nav.classList.toggle('mobile:right-[100%]')
}