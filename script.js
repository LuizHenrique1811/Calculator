var botoes = document.querySelectorAll("input[type='button']");
var output_operacao = document.querySelector("div[id='operacao']");
var output_resultado = document.querySelector("div[id='resultado'");
var toggle = document.querySelector("input[id='darkmode_toogle']");
var theme = document.querySelector("link[id='theme']");
var darkMode  = "styles/style_dark.css";
var lightMode = "styles/style_light.css";
let addPoint;
let operacao;

function f_pressiona_igual(){
    if (operacao && output_resultado.innerText){
        // if there was an operation selected it will calculate the result
        output_operacao.innerText = output_operacao.innerText.slice(0, -1)
        output_resultado.innerText = eval(output_operacao.innerText + operacao + output_resultado.innerText);
        output_operacao.innerText = "";
        operacao = "";
    }
}

function f_pressiona_operacao(vf_input_value){

    if( output_resultado.innerText){

        if(vf_input_value == "*" || vf_input_value == "x"){
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
        output_operacao.innerText = output_resultado.innerText + vf_input_value;  
        output_resultado.innerText = "";
        addPoint = true;

    }
}

function f_verifica_virgula(){
    
    if(output_resultado.innerText.includes(".") == false && addPoint){
        output_resultado.innerText += ".";
        addPoint = false;
    }
}

function f_verifica_input(input) {

    if (input.id == "tcl_c") {
        output_operacao.innerText = "";
        output_resultado.innerText = "";
    }
    else if (input.id == "tcl_ac") {
        // Remove the last element from the output_resultado
        output_resultado.innerText = output_resultado.innerText.slice(0, -1);
    }      
    else if(input.id == "tcl_ponto" && addPoint){
        f_verifica_virgula();
    }
    else if(input.id == "tcl_por"){
        output_resultado.innerText = output_resultado.innerText / 100
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
        output_resultado.innerText += input.value;  
        addPoint = true;
    }
    
}

document.addEventListener("keydown", function(tecla){
    
    if(tecla.key == "/" || tecla.key == "*" || tecla.key == "-" || tecla.key == "+"){
        f_pressiona_operacao(tecla.key);
        
    }
    else if(tecla.key == "Enter"){
        f_pressiona_igual();
    }
    else if(tecla.key == "Backspace"){
        output_resultado.innerText = output_resultado.innerText.slice(0, -1);
    }
    else if(tecla.key == "c"){
        output_operacao.innerText = "";
        output_resultado.innerText = "";
    }
    else if(tecla.key == "%"){
        output_resultado.innerText = output_resultado.innerText / 100
    }
    else {
        if(parseFloat(tecla.key) >= 0 || tecla.key == "," || tecla.key == "."){
            if (tecla.key == ","){
                f_verifica_virgula();
            }else{
                output_resultado.innerText += tecla.key
                addPoint = true
            }
        }
    }
})

// Add to each bottom the event listeners to very the bottom clicked 
botoes.forEach(function(input) {
    input.addEventListener("click", function() {
        f_verifica_input(input);
    });

});


toggle.addEventListener("click", function() {
    if (toggle.checked){
        // Dark mode settings
        theme.setAttribute("href", darkMode);
    }else{ 
        // Light mode settings
        theme.setAttribute("href", lightMode);

    }

});



