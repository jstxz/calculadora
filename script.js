function calculadora() {
    let numero1 = Number(prompt("Insira o primeiro número: "));
    let numero2 = Number(prompt("Insira o segundo número: "));
    let simbolo = Number(prompt("1- somar \n2- subtrair \n3- multiplicar \n4- dividir"));

    if (simbolo < 1 || simbolo > 4 || isNaN(simbolo)) {
        alert("inválido! digite um número de 1 a 4");
        return;
    }

    if (isNaN(numero1)) {
        alert("isso não é um número");
        return;
    }

    if (isNaN(numero2)) {
        alert("isso não é número");
        return;
    }

    let resultado;

    if (simbolo == 1) {
        resultado = numero1 + numero2;
    } else if (simbolo == 2) {
        resultado = numero1 - numero2;
    } else if (simbolo == 3) {
        resultado = numero1 * numero2;
    } else if (simbolo == 4) {
        if (numero2 == 0) {
            alert("Impossível dividir por 0");
            return;
        } else {
            resultado = numero1 / numero2;
        }
    }

    alert("O resultado deu " + resultado + "!");
}
