/*global SRM, Backbone*/

SRM.Collections = SRM.Collections || {};

(function () {
    'use strict';

    SRM.Collections.SidebarIcons = Backbone.Collection.extend({
        model: SRM.Models.Icon,
        url: '/api/icon',
        
        parse: function(response, options)  {
            return response.icons;
        },
    });
})();