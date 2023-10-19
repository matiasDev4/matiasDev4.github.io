const contenido1 = document.getElementById('copiar')
const btn = document.getElementById('boton')

function copiarTexto(){
 
    btn.addEventListener('click', e =>
    {
     
     navigator.clipboard.writeText(contenido1.textContent)
     alert("correo: matiasalvarezinfo1@gmail.com copiado!")
    }
    )
}