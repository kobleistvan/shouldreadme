/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.EditPanel = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/editPanel.hbs'],
        el: '.edit-panel',
        events: {
        },
        icons : [],
        defaults : {
            icons : [],
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            return {}       
        },

        render: function () {
            var _this = this;
            this.renderTemplate(this.templateData());
            
            this.icons = ( this.options && this.options.icons) ? this.options.icons : this.defaults.icons;
            if(this.icons.length){
                _this.icons.forEach(function (icon){
                    _this.$el.find('.preview-container').append(new SRM.Views.PrintItem({id : icon.id}).render().el);
                });
            }
            
            return this;
        },
    });

})();
