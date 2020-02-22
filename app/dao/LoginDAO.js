const StaticConnection = require('../dao/StaticConnection');
module.exports = class LoginDao{
	lista(login, callback){
		let conn = StaticConnection.getConnection();
		let query  = 'select * from users where email = ? and pw = ? ';
		conn.query(query, [login.email, login.pw], callback);
		conn.end();
	}

}