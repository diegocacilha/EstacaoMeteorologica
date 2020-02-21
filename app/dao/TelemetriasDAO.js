const Conn = require('./StaticConnection');
module.exports = class TelemetriasDAO{
    
    lista(){
        const retorno = new Promise(function(resolve, reject){
            let conn = Conn.getConnection();
            conn.query('select * from telemetrias', function(err, result, fields){
                if(err)
                    reject(function(){console.log('deu erro aqui na promisse')});
                else
                    resolve(result);
            });
            conn.end();
        });
        return retorno;
    }
    delete(telemetria){
        const retorno = new Promise(function(resolve, reject){
            let conn = Conn.getConnection();
            conn.query('delete from telemetrias where ? ', telemetria, function(err, result, fields){
                if(err)
                    reject(() => console.log('erro ao deletar'));
                else
                    resolve(result);
            });
            conn.end();
        });
        return retorno;
    }
}
// function TelemetriasDAO(conn){
//     this._conn = conn;
// }
// TelemetriasDAO.prototype.lista = function(callback){
//     this._conn.query('select * from telemetrias', callback);
// }
// TelemetriasDAO.prototype.insert = function(telemetria, callback){
//     this._conn.query('insert into telemetrias ' + 
//                      '(data, temperatura, pressao) values (\'' + telemetria.data + '\',' 
//                                                              + telemetria.temperatura + ','
//                                                              + telemetria.pressao + ');', callback);
// }

// TelemetriasDAO.prototype.lista_unica = function(id, callback){
//     this._conn.query('select * from telemetrias where id=' + id, callback);
// }

// TelemetriasDAO.prototype.delete = function(telemetria, callback){
//     this._conn.;    
// }

// TelemetriasDAO.prototype.update = function(telemetria, callback){
//     this._conn.query('update telemetrias set  ?  where id = ' + telemetria.id
//                     , telemetria
//                     , callback);
// }

// module.exports = function(){
//     return TelemetriasDAO;
// }