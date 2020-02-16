module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.json({
            status: true,
            msg: 'Alguma coisa que deve ser enviada pela rota /home', 
            davi: 'O que eu devo te enviar aqui nessa rota? Seu alemaum'
        });
    });
}