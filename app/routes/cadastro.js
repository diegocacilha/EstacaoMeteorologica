module.exports = function(app){
    app.get('/cadastro', (req, res) => {
        res.render('cadastro');
    });
    app.post('/cadastro', (req, res) => {
        var conn = app.infra.connFactory();
        var cadastroDAO = new app.infra.CadastroDAO(conn);
        
        cadastroDAO.create(req.body, function(err, result){
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }

        });

        conn.end();
    });
}