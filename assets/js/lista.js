//evento change datos del animal
import Animales from './animales.js'

document.getElementById('animal').addEventListener('change', async()=> {

    const { animales } = await Animales.getData()
    //console.log(animales)
    let animal = document.getElementById('animal').value
    let animalPicture = animales.find((p) => p.name == animal).imagen
    //console.log(animalPicture)
    let image = document.getElementById('preview')
    image.style.backgroundImage = `url(assets/imgs/${animalPicture})`
            
})