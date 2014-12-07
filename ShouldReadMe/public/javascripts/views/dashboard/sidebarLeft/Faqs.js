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
