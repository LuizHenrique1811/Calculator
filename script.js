var botoes = document.getElementsByClassName("botao");
console.log(botoes);
botoes.addEventListener("click", function(event) {
    console.log(event.target); // este é o elemento clicado
    alert('O elemento clicado foi o ' + e.target.innerHTML);

    // dentro desta função o "this" refere-se ao <li>
})