let curtido = false;

function curtirFoto() {
    let botao = document.getElementById("curtir");

    if (curtido == false) {
        botao.innerText = "Curtido! ✅";
        botao.style.backgroundColor = "lightgreen";
        curtido = true;
    } else {
        botao.innerText = "curtir";
        botao.style.backgroundColor = "";
        curtido = false;
    }
}
function mudarFundo() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
function mostrarNome() {
    let input = document.getElementById("campo_nome");
    let texto = document.getElementById("mensagem");
    texto.innerText = "Bem-vindo ao meu diário, " + input.value + "!";
}