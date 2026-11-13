// Retorna true se a idade for maior ou igual a 18, e false se for menor.
function verificarIdade(idade) {
    return idade >= 18;
}

const formulario = document.querySelector("form");
const campoIdade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita recarregar a página

    const idade = Number(campoIdade.value);

    if (campoIdade.value === "" || idade < 0) {
        resultado.textContent = "Digite uma idade válida.";
        resultado.className = "invalido";
        return;
    }

    if (verificarIdade(idade)) {
        resultado.textContent = "Maior de idade";
        resultado.className = "maior";
    } else {
        resultado.textContent = "Menor de idade";
        resultado.className = "menor";
    }
});