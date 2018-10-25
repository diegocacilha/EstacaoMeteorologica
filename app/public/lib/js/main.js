var botaoLogin = $("#botao-login");
var mensagemErro = $("#mensagem-erro-login");
botaoLogin.click(autentica);

function autentica(event) {
	event.preventDefault();

	const login = $("#email").val();
	const senha = $("#pw").val();
	const objeto = {
		login: login,
		senha: senha
	};

	$.post("/", objeto, function(res){
		console.log(res);
		var resposta = res.msg;
		console.log(resposta);
		mensagemErro.textContent = "resposta";
	})
}