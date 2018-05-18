require.config({
    baseUrl:'/js/common/',
    paths:{
        'jquery':'jquery-3.2.1.min',
        'underscore':'underscore',
        'backbone':'backbone-1.1.2',
    }
})
require(['jquery', 'underscore', 'backbone'],function($,_,Backbone){

    var events = {};
    _.extend(events, Backbone.Events);
    console.log(events)
    var Model = Backbone.Model.extend({
        initialize:function(){
            this.homeData = null;
            this.aboutData = null;
            this.newData = null;
        }
    })
    var Content = Backbone.View.extend({

        model:new Model,
        element:'div',
        className:'content',
        homeUrl:'/home',
        homeHtml:'',
        aboutUrl:'/about',
        aboutHtml:'',
        newUrl:'/new',
        newHtml:'',
        template: function (html) {
            return _.template(html);
        },
        getTeml: function(name){
            var _this = this;
            _this.listenTo(_this.model, name, _this.render)
            Backbone.ajax({
                url: _this[name+'Url'],
                type: 'GET',
                success: function (data) {
                    _this[name+'Html'] = data;
                    // events.on(name, _this.render, _this)
                }
            })
        },
        initialize:function(){
            this.getTeml('home')
            this.getTeml('about')
            this.getTeml('new')
        },
        render:function(html, data){
            this.$el.html(this.template(html)(data))
            $('section').html(this.$el)
            return this;
        }
    })
    var Router = Backbone.Router.extend({
        routes:{
            'home': 'home',
            'new': 'new',
            'about/:query/p:page': 'about',
        },
        home:function(){
            Backbone.ajax({
                url: content.homeUrl,
                type: 'POST',
                success: function (data) {
                    content.render(content.homeHtml, data)
                }
            })
        },
        about: function () {
            Backbone.ajax({
                url: content.aboutUrl,
                type: 'POST',
                success: function (data) {
                    content.render(content.aboutHtml, data)
                }
            })
        },
        new: function (query, page) {
            Backbone.ajax({
                url: content.newUrl,
                type: 'POST',
                success: function (data) {
                    content.render(content.newHtml, data)
                }
            })
        },
    })
    var model = new Model;
    var content = new Content;
    var router = new Router;

    Backbone.history.start()
    // content.model = model;

})