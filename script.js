var botoes = document.querySelectorAll("input[type='button']");
var output_operacao = document.querySelector("div[id='operacao']");
var output_resultado = document.querySelector("div[id='resultado'");
let operacao;

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