var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('static'));
app.get('/',function(req, res){
    let data = {
        title : '首页',
        message : '路由',

    }
    res.render('index', data )
});
app.get('/home', function (req, res) {
    res.render('home')
})
app.post('/home', function (req, res) {
    let data = {
        'title':'home',
        'content': 'welcome home'
    }
    res.send(data)
})
app.get('/about', function (req, res) {
    res.render('about')
})
app.post('/about', function (req, res) {
    let data = {
        'title': 'about',
        'content': 'about us'
    }
    res.send(data)
})
app.get('/new', function (req, res) {
    res.render('new')
})
app.post('/new', function (req, res) {
    let data = {
        'title': 'new',
        'content': 'today new'
    }
    res.send(data)
})
var server = app.listen(6789, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listen at https://%s:%s', host, port)
});