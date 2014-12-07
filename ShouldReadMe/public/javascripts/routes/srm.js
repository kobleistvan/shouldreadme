/*global SRM, Backbone*/

SRM.Routers = SRM.Routers || {};

(function () {
'use strict';

SRM.Routers.SrmRoutes = Backbone.Router.extend({
	routes:{
		'':'launch',
        'editor': 'getStarted',
        '*other': 'defaultRoute'
	},

	initialize: function(){
        console.log("adeiejw");
	},

	getStarted: function(){
	    $('#main').html('');
        SRM.mainView = new SRM.Views.Main({ });
        SRM.mainView.render();
	}, 
	
	defaultRoute : function(){
	    document.location.href="/";
	}

});

})();