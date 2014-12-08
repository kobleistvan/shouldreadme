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
