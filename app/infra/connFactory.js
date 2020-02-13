var mysql = require('mysql');
var config = require('./config');

function connFactory(){
    return conn = mysql.createConnection(config);
}

module.exports = function(){
    return connFactory;
}