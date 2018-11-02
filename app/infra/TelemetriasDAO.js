function TelemetriasDAO(conn){
    this._conn = conn;
}
TelemetriasDAO.prototype.lista = function(callback){
    this._conn.query('select * from telemetrias', callback);
}
TelemetriasDAO.prototype.insert = function(telemetria, callback){
    this._conn.query('insert into telemetrias ' + 
                     '(data, temperatura, pressao) values (\'' + telemetria.data + '\',' 
                                                             + telemetria.temperatura + ','
                                                             + telemetria.pressao + ');', callback);
}

module.exports = function(){
    return TelemetriasDAO;
}