/*global SRM, Backbone*/

SRM.Models = SRM.Models || {};

(function () {
    'use strict';

    SRM.Models.Icon = Backbone.Model.extend({

        url: '/api/icon',

        initialize: function() {
        },

        defaults: {
            title : '',
            tip_description: '',
            tooltip: '',
            file_name: '',
            type : '',
            status : 'none'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
