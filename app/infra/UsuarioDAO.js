function UsuarioDAO(connection){
	this._conn = connection;
}
UsuarioDAO.prototype.create = function(usuario, callback){
	var email = ' \'' + usuario.email + '\' ';
	var pw = ' \'' + usuario.pw + '\' ';
	this._conn.query('insert into users (email, pw) values ('+email+', '+pw+')', callback);
}

UsuarioDAO.prototype.lista = function(callback){
	this._conn.query('select * from users' , callback);
}

module.exports = function(){
	return UsuarioDAO;
}