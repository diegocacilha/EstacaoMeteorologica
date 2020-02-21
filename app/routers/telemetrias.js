const Telemetria = require('../dao/TelemetriasDAO');
module.exports = (app) => {
    app.get('/telemetrias', function(req, res, next) {
        let telemetrias = new Telemetria();
        telemetrias.lista().then(function(result){
            res.format({
                html: function () {
                    res.render('telemetrias', { lista: result });
                },
                json: function () {
                    res.json(result);
                }
            });
        }).catch(function(err){
            console.log(err);
        });
    });

    app.post('/telemetrias/cadastro', (req, res) => {
        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.insert(req.body, function (err, result) {
            if (err) {
                console.log(err);
            }else{
                res.method = 'GET';
                res.redirect('/telemetrias');
            }
        });
        conn.end();
    });

    app.delete('/telemetrias/excluir', function (req, res) {
        var id = req.body;
        var telemetrias = new Telemetria();
        telemetrias.delete(id)
        .then(function(result){
            res.json({
                status: true,
                msg : 'Deu boa',
                result: result
            });
        })
        .catch((err) => console.log(err));
    });
    // app.get('/telemetrias/editar/:id', (req, res) => {
    //     var id = req.params.id;

    //     var conn = app.infra.connFactory();
    //     var telemetrias = new app.infra.TelemetriasDAO(conn);
    //     telemetrias.lista_unica(id, (err, result) => {
    //         if (err)
    //             console.log(err);
    //         else {
    //             res.render('editar_telemetrias', { lista: result[0] });
    //         }


    //     });
    //     conn.end();
    // });
}


// function (err, result) {
//     if (err) {
//         console.log(err);
//     } else {
        
//     }
// }