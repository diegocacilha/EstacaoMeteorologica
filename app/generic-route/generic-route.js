module.exports = (app) => {
    app.use((req, res, next) => {
        if(!req.session.uniqueId){
            res.redirect('/login');
        }else{
            res.format({
                html: function(){
                    res.redirect('/login');
                },
                json: function(){
                    res.json({
                        status: false,
                        msg: 'Rota não existe. Redirecionado para /home'
                    });
                }
            });
        }
    });
}