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
            response.forEach(function (value, index) {
                value.file_name = "/images/" + value.file_name;
            });
            return response;
        },
    });
})();
/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.PrintItem = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/printItem.hbs'],
        el: '.preview-container',
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
            return this;
        },
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.EditPanel = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/editPanel.hbs'],
        el: '.edit-panel',
        events: {
        },
        
        defaults : {
            icons : ['a','n'],
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}       
        },

        render: function () {
            var _this = this;
            this.renderTemplate(this.templateData());
            
            this.icons = ( this.options && this.options.icons) ? this.options.icons : this.defaults.icons;
            if(this.icons.length){
                _this.icons.forEach(function (id){
                    _this.printItem = new SRM.Views.PrintItem({'id' : id });
                    _this.printItem.render();
                });
            }
            
            
            return this;
        },
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.FaqPanel = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/faqPanel.hbs'],
        el: '.faq-panel',
        events: {
        },
        
        defaults : {
        },

        initialize: function (options) {
            this.options = options;
            this.listenTo(this.options.parent, 'togglefaqpanel', this.toggleVisible);
        },

        templateData: function() {
            return {
                faqstubs: [
                    {'question': 'What is this madness?', 'answer':'Madness, I tell you!'},
                    {'question': 'Will it end?', 'answer':'At 10 AM !'}
                ]
            }       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
        toggleVisible: function() {
            $('.faq-panel').toggleClass('hide');
        }
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.QuizPanel = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/quizPanel.hbs'],
        el: '.quiz-panel',
        events: {
        },
        
        defaults : {
        },

        initialize: function (options) {
            this.options = options;
            this.listenTo(this.options.parent, 'togglequizpanel', this.toggleVisible);
        },

        templateData: function() {
            return {
                quizstubs: [
                    {'question': 'What is this madness?', 'answer':'Madness, I tell you!'},
                    {'question': 'Will it end?', 'answer':'At 10 AM !'}
                ]
            }       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
        toggleVisible: function() {
            $('.quiz-panel').toggleClass('hide');
        }
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarTips = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/tips.hbs'],
        el: '.tips-section',
        events: {
        },
        defaults : {
            content : 'Add icons and create your own fineprint!'
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            var content;
            if(this.options && this.options.content){
                content = this.options.content;
            }
            else{
                content = this.defaults.content;
            }
            
            return {content : content}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
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
            'mouseleave .default-icon' : 'removeTip',
            'click .default-icon'      : 'renderItem',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            SRM.iconsCollection = new SRM.Collections.SidebarIcons();
            SRM.iconsCollection.fetch({async: false}); 

            return {sidebarIcons : SRM.iconsCollection.toJSON()}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
        getTip : function (ev){
            var icon = SRM.iconsCollection.get($(ev.currentTarget).attr('id'));

            this.tips = new SRM.Views.SidebarTips({'content' : icon.get('tip_description')});
            this.tips.render();
            
        },
        removeTip : function (ev){
            this.tips = new SRM.Views.SidebarTips();
            this.tips.render();
        },
        renderItem : function(ev){
            this.previewIcon = new SRM.Views.PrintItem({id : $(ev.currentTarget).attr('id')});
            this.previewIcon.render();
        }
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Faqs = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/faqs.hbs'],
        el: '.faq-section',
        events: {
            'toggle .toggle.faq-toggle': 'toggleKnob',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}       
        },

        render: function() {
            this.renderTemplate(this.templateData());
            $('.faq-toggle').toggles({
                clickable: !$(this).hasClass('noclick'),
                dragable: !$(this).hasClass('nodrag'),
                click: ($(this).attr('rel')) ? $('.'+$(this).attr('rel')) : undefined,
                on: false,
                checkbox: ($(this).data('checkbox')) ? $('.'+$(this).data('checkbox')) : undefined,
                ontext: $(this).data('ontext') || 'ON',
                offtext: $(this).data('offtext') || 'OFF'
            });

            return this;
        },
        
        toggleKnob : function (e, active) {
            if (active) 
                $(".faq-container").removeClass("hide");
            else 
                $(".faq-container").addClass("hide");
            this.toggleFaqSection();
        },
        
        toggleFaqSection: function() {
            this.options.parent.trigger('togglefaqpanel');
        },
    });

})();

/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Quiz = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/quiz.hbs'],
        el: '.quiz-section',
        events: {
            'toggle .toggle.quiz-toggle': 'toggleKnob',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}       
        },

        render: function() {
            this.renderTemplate(this.templateData());
            $('.quiz-toggle').toggles({
                clickable: !$(this).hasClass('noclick'),
                dragable: !$(this).hasClass('nodrag'),
                click: ($(this).attr('rel')) ? $('.'+$(this).attr('rel')) : undefined,
                on: false,
                checkbox: ($(this).data('checkbox')) ? $('.'+$(this).data('checkbox')) : undefined,
                ontext: $(this).data('ontext') || 'ON',
                offtext: $(this).data('offtext') || 'OFF'
            });

            return this;
        },
        
        toggleKnob : function (e, active) {
            if (active) 
                $(".quiz-container").removeClass("hide");
            else 
                $(".quiz-container").addClass("hide");
            this.toggleQuizSection();
        },
        
        toggleQuizSection: function() {
            this.options.parent.trigger('togglequizpanel');
        },
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
            
            this.editPanel = new SRM.Views.EditPanel();
            this.editPanel.render();

            this.faqPanel = new SRM.Views.FaqPanel({parent: this});
            this.faqPanel.render();

            this.quizPanel = new SRM.Views.QuizPanel({parent: this});
            this.quizPanel.render();
            
            this.tips = new SRM.Views.SidebarTips();
            this.tips.render();

            SRM.faqsContainer = new SRM.Views.Faqs({parent: this});
            SRM.faqsContainer.render();

            SRM.quizContainer = new SRM.Views.Quiz({parent: this});
            SRM.quizContainer.render();

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

    $(".scratch-option").click(function( ev){
        ev.preventDefault();
        document.location.href = '/#dashboard'
    });

    $(".details-option").click(function(ev){
        ev.preventDefault();
        $(this).toggleClass("hide");
        $(".starting-methods p").toggleClass("hide");
        $(".details").toggleClass("hide");
    });
       
});