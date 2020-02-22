module.exports = function(app){
    app.post('/cadastro', (req, res) => {
        var conn = app.infra.connFactory();
        var usuarioDAO = new app.infra.UsuarioDAO(conn);
        
        usuarioDAO.create(req.body, function(err, result){
            if(err){
                res.json(err);
            }else{
                res.json(result);
            }

        });

        conn.end();
    });
}