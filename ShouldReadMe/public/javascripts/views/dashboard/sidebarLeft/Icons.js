/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarIcons = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/icons.hbs'],
        el: '.icons-subsection',
        events: {
            'mouseenter .default-icon' : 'getTip',
            'mouseleave .default-icon' : 'removeTip',
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
            var icon = SRM.iconsCollection.get($(ev.currentTarget).attr('id'));

            this.tips = new SRM.Views.SidebarTips({'content' : icon.get('tip_description')});
            this.tips.render();
            
        },
        removeTip : function (ev){
            this.tips = new SRM.Views.SidebarTips();
            this.tips.render();
        }
    });

})();
