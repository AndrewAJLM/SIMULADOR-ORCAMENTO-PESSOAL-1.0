const salarioAtual = document.getElementById("salarioid");
const aluguel = document.getElementById("aluguelid");
const alimentacao = document.getElementById("alimentacaoid");
const reserva = document.getElementById("reservaid");
const meses = document.getElementById("mesesid");
const saldoP = document.getElementById("saldoPid");
const inpSalario = document.getElementById("avisosalid");
const inpAluguel = document.getElementById("avisoalugid");
const inpAlimentacao = document.getElementById("avisoaliid");
const inpReserva = document.getElementById("avisoresid");
const avisoP = document.getElementById("avisoPid");
const avisoD = document.getElementById("avisoDid");



let novosGastos = document.getElementsByClassName("novosGastos");
let totalNovosGastos = 0;
let defit = 0;
let saldo = 0;

meses.innerText = 0

class EntradaDeDados {

    salario = 0;
    gastos = 0;
    quantMeses = 0;

    calcMeses() {
        console.log(dados.salario)
        this.quantMeses = Number(reserva.value / (() => {

            if (saldo < 0) {

                return Math.abs(saldo)
            }
            else {
                return dados.salario;
            };

            
        })())
            
    };    
};


let dados = new EntradaDeDados();






function calcularTotalGastos() {


    let totalGastos = 0;

    totalGastos = Number(aluguel.value) + Number(alimentacao.value);
    
    for (const input of novosGastos) {

        totalGastos += Number(input.value)
    }
    
    return(totalGastos);


    
};


function salAtual() {
   
    dados.salario = Number(salarioAtual.value)
};

function avisos() {

    // Para o input "Salário bruto"
    if (salarioAtual.value === "") {

        inpSalario.classList.remove("avisoinpativo")
    }
    else if (Number(salarioAtual.value) <= 0) {

        inpSalario.classList.add("avisoinpativo")
    }
    else if (Number(salarioAtual.value > 0)) {

        inpSalario.classList.remove("avisoinpativo")
    }

    // Para o input "Aluguel"
    if (aluguel.value === "") {

        inpAluguel.classList.remove("avisoinpativo")
    }
    else if (Number(aluguel.value) <= 0) {

        inpAluguel.classList.add("avisoinpativo")
    }
    else if (Number(aluguel.value > 0)) {

        inpAluguel.classList.remove("avisoinpativo")
    }

    // Para o input "Alimentação"
    if (alimentacao.value === "") {
        console.log("funcionou")
        inpAlimentacao.classList.remove("avisoinpativo")
    }
    else if (Number(alimentacao.value) <= 0) {

        inpAlimentacao.classList.add("avisoinpativo")
    }
    else if (Number(alimentacao.value > 0)) {

        inpAlimentacao.classList.remove("avisoinpativo")
    }

    // Para o input "Reserva"
    if (reserva.value === "") {

        inpReserva.classList.remove("avisoinpativo")
    }
    else if (Number(reserva.value) <= 0) {

        inpReserva.classList.add("avisoinpativo")
    }
    else if (Number(reserva.value > 0)) {

        inpReserva.classList.remove("avisoinpativo")
    }
}

function ExibirMeses() {

    if (Number.isNaN(dados.quantMeses)) {
        dados.quantMeses = (0).toFixed(0)
    }
    
    meses.innerText = dados.quantMeses.toFixed(2)
}


function exibirSaldo() {
 
    saldo = dados.salario - dados.gastos;
    saldoP.innerText = saldo;


    if (saldo > 0) {
        
        saldoP.classList.remove("negative", "zero")
        saldoP.classList.add("positive");

        avisoP.style.display = "block";
        avisoD.style.display = "none";

    }
    else if (saldo < 0) {

        saldoP.classList.remove("positive", "zero")
        saldoP.classList.add("negative");

        avisoD.style.display = "block";
        avisoP.style.display = "none";
    }
    else if (Number(salarioAtual.value) === "" || Number(salarioAtual.value) == 0) { 

        saldoP.classList.remove("positive", "negative")
        saldoP.classList.add("zero");
    };
    // console.log(dados.gastos)

};


salarioAtual.addEventListener("input", () => {
    
    
    salAtual();
    exibirSaldo();
    avisos()

    if (calcularTotalGastos()) {
        
        dados.calcMeses()
    }
    ExibirMeses()

});
aluguel.addEventListener("input", () => {


    calcularTotalGastos()
    dados.gastos = calcularTotalGastos()
    exibirSaldo()
    avisos()
    dados.calcMeses()
    ExibirMeses()
    
    
    // console.log(dados.gastos)
    
});
alimentacao.addEventListener("input", () => {

    calcularTotalGastos()
    dados.gastos = calcularTotalGastos()
    exibirSaldo()
    avisos()
    dados.calcMeses()
    ExibirMeses()
    
    
    // console.log(dados.gastos)
});
reserva.addEventListener("input", () => {

    avisos()
    dados.calcMeses()
    ExibirMeses()
});

