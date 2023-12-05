/*class Pila{

    constructor(){
        this.pila=[]
    }
    apilar(dato){
        this.pila.push(dato)
        return this.pila
    }
    desapilar(){
        return this.pila.pop()
    }
    peek(){
        return this.pila[this.pila.length-1]
    }  
    size(){
        return this.pila.length;
    }    
    imprimir_pila(){
        console.log(this.pila)
    }
}

const pilaest=new Pila();
pilaest.apilar(5)
pilaest.apilar(200)
console.log(pilaest.peek())
console.log(pilaest.size())
*/


class Pila{
    constructor() {
        this.pila={}
        this.index=0        
    }
    apilar(nombre,edad){
        this.pila[this.index]=nombre,edad
        this.index++
        return this.pila
    }
    desapilar(){
        this.index--
        const aux=this.pila[this.index]
        delete this.pila[this.index]
        return aux
    }
    peek(){
        return this.pila[this.index-1]
    }
    size(){
        return this.index
    }
    imprimir(){
        console.log(this.pila)
    }
    imprimir_nombres(){
        for(let i=0;i<this.index;i++){
            console.log(this.pila[i].nombre)
        }
    }

}
const pilaest=new Pila()
pilaest.apilar({nombre:"Carlos",edad:20})
pilaest.apilar({nombre:"Carlos1",edad:10})
pilaest.imprimir()
pilaest.imprimir_nombres()















