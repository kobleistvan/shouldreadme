/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Faqs = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/faqs.hbs'],
        el: '.faq-section',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            SRM.faqCollection = new SRM.Collections.FaqCollection();
            SRM.faqCollection.fetch({async: false}); 

            return {faqs : SRM.faqCollection.toJSON()}       
        },

        render: function() {
            this.renderTemplate(this.templateData());
            return this;
        }
    });

})();
