/*global SRM, Backbone*/

SRM.Collections = SRM.Collections || {};

(function () {
    'use strict';

    SRM.Collections.FaqCollection = Backbone.Collection.extend({
        model: SRM.Models.Faq,
        url: '/faq',
        
        parse: function(response, options)  {
            response.forEach(function (value, index) {
                // value.file_name = "/images/" + value.file_name;
            });
            return response;
        },
    });
})();