//Função para calcular a média das notas
function calcularMedia() {

    //Paga os valores dos campos
    var n1 = parseFloat(document.getElementById('nota1').value);
    var n2 = parseFloat(document.getElementById('nota2').value);
    var n3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, insira notas válidas");
        return;
    }

    //calcular a Média
    var media = (n1+n2+n3) /3;

    //mostra o resutado
    document.getElementById('resultado').innerText = "A Média é: " + media.toFixed(2);



}