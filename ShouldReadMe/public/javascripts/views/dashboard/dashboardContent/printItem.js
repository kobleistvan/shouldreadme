/*global SRM, Backbone, JST */

SRM.Views = SRM.Views || {};

(function () {
    'use strict';

    SRM.Views.PrintItem = Backbone.View.extend({
        template: JST['public/javascripts/templates/dashboard/editPanelComponents/printItem.hbs'],
        // el: '.preview-container',
        events: {
             "click .icon-colors li" : 'setBackground',
        },

        initialize: function (options) {
            this.options = options;
        },

        templateData: function() {
            var selectedIcon = SRM.iconsCollection.get(this.options.id);

            return {
                icon_id : selectedIcon.get('id'),
                file_name : selectedIcon.get('file_name')
            }       
        },

        render: function () {
            this.renderTemplate(this.templateData());
            return this;
        },
        setBackground : function(ev){
            var $color = $(ev.currentTarget).attr('id');
            $(ev.currentTarget).closest(".preview-item").find(".preview-icon-border").css("background-color",$color);
        }
    });

})();
