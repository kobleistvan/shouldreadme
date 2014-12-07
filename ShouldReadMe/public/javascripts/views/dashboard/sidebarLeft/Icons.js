/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarIcons = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/icons.hbs'],
        el: '.icons-subsection',
        events: {
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            this.iconsCollection = new SRM.Collections.SidebarIcons();
            this.iconsCollection.fetch({async : 'true'});
            
            
            return {}
        },

        render: function () {
            this.renderTemplate(this.templateData());

            return this;
        }
        
    });

})();
