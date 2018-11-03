/**
 * Esta function está no cabeçalho da página principal. No caso estamos fazendo isso no 
 * documento home.ejs. Ok DAVIZÃO?
 * 
 * @param {String} method Método http 
 * @param {String} url Endpoint 
 * @param {JSON} data 
 * @param {Function} callback Function que será exacutada quando retornar do DB 
 */
function sendRequest(method, url, data, callback){
    var req = new XMLHttpRequest();
    data = JSON.stringify(data);
    req.open(method, url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Accept', 'application/json');
    
    req.send(data);
    req.onreadystatechange = function(){
        if(req.readyState === 4){
            callback(JSON.parse(req.response));
        }
    }
}