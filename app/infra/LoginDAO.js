function LoginDAO(connection){
	this._conn = connection;
}
//
LoginDAO.prototype.lista = function(login, callback){
	var email = ' \'' + login.email + '\' ';
	var pw = ' \'' + login.pw + '\' ';
	this._conn.query('select * from users where email= ' + email + 'and pw=' + pw, callback);
}

module.exports = function(){
	return LoginDAO;
}