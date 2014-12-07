/*global SRM, Backbone*/

SRM.Models = SRM.Models || {};

(function () {
    'use strict';
    
})();
/*global SRM, $*/

window.SRM = window.SRM || {};

_.extend(window.SRM, {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log("DASDASDSA");

        console.log(SRM);
        SRM.srmRouter = new SRM.Routers.SrmRoutes();

        Backbone.history.start();
    }
});
$(document).ready(function () {
    'use strict';
    SRM.init();
});
/*global SRM, Backbone, JST*/

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Main = Backbone.View.extend({
        template: JST['public/javascripts/templates/editor/main.hbs'],
        el: '#main',
        events: {
        },

        initialize: function (options) {
            console.log("SDasdada");
            this.options = options;
        },

        templateData: function() {
            return {
            };
        },

        render: function () {
            this.renderTemplate(this.templateData());

            return this;
        }

    });

})();

/*global SRM, Backbone*/

SRM.Routers = SRM.Routers || {};

(function () {
'use strict';

SRM.Routers.SrmRoutes = Backbone.Router.extend({
	routes:{
		'':'launch',
        'editor': 'getStarted',
        '*other': 'defaultRoute'
	},

	initialize: function(){
        console.log("adeiejw");
	},

	getStarted: function(){
	    $('#main').html('');
        SRM.mainView = new SRM.Views.Main({ });
        SRM.mainView.render();
	}, 
	
	defaultRoute : function(){
	    document.location.href="/";
	}

});

})();
$("document").ready(function($){
    var nav = $('.main-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            nav.addClass("navbar-fixed-top");
        } else {
            nav.removeClass("navbar-fixed-top");
        }
    });
});
