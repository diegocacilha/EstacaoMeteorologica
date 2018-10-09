var mysql = require('mysql');

function connFactory(){
    return conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
    });
}

module.exports = function(){
    return connFactory;
}