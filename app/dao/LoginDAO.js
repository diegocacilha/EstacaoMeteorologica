const StaticConnection = require('../dao/StaticConnection');
module.exports = class LoginDao{
	lista(login, callback){
		let Conn = StaticConnection.getConnection();
		let email = ' \'' + login.email + '\' ';
		let pw = ' \'' + login.pw + '\' ';
		Conn.query('select * from users where email= ' + email + 'and pw=' + pw, callback);
		Conn.end();
	}

}