$("document").ready(function($){
                var nav = $('.main-menu');
                
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 300) {
                        nav.addClass("navbar-fixed-top");
                    } else {
                        nav.removeClass("navbar-fixed-top");
                    }
                });
                $('#get-st').click(function(){
                   document.location.href= '/#get_started' 
                });
            });
            // /*global SRM, Backbone, JST*/

// SRM.Views = SRM.Views || {};

// (function () {
//     'use strict';

//      SRM.Views.Launch = Backbone.View.extend({
//         template: JST['public/javascripts/templates/launch/launch.hbs'],
//         el: '#main',
//         events: {
//             'click ".open-options' : 'toggleOptions'
//         },
      
//         initialize: function (options) {
//             this.options = options;
//         },

//         templateData: function() {
//             return {};
//         },

//         render: function () {
//             this.renderTemplate(this.templateData());
            

//             return this;
//         },
//         comingSoon : function(ev){
//             ev.preventDefault();
//         },
//         toggleSubmit : function(){
//             var $href = $('.submit-option.active').attr("href").substring(1);
//             $(".starting-methods p").toggleClass("hide");
//             $("."+$href).toggleClass("hide");
//             $(".open-options").toggleClass("hide");
//         },
//         toggleOptions : function(){
//             $('.open-options').toggleClass("hide");
//             $(".starting-methods p").toggleClass("hide");
//             $(".details").toggleClass("hide");
//         },
//     });

// })();