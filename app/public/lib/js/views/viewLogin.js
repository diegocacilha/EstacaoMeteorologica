function exibeErroAutenticacao(msg)
{
    let data = document.querySelector('#mensagem-erro-login');
    data.classList.add("alert");
    data.classList.add("alert-danger");
    data.textContent = msg;
}