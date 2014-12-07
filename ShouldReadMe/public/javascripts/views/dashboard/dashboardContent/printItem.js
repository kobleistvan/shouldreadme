/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.PrintItem = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/printItem.hbs'],
        el: '.preview-container',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
    });

})();
