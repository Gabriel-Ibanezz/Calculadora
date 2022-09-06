const scanf = require("scanf");

class Calculator {
    contructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;

    }

    setN1(num) {
        this.n1 = num;
    }

    setN2(num) {
        this.n2 = num;


    }

}

/* Functions for the calculator */

add = (a, b) => (a + b); //function to add 

rest = (a, b) => (a - b); //function to subtract

mult = (a, b) => (a * b); //function to multiplication

div = (a, b) => (a / b); //function to divide

resto = (a, b) => (a % b); //function to resto

sqr = (a) => (Math.sqrt(a)); //function to square root


// Pedir Numeros

pedirPrimerNumero = () => {
    console.log("Ingresar el primer numero: ");
    calcu.setN1(scanf("%d"));
}
pedirSegNumero = () => {
    console.log("Ingrese el segundo numero: ");
    calcu.setN2(scanf("%d"));
}





let calcu = new Calculator(); //instancio el objeto


// MENU

console.log("Ingrese el numero de la operacion a realizar:\n ");

console.log("1)suma\n2)resta\n3)multiplicacion\n4)division\n5)resto\n6)funcion cuadratica\n0)EXIT ");

let cond = scanf("%d");



console.clear();



switch (cond) {

    case 1:
        {
            pedirPrimerNumero();
            pedirSegNumero();
            console.log("La suma da: ", add(calcu.n1, calcu.n2));
            break;
        }

    case 2:
        {
            pedirPrimerNumero();
            pedirSegNumero();
            console.log("La resta da: ", rest(calcu.n1, calcu.n2));
            break;
        }

    case 3:
        {
            pedirPrimerNumero();
            pedirSegNumero();
            console.log("La multiplicacion da: ", mult(calcu.n1, calcu.n2));
            break;
        }

    case 4:
        {
            pedirPrimerNumero();
            pedirSegNumero();;
            console.log("La division da: ", div(calcu.n1, calcu.n2));
            break;
        }

    case 5:
        {
            pedirPrimerNumero();
            pedirSegNumero();
            console.log("El resto da: ", resto(calcu.n1, calcu.n2));
            break;
        }

    case 6:
        {
            pedirPrimerNumero();
            console.log("La raiz cuadrada de ", calcu.n1, " es: ", sqr(calcu.n1));
            break;
        }

    case 0:
        {

            console.log("Saliendo...  :)\n\n");
            break;
        }

    default:
        {
            console.log("Ingrese algo correcto  :)\n\n");
            break;
        }


}

