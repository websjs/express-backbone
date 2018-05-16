require.config({
    baseUrl:'/js/common/',
    paths:{
        'jquery':'jquery-3.2.1.min',
        'underscore':'underscore',
        'backbone':'backbone-1.1.2',
    }
})
require(['jquery', 'underscore', 'backbone'],function($,_,Backbone){
    var Router = Backbone.Router.extend({
        routes:{
            'home': 'home',
            'new': 'new',
            'about': 'about',
        },
        home:function(){
            console.log(arguments)
        },
        new: function () {
            console.log(arguments)
        },
        about: function () {
            console.log(arguments)
        },
    })
    var router = new Router;
    router.on("route:home", function (page) {
        console.log(1111,page)
    });
})