var botoes = document.querySelectorAll("input[type='button']");
var output_operacao = document.querySelector("div[id='operacao']");
var output_resultado = document.querySelector("input[id='resultado'");
var toggle = document.querySelector("input[id='darkmode_toogle']");
var body = document.querySelector("body");
var calculadora = document.querySelector("div[id='calculadora']");
var visor = document.querySelector("div[id='visor']");
var operacoes = document.querySelector("input[class='operacao']");
let operacao;

document.addEventListener("keydown", function(tecla){

    output_resultado.focus();

    if(tecla.key == "/" || tecla.key == "*" || tecla.key == "-" || tecla.key == "+" || tecla.key == "%" ){

        f_pressiona_operacao(tecla.key);
        
    }else if(tecla.key == "Enter"){

        f_pressiona_igual();
    }
})

toggle.addEventListener("click", function() {
    if (toggle.checked){
        // Dark mode settings
        body.style.background = "linear-gradient(to left,#CC7A00,#3a3a3a,#000)";
        calculadora.style.background = "#1E2021";
        output_resultado.style.color = "#ffffff";
        visor.style.background = "#313537";
        visor.style.color = "#ffffff";

        botoes.forEach(function(input) {
            
            if(input.classList.item(2) == "operacao"){
                
                input.style.color = "#ffffff";
                input.style.background = "#CC7A00";
                input.style.border = "1px solid #B15201";
                
            }else{
                
                input.style.color = "#ffffff";
                input.style.background = "#2A2D2F";
                input.style.border = "1px solid #43484B";
                
            }
        });
        
    }else{ 
        // Light mode settings
        body.style.background = "linear-gradient(to left,#ff9900,#f8cc89,#ffffff)";
        calculadora.style.background = "#F5F5F5";
        output_resultado.style.color = "#000";
        visor.style.background = "#D3D3D3";
        visor.style.color = "#000";

        botoes.forEach(function(input) {
            
            if(input.classList.item(2) == "operacao"){
                
                input.style.background = "#FF9800";
                input.style.color = "#000";
                input.style.border = "1px solid #EF6C00";

            }else{
                input.style.background = "#E0E0E0";
                input.style.color = "#000";
                input.style.border = "1px solid #BDBDBD";
                
            }
        });

    }

});

// Add to each bottom the event listeners to very the bottom clicked 
botoes.forEach(function(input) {
    input.addEventListener("click", function() {
        f_verifica_input(input);
    });

});

function f_verifica_input(input) {

    if (input.id == "tcl_c") {
        output_operacao.innerText = "";
        output_resultado.value = "";
    }

    else if (input.id == "tcl_ac") {
        // Remove the last element from the output_resultado
        output_resultado.value = output_resultado.value.slice(0, -1);
    }
    //Verify if the input is an operation
    else if(input.classList.item(2) == "operacao"){

        if (input.id == "tcl_igual"){
            f_pressiona_igual();
        }else{
            f_pressiona_operacao(input.value);
        }

    }
    
    else{
        // if there was no operation selected it will save the operation
        output_resultado.value += input.value;  
    }
    
}
function f_pressiona_operacao(vf_input_value){

    if( output_resultado.value){

        if(vf_input_value == "*"){
            operacao = "*";
            vf_input_value = "x"
        }
        else if(vf_input_value == "÷" || vf_input_value == "/"){
            operacao = "/";
            vf_input_value = "÷"
        }
        else{
            operacao = vf_input_value;
        }
        output_operacao.innerText = output_resultado.value + vf_input_value;  
        output_resultado.value = "";

    }

}

function f_pressiona_igual(){
    if (operacao && output_resultado.value){
        // if there was an operation selected it will calculate the result
        output_operacao.innerText = output_operacao.innerText.slice(0, -1)
        output_resultado.value = eval(output_operacao.innerText + operacao + output_resultado.value);
        output_operacao.innerText = "";
        operacao = "";
    }
}
