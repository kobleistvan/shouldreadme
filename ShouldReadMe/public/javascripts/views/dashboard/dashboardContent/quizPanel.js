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
