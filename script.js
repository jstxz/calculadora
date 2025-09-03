function calculadora(){


let numero1 = Number(prompt("Insira o primeiro número: "));
let numero2 = Number(prompt("Insira o segundo número: "));
let simbolo = Number(prompt("1- somar \n2- subtrair \n3- multiplicar \n4- dividir"));

if (simbolo < 1 || simbolo > 4 || isNaN(simbolo)) {
    alert("invalido! digite um número de 1 a 4");
}

if (isNaN(numero1)) {
    alert("isso nao é um numero")}

if (isNaN(numero2)) {
    alert("isso nao e numero")
}


if (simbolo == 1){
let resultado = numero1 + numero2;
alert("O resultado deu " + resultado + "!");
} else if (simbolo == 2){
let resultado = numero1 - numero2;
alert("O resultado deu " + resultado + "!");
}  else if (simbolo == 3){
let resultado = numero1 * numero2;
alert("O resultado deu " + resultado + "!");
} else if (simbolo == 4){
    if (numero2 ==0){
        alert("Impossivel dividir por 0")
    }
    else{
let resultado = numero1 / numero2;
alert("O resultado deu " + resultado + "!");
}
}

}
