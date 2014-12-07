/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarIcons = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/icons.hbs'],
        el: '.icons-subsection',
        events: {
            'mouseenter .default-icon' : 'getTip',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            SRM.iconsCollection = new SRM.Collections.SidebarIcons();
            SRM.iconsCollection.fetch({async: false}); 

            return {sidebarIcons : SRM.iconsCollection.toJSON()}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
        getTip : function (ev){
            var id = $(ev.currentTarget).attr('id');
            
           
        }
    });

})();
