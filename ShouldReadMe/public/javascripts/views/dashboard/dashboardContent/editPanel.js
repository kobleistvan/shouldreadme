/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.EditPanel = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/editPanel.hbs'],
        el: '.preview-section',
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
