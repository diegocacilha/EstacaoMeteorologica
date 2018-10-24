module.exports = function(app){
    app.get('/usuario', (req, res) => {
        res.render('usuario');
    });
    app.post('/usuario', (req, res) => {
        var conn = app.infra.connFactory();
        var usuarioDAO = new app.infra.UsuarioDAO(conn);
        
        usuarioDAO.create(req.body, function(err, result){
            if(err){
                console.log(err);
            }else{
                res.redirect('home');
            }

        });

        conn.end();
    });
}