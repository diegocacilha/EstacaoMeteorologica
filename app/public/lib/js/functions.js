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