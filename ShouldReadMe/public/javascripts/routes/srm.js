/*global SRM, Backbone*/

SRM.Routers = SRM.Routers || {};

(function () {
'use strict';

SRM.Routers.SrmRoutes = Backbone.Router.extend({
	routes:{
		'':'bome',
        'editor': 'createFineprint',
        'get_started': 'getStarted',
        'login' : 'login',
        'register' : 'register',
        // '*other': 'defaultRoute'
	},

	initialize: function(){
        console.log("adeiejw");
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