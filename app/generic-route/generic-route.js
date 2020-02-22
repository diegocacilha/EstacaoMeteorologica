module.exports = (app) => {
    app.use((req, res) => {
        res.format({
            html: function(){
                res.redirect('/login');
            },
            json: function(){
                res.json({
                    status: false,
                    msg: 'Rota não existe. Redirecione para /login'
                });
            }
        });
        res.json({
            status: false,
            msg: 'Esta rota não existe'
        });
    })
}