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
