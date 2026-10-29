


const inputs = document.getElementById("inputsid");
const add = document.getElementById("addid")




let x 




function digitarNomeDoInput(e) {

    e.preventDefault();

    const elemento = document.getElementById("novoElementoInput")


    if (inputs.contains(elemento)) {
        
        return
    }

    inputs.insertAdjacentHTML("beforeend", `<div id="novoElementoInput" class="inputparent"><label>Dê um nome ao novo gasto: </label>
    <input type="text" name="" id="novoInputid"></div>`) ;
    
    inputs.style.overflowY = "scroll";

    
}

function atribuirNomeInputNovo() {

    const nInput = document.getElementById("novoInputid")
    const novoElementoInput = document.getElementById("novoElementoInput")


    x = nInput.value;

    novoElementoInput.remove();
    

};

function adicionarInput() {


    inputs.insertAdjacentHTML("beforeend", `<label for="${x}id">${x}</label>
            <div class="${x}parent">
                <input type="number" name="" id="${x}id" class="novosGastos">
                <p class="avisosinp" id="aviso${x}id">O valor precisa ser maior que zero</p>
            </div>`);

    const novoGasto = document.getElementById(`${x}id`)

    novoGasto.addEventListener("input", (e) => {

        e.preventDefault()

        calcularTotalGastos()
        dados.gastos = calcularTotalGastos()
        exibirSaldo()
        avisos()
        dados.calcMeses()
        ExibirMeses()
    })

    
};


inputs.addEventListener("keydown", (e) => {

    const click = e.target.closest("#novoInputid")

    
    
    if (!click || !inputs.contains(click)) {
        
        return
    }
    

    if (click && e.key === "Enter") {

         atribuirNomeInputNovo();
         adicionarInput();

    };

    

});

add.addEventListener("click", digitarNomeDoInput);



