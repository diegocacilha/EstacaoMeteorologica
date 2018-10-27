module.exports = function(app){
    app.get('/cadastro', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        res.render('cadastro');
    });
    app.post('/cadastro', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        var conn = app.infra.connFactory();
        var cadastroDAO = new app.infra.CadastroDAO(conn);
        
        cadastroDAO.lista(function(err, result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
        });

        cadastroDAO.create(req.body, function(err, result){
            if(err){
                res.json(err);
            }else{
                res.redirect('/');
            }

        });

        conn.end();
    });
}