const StaticConnection = require('../dao/StaticConnection');
module.exports = class LoginDao{
	lista(login, callback){
		let conn = StaticConnection.getConnection();
		let teste = conn.query('select * from users where email = ? and pw = ? ', [login.email, login.pw], callback);
		conn.end();
	}

}