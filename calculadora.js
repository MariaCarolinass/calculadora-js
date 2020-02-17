function Somar() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var somar = parseInt(num1) + parseInt(num2);
	document.getElementById("resultado").innerHTML = somar;
}

function Diminuir() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var diminuir = parseInt(num1) - parseInt(num2);
	document.getElementById("resultado").innerHTML = diminuir;
}

function Multiplicar() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var multiplicar = parseInt(num1) * parseInt(num2);
	document.getElementById("resultado").innerHTML = multiplicar;
}

function Dividir() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var dividir = parseInt(num1) / parseInt(num2);
	document.getElementById("resultado").innerHTML = dividir;
}

function Limpar() {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("resultado").innerHTML = "";
}
