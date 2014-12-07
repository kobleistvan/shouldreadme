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
/*global SRM, Backbone*/

SRM.Models = SRM.Models || {};

(function () {
    'use strict';

    SRM.Models.Icon = Backbone.Model.extend({

        // url: '/api/icon',

        initialize: function() {
        },

        defaults: {
            title : '',
            tip_description: '',
            tooltip: '',
            file_name: '',
            type : '',
            status : 'none'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();

/*global SRM, Backbone*/

SRM.Collections = SRM.Collections || {};

(function () {
    'use strict';

    SRM.Collections.SidebarIcons = Backbone.Collection.extend({
        model: SRM.Models.Icon,
        url: '/icon',
        
        parse: function(response, options)  {
            return response.icons;
        },
    });
})();
/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarIcons = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/icons.hbs'],
        el: '.icons-subsection',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            this.iconsCollection = new SRM.Collections.SidebarIcons();
            this.iconsCollection.fetch({async : 'true'});
            
            
            return {}
        },

        render: function () {
            this.renderTemplate(this.templateData());

            return this;
        }
        
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Dashboard = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/baseDashboard.hbs'],
        el: '#main',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}
        },

        render: function () {
            this.renderTemplate(this.templateData());
            
            SRM.iconsSidebar = new SRM.Views.SidebarIcons();
            SRM.iconsSidebar.render();
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
		'':'home',
        'editor'     : 'createFineprint',
        'get_started': 'getStarted',
        'login'      : 'login',
        'register'   : 'register',
        'dashboard'  : 'baseDashboard',
        // '*other': 'defaultRoute'
	},

	initialize: function(){
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
	
	baseDashboard: function(){
        $('#main').html('');
        console.log("Loading dashboard..");
       
       SRM.baseDashboard = new SRM.Views.Dashboard();
    //   console.log(SRM.baseDashboard);
       
       SRM.baseDashboard.render();
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
        window.location.href = '/get_started';
    })
});
$("document").ready(function($){
    $(".disabled").click(function(event){
      event.preventDefault();
    });

    $(".submit-option.active").click(function( ev){
        ev.preventDefault();
        var $href = $(this).attr("href").substring(1);
        $(".starting-methods p").toggleClass("hide");
        $("."+$href).toggleClass("hide");
        $(".open-options").toggleClass("hide");
    });

    $(".open-options").click(function(ev){
        ev.preventDefault();
        $(this).toggleClass("hide");
        $(".starting-methods p").toggleClass("hide");
        $(".details").toggleClass("hide");
    });
});