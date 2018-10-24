function CadastroDAO(connection){
	this._conn = connection;
}
CadastroDAO.prototype.create = function(usuario, callback){
	var email = ' \'' + usuario.email + '\' ';
	var pw = ' \'' + usuario.pw + '\' ';
	this._conn.query('insert into users (email, pw) values ('+email+', '+pw+')', callback);
}

module.exports = function(){
	return CadastroDAO;
}