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