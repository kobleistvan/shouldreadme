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
