/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.SidebarTips = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/tips.hbs'],
        el: '.tips-section',
        events: {
        },
        defaults : {
            content : 'Add icons and create your own fineprint!'
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            var content;
            if(this.options && this.options.content){
                content = this.options.content;
            }
            else{
                content = this.defaults.content;
            }
            
            return {content : content}       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        
    });

})();
