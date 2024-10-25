var botoes = document.querySelectorAll("input[type='button']");
var output_operacao = document.querySelector("div[id='operacao']");
var output_resultado = document.querySelector("input[id='resultado'");
var toggle = document.querySelector("input[id='darkmode_toogle']");
var theme = document.querySelector("link[id='theme']");
var darkMode  = "styles/style_dark.css";
var lightMode = "styles/style_light.css";
let operacao;

function f_verifica_numero(keyCode){
    console.log(keyCode)

    if((keyCode>= 96 && keyCode <= 105)){
        return true;
    }
    else{
        return false;
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

function f_pressiona_operacao(vf_input_value){

    if( output_resultado.value){

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
        output_operacao.innerText = output_resultado.value + vf_input_value;  
        output_resultado.value = "";

    }
}

function f_verifica_input(input) {

    if (input.id == "tcl_c") {
        output_operacao.innerText = "";
        output_resultado.value = "";
    }
    else if (input.id == "tcl_ac") {
        // Remove the last element from the output_resultado
        output_resultado.value = output_resultado.value.slice(0, -1);
    }      
    else if(input.id == "tcl_por"){
        output_resultado.value = output_resultado.value / 100
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
        if(input.value != "+" && input.value != "-" ){
            output_resultado.value += input.value;  
        }
    }
    
}

document.addEventListener("keydown", function(tecla){

    output_resultado.focus();
    
    if(tecla.key == "/" || tecla.key == "*" || tecla.key == "-" || tecla.key == "+"){
        f_pressiona_operacao(tecla.key);
    }
    else if(tecla.key == "%"){
        output_resultado.value = output_resultado.value / 100
    }
    else if(tecla.key == "c"){
        output_operacao.innerText = "";
        output_resultado.value = "";
    }
    else if(tecla.key == "Enter"){
        f_pressiona_igual();
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



