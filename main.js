const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir')
const copiado = document.getElementById('copiado')

cerrar.addEventListener('click', ()=>{
    nav.classList.toggle('mobile:right-[100%]')
    
})
abrir.addEventListener('click', ()=>{
    nav.classList.remove('mobile:right-[100%]')
})

function link(){
    nav.classList.toggle('mobile:right-[100%]')
}
function copiar(){
    navigator.clipboard.writeText('matiasalvarezinfo1@gmail.com')
    copiado.classList.remove('hidden')
    copiado.animate([{
        opacity:1,
        transform:"translateY(0)"
    },
    {
        opacity:0.25,
        transform:"translateY(-8px)"
    }],{
        duration:1000,
    })
    setTimeout(()=>{
        copiado.classList.toggle('hidden')
    },1000)
}