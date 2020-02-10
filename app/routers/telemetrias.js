module.exports = (app) => {
    app.get('/telemetrias', (req, res) => {
        if (!req.session.uniqueId) {
            res.redirect('/');
            return;
        }
        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.lista(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res.format({
                    html: function () {
                        res.render('telemetrias', { lista: result });
                    },
                    json: function () {
                        res.json(result);
                    }
                });
            }
        });
        conn.end();
    });
    app.post('/telemetrias/cadastro', (req, res) => {
        validaSessao(req, res);
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

    app.get('/telemetrias/editar/:id', (req, res) => {
        validaSessao(req, res);
        var id = req.params.id;

        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.lista_unica(id, (err, result) => {
            if (err)
                console.log(err);
            else {
                res.render('editar_telemetrias', { lista: result[0] });
            }


        });
        conn.end();
    });

    app.post('/telemetrias/editar/:id', (req, res) => {
        validaSessao(req, res);
        var telemetria = req.body;

        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.update(telemetria, (err, result) => {
            if (err)
                console.log(err);
            else {
                res.method = 'GET';
                res.redirect('/telemetrias');
            }
        });
        conn.end();
    });

    app.delete('/telemetrias/excluir', (req, res) => {
        validaSessao(req, res);
        var id = req.params.id;
        console.log('entoru');
        var conn = app.infra.connFactory();
        var telemetrias = new app.infra.TelemetriasDAO(conn);
        telemetrias.delete(id, (err, result) => {
            if (err)
                console.log(err);
            else
                res.redirect('/telemetrias');
        });
        conn.end();
    });

    var validaSessao = (req, res) => {
        if (!req.session.uniqueId) {
            res.redirect('/');
            return;
        }
    };
}