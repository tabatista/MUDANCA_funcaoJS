/**
 * 
 */

function oclick(){
	
var formulario = document.getElementById("formulario");
	
	var nome = formulario.nome.value;
	
	var idade = formulario.idade.value;
	
if(nome == ""){
		
		document.getElementById("nome").style.borderStyle = "solid";
		document.getElementById("nome").style.borderColor = "red";
		}
	
	if(idade == ""){
		document.getElementById("idade").style.borderStyle = "solid";
		document.getElementById("idade").style.borderColor = "red";
		}
	
	if(idade == "" || nome == ""){
		alert("Preencha o(s) campo(s) em vermelho");
	}
	
	if(nome != ""){
		
		document.getElementById("nome").style.borderColor = "black";
		document.getElementById("nome").style.borderStyle = "solid";
	}
	
	if(idade != ""){
		
		document.getElementById("idade").style.borderColor = "black";
		document.getElementById("idade").style.borderStyle = "solid";
	}
}

function mudar(){
	
	var formulario = document.getElementById("formulario");
	
	var nome = formulario.nome.value;
	
	var idade = formulario.idade.value;
	
	if(idade != "" && nome != ""){
				
	document.getElementById("mudar").style.display = "block";
		
		document.getElementById("onome").innerHTML = nome;
		document.getElementById("aidade").innerHTML = idade;
	}
	
	return false;
}