let mysql = require('mysql');
let config = require('./config');
module.exports = class StaticConnection{
    static getConnection(){
        return mysql.createConnection(config);
    }
}

// function connFactory(){
//     return conn = mysql.createConnection(config);
// }


// module.exports = function(){
//     return connFactory;
// }