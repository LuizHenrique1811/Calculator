var botoes = document.querySelectorAll("input[type='button']");
var output_operacao = document.querySelector("div[id='operacao']");
var output_resultado = document.querySelector("div[id='resultado'");
var toggle = document.querySelector("input[id='darkmode_toogle']");
var body = document.querySelector("body");
var calculadora = document.querySelector("div[id='calculadora']");
var visor = document.querySelector("div[id='visor']");
var operacoes = document.querySelector("input[class='operacao']");
let operacao;

console.log(botoes)

toggle.addEventListener("click", function() {
    if (toggle.checked){ //dark mode
        body.style.background = "linear-gradient(to left,#CC7A00,#3a3a3a,#000)";
        calculadora.style.background = "#1E2021";
        visor.style.color = "#ffffff";
        visor.style.background = "#313537";
        botoes.forEach(function(input) {
            if(input.classList.item(2) == "operacao"){
                input.style.background = "#CC7A00";
                input.style.color = "#ffffff";
                input.style.border = "1px solid #B15201";
            }else{
                input.style.background = "#2A2D2F";
                input.style.color = "#ffffff";
                input.style.border = "1px solid #43484B";
            }
        });
        botoes.style.background = "#2A2D2F";
        operacoes.style.background = "#2A2D2F";
        operacoes.style.background = "#E0E0E0";
    }else{ //light mode
        body.style.background = "linear-gradient(to left,#ff9900,#f8cc89,#ffffff)";
        calculadora.style.background = "#F5F5F5";
        visor.style.color = "#000";
        visor.style.background = "#D3D3D3";
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

botoes.forEach(function(input) {
    input.addEventListener("click", function() {
        f_verifica_input(input);
    });
});

function f_verifica_input(input) {
    if (input.id == "tcl_c") {
        
        output_operacao.innerText = "";
        output_resultado.innerText = "";
    }

    else if (input.id == "tcl_ac") {
        output_resultado.innerText = output_resultado.innerText.slice(0, -1);
    }

    else if(input.classList.item(2) == "operacao"){

        if (output_resultado.innerText != "") {

            if (input.id == "tcl_igual"){
                if (operacao != undefined){
                    output_resultado.innerText = eval(output_operacao.innerText.slice(0, -1) + operacao + output_resultado.innerText);
                    output_operacao.innerText = "";
                    operacao = "";
                }
            }else{
                f_verifica_operacao(input);
                output_operacao.innerText = output_resultado.innerText += input.value;  
                output_resultado.innerText = "";
            }
        }
    }
    
    else{
        output_resultado.innerText += input.value;  
    }

}

function f_verifica_operacao(vf_input) {

    if (vf_input.id == "tcl_mais"){
        operacao = "+";
    }
    else if (vf_input.id == "tcl_menos"){
        operacao = "-";
    }
    else if (vf_input.id == "tcl_mult"){
        operacao = "*";
    }
    else if (vf_input.id == "tcl_div"){
        operacao = "/";
    }
    else if (vf_input.id == "tcl_por"){
        operacao = "%";
    }
}