var form = document.getElementById('form-login');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var obj = {
        email: document.getElementById('email').value,
        pw: document.getElementById('pw').value
    }
    sendRequest('POST', '/login', obj, function(res){
        if(res.status){
            location.href = '/'
        }else{
            console.log(res.msg);
        }
    });
});