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
    
    if (document.location.pathname != '/') {
        console.log('not landing page');
    }
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

SRM.Models = SRM.Models || {};

(function () {
    'use strict';

    SRM.Models.Faq = Backbone.Model.extend({

        // url: '/api/faq',

        initialize: function() {
        },

        defaults: {
            faq_id : '',
            question_id: '',
            question: '',
            answer: '',
            icon : '',
            created_at : '',
            updated_at : ''
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
            response.forEach(function (value, index) {
                value.file_name = "/images/" + value.file_name;
            });
            return response;
        },
    });
})();
/*global SRM, Backbone*/

SRM.Collections = SRM.Collections || {};

(function () {
    'use strict';

    SRM.Collections.FaqCollection = Backbone.Collection.extend({
        model: SRM.Models.Faq,
        url: '/faq',
        
        parse: function(response, options)  {
            return response;
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
            'mouseenter .default-icon' : 'getTip',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            SRM.iconsCollection = new SRM.Collections.SidebarIcons();
            SRM.iconsCollection.fetch({async: false}); 
            console.log(SRM.iconsCollection);

            return {sidebarIcons : SRM.iconsCollection.toJSON()}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
        getTip : function (ev){
            var id = $(ev.currentTarget).attr('id');
            
           
        }
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Faqs = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/faq.hbs'],
        el: '.faq-section',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            SRM.faqCollection = new SRM.Collections.FaqCollection();
            SRM.faqCollection.fetch({async: false}); 
            console.log('srm.faqcolelction:',SRM.faqCollection);

            return {faqs : SRM.faqCollection.toJSON()}       
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

            SRM.faqsContainer = new SRM.Views.Faqs();
            SRM.faqsContainer.render();
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
        document.location.href = '/#dashboard'
    });

    $(".open-options").click(function(ev){
        ev.preventDefault();
        $(this).toggleClass("hide");
        $(".starting-methods p").toggleClass("hide");
        $(".details").toggleClass("hide");
    });
       
});