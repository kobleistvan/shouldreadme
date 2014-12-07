/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Dashboard = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/baseDashboard.hbs'],
        el: '#main',
        events: {     
            },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {};
        },

        render: function () {
            this.renderTemplate(this.templateData());

            return this;
        }

    });

})();
