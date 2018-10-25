var formulario = $('#form-login');
var mensagemErro = $("#mensagem-erro-login");
formulario.submit(autentica);

function autentica(event) {
	event.preventDefault();

	const login = $("#email").val();
	const senha = $("#pw").val();
	const objeto = {
		login: login,
		senha: senha
	};

	$.post("/", objeto, function(res){
		mensagemErro[0].textContent = res.msg;
		mensagemErro[0].style.display = 'block';
	})
}