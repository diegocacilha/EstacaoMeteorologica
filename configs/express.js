const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var consign = require('consign');

var sessions = require('express-session');

var helmet = require('helmet');

app.use(helmet());

app.use(sessions({
    secret: 'bondeDoSecretao',
    resave: false,
    saveUninitialized: true
}));

//Permite configurar arquivos estáticos
app.use(express.static('./node_modules'));//add locais estáticos
app.use(express.static('./app/public'));//esse é para a pasta LIB do DAVI

//sempre será executado ao receber uma requisição
app.use(bodyParser.json());//body-parser aceita o tipo JSON
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

//pasta onde ficarão as views
app.set('views', './app/views');

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`);
});
// Rotas carregadas primeiro serão executadas primeiro
app.use(function(req, res, next){
    if(!req.session.uniqueId && req.method !== 'POST'){
        res.render('login');
    }else 
        next();
});
module.exports = function(){
    consign({cwd:'app'})
        .include('routers')
        .then('generic-route')
		.into(app);
    return app;
}