//Animales
let animales = (()=>{

    //petición basada en la prueba de ejemplo
    const url = 'http://localhost:5500/animales.json'
    const getData = async() => {
        const res = await fetch(url)
        const data = res.json()
        return data
    }

    return { getData }
})()

export default animales;