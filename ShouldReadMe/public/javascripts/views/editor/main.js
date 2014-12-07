/*global SRM, Backbone, JST*/

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.Main = Backbone.View.extend({
        template: JST['public/javascripts/templates/editor/main.hbs'],
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
