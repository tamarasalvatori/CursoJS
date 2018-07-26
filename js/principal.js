var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

//inicializando variaveis para validar altura e peso

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000)
{
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00)
{
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (alturaEhValida && pesoEhValido)
{
    var imc = peso/(altura*altura);
    tdImc.textContent = imc; //mostra o IMC calculado - Paulo
}

console.log(paciente); //deve conter tr
console.log(tdPeso); //deve contar o td, que tem o peso
console.log(peso); //deve obter o peso = 100
console.log(altura); //deve obter a altura = 2.0
console.log(imc);