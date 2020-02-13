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

TelemetriasDAO.prototype.lista_unica = function(id, callback){
    this._conn.query('select * from telemetrias where id=' + id, callback);
}

TelemetriasDAO.prototype.delete = function(telemetria, callback){
    this._conn.query('delete from telemetrias where id = '+telemetria.id, callback);    
}

TelemetriasDAO.prototype.update = function(telemetria, callback){
    this._conn.query('update telemetrias set  ?  where id = ' + telemetria.id
                    , telemetria
                    , callback);
}

module.exports = function(){
    return TelemetriasDAO;
}