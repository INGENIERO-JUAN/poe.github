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
}


class Calculadora {
    constructor() {
        this.pila = new Pila();
    }

    agregarNumero(numero) {
        this.pila.apilar(numero);
    }

    agregarOperador(operador) {
        this.pila.apilar(operador);
    }

    calcular() {
        const resultadoPila = new Pila();

        while (this.pila.size() > 0) {
            const elemento = this.pila.desapilar();

            if (typeof elemento === 'number') {
                resultadoPila.apilar(elemento);
            } else if (elemento === '+' || elemento === '-' || elemento === '*' || elemento === '/') {
                const num2 = resultadoPila.desapilar();
                const num1 = resultadoPila.desapilar();

                switch (elemento) {
                    case '+':
                        resultadoPila.apilar(num1 + num2);
                        break;
                    case '-':
                        resultadoPila.apilar(num1 - num2);
                        break;
                    case '*':
                        resultadoPila.apilar(num1 * num2);
                        break;
                    case '/':
                        resultadoPila.apilar(num1 / num2);
                        break;
                }
            }
        }

        return resultadoPila.peek();
    }
}

const calculadora = new Calculadora();
calculadora.agregarNumero(5);
calculadora.agregarOperador('+');
calculadora.agregarNumero(3);
calculadora.agregarOperador('*');
calculadora.agregarNumero(2);
const resultado = calculadora.calcular();
console.log(resultado); // Debería devolver 16




