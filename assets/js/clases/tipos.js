import Animal from "./animal.js";

class Leon extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Rugir(){
        let sonido = this.getSonido()
        return sonido
    }
}
class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Aullar(){
        let sonido = this.getSonido()
        return sonido
    }
}
class Oso extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Gruñir(){
        let sonido = this.getSonido()
        return sonido
    }
}
class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Sisear(){
        let sonido = this.getSonido()
        return sonido
    }
}
class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Chillar(){
        let sonido = this.getSonido()
        return sonido
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }