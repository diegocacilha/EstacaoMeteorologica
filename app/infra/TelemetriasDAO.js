function TelemetriasDAO(conn){
    this._conn = conn;
}
TelemetriasDAO.prototype.lista = function(callback){
    this._conn.query('select * from telemetrias', callback);
}

module.exports = function(){
    return TelemetriasDAO;
}