var formulario = $('#form-login');
var mensagemErro = $("#mensagem-erro-login");
formulario.submit(autentica);

function autentica(event) {
	event.preventDefault();

	const login = $("#email").val();
	const senha = $("#pw").val();
	const objeto = {
		email: login,
		pw: senha
	};

	$.post("/", objeto, function(res){
		if(res.status == false){
			mensagemErro[0].textContent = res.msg;
			mensagemErro[0].style.display = 'block';
		}else{
			/**
			 * Aqui é contigo, negão.
			 * Quando o login for bem-sucedido, o backend vai que enviar um HTML. 
			 * Vais ter que pegar o html e renderizá-lo.
			 */
		}
	})
}