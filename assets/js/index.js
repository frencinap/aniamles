import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipos.js";

//array vacío de animales
let animales = []

//evento click registro de animal
document.getElementById('btnRegistrar').addEventListener('click', ()=>{

    let nombre = document.getElementById('animal').value
    let edad = document.getElementById('edad').value
    let comentarios = document.getElementById('comentarios').value
    let previewElement = document.getElementById('preview')
    let imagenSrc = previewElement.style.backgroundImage
    let imgSrc = imagenSrc.slice(5, imagenSrc.length -2 )
    let sonido
    let nuevoAnimal
    
    if( nombre == 'Leon'){
        nuevoAnimal = new Leon(
            nombre,
            edad,
            imgSrc,
            comentarios,
            sonido = 'assets/sounds/Rugido.mp3'
        )
    }else if( nombre == 'Lobo'){
        nuevoAnimal = new Lobo(
            nombre,
            edad,
            imgSrc,
            comentarios,
            sonido = 'assets/sounds/Aullido.mp3'   
        )
    }else if( nombre == 'Oso'){
        nuevoAnimal = new Oso(
            nombre,
            edad,
            imgSrc,
            comentarios,
            sonido = 'assets/sounds/Gruñido.mp3'
        )
    }else if( nombre == 'Serpiente'){
        nuevoAnimal = new Serpiente(
            nombre,
            edad,
            imgSrc,
            comentarios,
            sonido = 'assets/sounds/Siseo.mp3'  
        )
    }else if( nombre == 'Aguila'){
        nuevoAnimal = new Aguila(
            nombre,
            edad,
            imgSrc,
            comentarios,
            sonido = 'assets/sounds/Chillido.mp3' 
        )
    }
   
    animales.push(nuevoAnimal)
    reloadTable()    
})

// funcion que manipula DOM y agrega nuevo html al modal
const reloadTable = () => {
    const animalesTemplate = document.getElementById('Animales')
    animalesTemplate.innerHTML = " "
    animales.forEach( p => {
        animalesTemplate.innerHTML += `
        <div class="contenedor mx-1 my-1">
            <button type="button"
                class="btn btn-dark btn-animal"
                data-toggle="modal"
                data-target="#exampleModal"
                data-comentarios="${p.getComentarios()}"
                data-edad="${p.getEdad()}"
                data-img="${p.getImg()}"
            >
                <img src="${p.getImg()}" 
                    class="img-thumbnail" 
                >
            </button>
            <button class="sobre"
                onclick="document.getElementById('animal-player').play()">
                <i class="fa fa-volume-up" aria-hidden="true"></i>
            </button>
            <audio src="${p.getSonido()}" id="animal-player">
            </audio>
        </div>
        `
    })
    // Información dinamica del modal usando Jquery
    $(function() {
        $('#exampleModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget)
            let img = button.data('img')
            let comentarios = button.data('comentarios')
            let edad = button.data('edad')
            let modal = $(this)
            modal.find('.desc-img').attr('src', img)
            modal.find('.desc-edad').html(edad + '<br><h6>Comentarios:</h6>')
            modal.find('.desc-comentarios').html(comentarios)
          })
    })
}





