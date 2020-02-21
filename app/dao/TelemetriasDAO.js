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
    insert(telemetria){
        const retorno = new Promise(function(resolve, reject){
            const conn = Conn.getConnection();
            let query = 'insert into telemetrias set ? '; 
            let callback = function(err, result, fields){
                if(err){
                    reject(err);
                }else
                    resolve(result);
            }
            conn.query(query, telemetria, callback);
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
//     this._conn.query();
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