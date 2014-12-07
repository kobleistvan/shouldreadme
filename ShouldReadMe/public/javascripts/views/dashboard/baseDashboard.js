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
            
            SRM.iconsSidebar = new SRM.Views.SidebarIcons({parent : this});
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
