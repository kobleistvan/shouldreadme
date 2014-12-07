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
            this.options = options;
        },

        templateData: function() {
            return {};
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
		'':'bome',
        'editor': 'createFineprint',
        'get_started': 'getStarted',
        'login' : 'login',
        'register' : 'register',
        // '*other': 'defaultRoute'
	},

	initialize: function(){
        console.log("adeiejw");
	},
	createFineprint: function(){
	    $('#main').html('');
        SRM.getStartedBase = new SRM.Views.GetStarted({ });
        SRM.getStartedBase.render();
	}, 
	getStarted: function(){
	    $('#main').html('');
        SRM.mainView = new SRM.Views.Main({ });
        SRM.mainView.render();
	}, 
	
	login : function(){
	    $("#logInModal").modal('show');
	},
	
	register : function(){
	    $("#signUpModal").modal('show');
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
                $('#get-st').click(function(){
                   document.location.href= '/#get_started' 
                });
            });
            // /*global SRM, Backbone, JST*/

// SRM.Views = SRM.Views || {};

// (function () {
//     'use strict';

//      SRM.Views.Launch = Backbone.View.extend({
//         template: JST['public/javascripts/templates/launch/launch.hbs'],
//         el: '#main',
//         events: {
//             'click ".open-options' : 'toggleOptions'
//         },
      
//         initialize: function (options) {
//             this.options = options;
//         },

//         templateData: function() {
//             return {};
//         },

//         render: function () {
//             this.renderTemplate(this.templateData());
            

//             return this;
//         },
//         comingSoon : function(ev){
//             ev.preventDefault();
//         },
//         toggleSubmit : function(){
//             var $href = $('.submit-option.active').attr("href").substring(1);
//             $(".starting-methods p").toggleClass("hide");
//             $("."+$href).toggleClass("hide");
//             $(".open-options").toggleClass("hide");
//         },
//         toggleOptions : function(){
//             $('.open-options').toggleClass("hide");
//             $(".starting-methods p").toggleClass("hide");
//             $(".details").toggleClass("hide");
//         },
//     });

// })();