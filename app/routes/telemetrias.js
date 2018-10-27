module.exports = (app) => {
    app.get('/telemetrias', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.lista(function(err, result){
            if(err){
                console.log(err);
            }else{
                res.render('telemetrias', {lista: result});
            }
        });
        conn.end();
    });
}