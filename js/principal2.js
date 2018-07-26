var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

//pacientes.length e utilizada quando
//queremos percorrer toda a lista
for (var i = 0; i < pacientes.length; i++) 
{
    var paciente = pacientes[i]

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
        //para acessar um conteudo de classe css
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";
    }

    if (altura <= 0 || altura >= 3.00) 
    {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        //para acessar um conteudo de classe css
        paciente.classList.add("paciente-invalido");
        //paciente.style.backgroundColor = "lightcoral";

    }

    if (alturaEhValida && pesoEhValido) 
    {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); //mostra o IMC calculado - Paulo
    }
}