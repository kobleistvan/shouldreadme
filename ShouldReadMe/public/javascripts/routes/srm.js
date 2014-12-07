/*global SRM, Backbone*/

SRM.Routers = SRM.Routers || {};

(function () {
'use strict';

SRM.Routers.SrmRoutes = Backbone.Router.extend({
	routes:{
		'':'home',
        'editor'     : 'createFineprint',
        'get_started': 'getStarted',
        'login'      : 'login',
        'register'   : 'register',
        'dashboard'  : 'baseDashboard',
        // '*other': 'defaultRoute'
	},

	initialize: function(){
	},
	
	createFineprint: function(){
        $('#main').html('');
        SRM.getStartedBase = new SRM.Views.GetStarted({ });
        SRM.getStartedBase.render();
	}, 
	
	getStarted: function(){
        $('#main').html('');
        SRM.mainView = new SRM.Views.Main({ });
        SRM.mainView.render();
	}, 
	
	baseDashboard: function(){
        $('#main').html('');
        console.log("Loading dashboard..");
       
       SRM.baseDashboard = new SRM.Views.Dashboard();
    //   console.log(SRM.baseDashboard);
       
       SRM.baseDashboard.render();
	},
	
	login : function(){
        $("#logInModal").modal('show');
	},
	
	register : function(){
        $("#signUpModal").modal('show');
	},
	
	defaultRoute : function(){
        document.location.href="/";
	}

});

})();