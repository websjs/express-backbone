var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('static'));
app.get('/',function(req, res){
    let data = {
        title : '首页',
        message : '路由',
        nav:[
            {
                text: '首页',
                href:'/home'
            },
            {
                text:'新闻',
                href:'/new'
            },
            {
                text:'关于',
                href:'/about'
            }
        ]
    }
    res.render('index', data )
});
app.get('/home', function (req, res) {

    let data = {
        content : 'home'
    }
    res.render('home', data )
})
var server = app.listen(6789, function () {
    var host = server.address().address;
    var port = server.address().port;


    console.log('Example app listen at https://%s:%s', host, port)
});