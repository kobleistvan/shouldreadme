/*global SRM, Backbone*/

SRM.Routers = SRM.Routers || {};

(function () {
'use strict';

SRM.Routers.SrmRoutes = Backbone.Router.extend({
	routes:{
		''              : 'home',
        'signin'        : 'signin',
        'register'      : 'register',
        'getstarted'    : 'getstarted',
        'dashboard'     : 'dashboard',
        // '*other': 'defaultRoute'
	},


	initialize: function(){},
	
	getstarted: function(){
        $('#main').html('');
        SRM.getStartedBase = new SRM.Views.GetStarted({ });
        SRM.getStartedBase.render();
	}, 
	
	dashboard: function(){
        $('#main').html('');
        SRM.baseDashboard = new SRM.Views.Dashboard();
        SRM.baseDashboard.render();
	},
	
	signin : function(){
        $("#signInModal").modal('show');
	},
	
	register : function(){
        $("#registerModal").modal('show');
	},

	defaultRoute : function(){
        document.location.href="/";
	}

});

})();