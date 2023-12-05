class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.sgte = null;
    }
}

class Cola {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    encolar(dato) {
        const nuevonodo = new Nodo(dato);
        if (this.ultimo == null) {
            this.primero = nuevonodo;
        } else {
            this.ultimo.sgte = nuevonodo;
        }
        this.ultimo = nuevonodo;
    }

    desencolar() {
        if (this.primero === null) {
            return "La Cola está vacía";
        }
        const valorEliminado = this.primero.dato;
        this.primero = this.primero.sgte;
        if (this.primero === null) {
            this.ultimo = null;
        }
        return console.log("El turno " + valorEliminado.turno + " fue atendido");
    }

    obternerprimervalor() {
        if (this.primero === null) {
            return console.log("La Cola está vacía");
        } else {
            return console.log(this.primero.dato);
        }
    }

    size() {
        let index = 0;
        let recorre = this.primero;

        while (recorre !== null) {
            index++;
            recorre = recorre.sgte;
        }
        return console.log("El número de elementos en la cola es " + index);
    }

    calcularPromedioRetiros() {
        let totalRetiros = 0;
        let totalPersonas = 0;

        let recorre = this.primero;

        while (recorre !== null) {
            let tam = recorre.dato.vec.length;

            for (let i = 0; i < tam; i++) {
                if (recorre.dato.vec[i] === "retiro") {
                    totalRetiros++;
                }
            }

            totalPersonas++;

            recorre = recorre.sgte;
        }

        return totalRetiros / totalPersonas;
    }

    mujeresConsignaciones() {
        let mujeresConsignaciones = 0;

        let recorre = this.primero;

        while (recorre !== null) {
            let tam = recorre.dato.vec.length;

            for (let i = 0; i < tam; i++) {
                if (recorre.dato.genero === "Femenino" && recorre.dato.vec[i] === "consignacion") {
                    mujeresConsignaciones++;
                }
            }

            recorre = recorre.sgte;
        }

        return mujeresConsignaciones;
    }

    hombresMayoresTransferencias() {
        let hombresMayoresTransferencias = 0;

        let recorre = this.primero;

        while (recorre !== null) {
            let tam = recorre.dato.vec.length;

            for (let i = 0; i < tam; i++) {
                if (recorre.dato.genero === "Masculino" && recorre.dato.edad > 50 && recorre.dato.vec[i] === "transferencia") {
                    hombresMayoresTransferencias++;
                }
            }

            recorre = recorre.sgte;
        }

        return hombresMayoresTransferencias;
    }

    mostrardatos() {
        console.log("El número de retiros fue " + this.calcularPromedioRetiros());
        console.log("El número de mujeres que hicieron consignaciones fue " + this.mujeresConsignaciones());
        console.log("El número de hombres mayores de 50 años que hicieron transferencias fue " + this.hombresMayoresTransferencias());
    }
}

const colabanco = new Cola();

obj1 = {
    id: 1,
    nombre: "Juan",
    edad: 51,
    genero: "Masculino",
    turno: "T1",
    vec: ["retiro", "consignacion", "retiro", "retiro","transferencia"]
}

obj2 = {
    id: 2,
    nombre: "Raul",
    edad: 56,
    genero: "Masculino",
    turno: "T2",
    vec: ["retiro", "consignacion", "retiro", "retiro","transferencia"]
}


obj3 = {
    id: 3,
    nombre: "Maria",
    edad: 55,
    genero: "Femenino",
    turno: "T3",
    vec: ["retiro", "consignacion", "transferencia"]
}


colabanco.encolar(obj1);
colabanco.encolar(obj2);
colabanco.encolar(obj3);


console.log(colabanco);
colabanco.obternerprimervalor();
colabanco.size();
colabanco.mostrardatos();