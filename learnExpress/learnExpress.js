const express = require('express');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});

const app = express();

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(function(req,res,next){
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('home',{title:'home page'});
});

app.get('/about',function(req,res){
    res.render('about',{
        title:'About page',
        pageTestScript:'/qa/tests-about.js'
    });
});

//404
app.use(function(req,res){
    res.status(404);
    res.render('404',{title:'404 - Not Found'});
});

//500
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500);
    res.render('500',{title:'500 - Server Error'});
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-c to terminate.');
});