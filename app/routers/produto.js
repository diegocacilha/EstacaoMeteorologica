var fileUpload = require('express-fileupload');
module.exports = function(app){
    app.use(fileUpload());
    app.get('/produto', (req, res) => {
        console.log('Olá Mundo!');
        res.render('produto');
    });

    app.post('/produto/cadastro', (req, res) => {
        console.log(req.files);
        console.log(__dirname);
        res.render('produto');
    });
}