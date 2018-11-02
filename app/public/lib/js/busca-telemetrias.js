console.log("JSON carregado");

var requisitaJson = function(){
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/telemetrias",);
	xhr.setRequestHeader('Accept', 'application/json');

	xhr.addEventListener("load", function(){
		var resposta = xhr.responseText
		//console.log(typeof resposta);
		var telemetrias = JSON.parse(resposta);
		//console.log(telemetrias);
		console.log(typeof telemetrias);
		
	});

	xhr.send();	

}

requisitaJson();
