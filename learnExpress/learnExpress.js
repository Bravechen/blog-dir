const express = require('express');
const handlebars = require('express-handlebars').create({
        defaultLayout:'main',
        extname:'.hbs'
    });

const app = express();

app.engine('.hbs',handlebars.engine);
app.set('view engine','.hbs');

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

app.get('/tours/hood-river',function(req,res){
    res.render('tours/hood-river',{title:'胡德河'});
});

app.get('/tours/oregon-coast',function(req,res){
    res.render('tours/oregon-coast',{title:'俄亥俄海滩之旅'});
});

app.get('/tours/request-group-rate',function(req,res){
    res.render('tours/request-group-rate',{title:'旅行团规模'});
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