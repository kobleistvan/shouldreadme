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
