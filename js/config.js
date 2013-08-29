console.log('Running config.js');

require.config({
    baseUrl: 'js',
    paths:{
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'bootstrap': 'libs/bootstrap/js/bootstrap',
        'backbone': 'libs/backbone/backbone',
        
		'controllers': 'controllers',
		'views': 'views',
		'models': 'models',
        'templates': '../templates'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
    },
	waitSeconds: 10
         
});


//'jquery', 'underscore', 'bootstrap', 'backbone'
require(['jquery', 'underscore', 'backbone', 'bootstrap'], function($, _, Backbone) {
    
    _.templateSettings = {
        "evaluate" : /{{([\s\S]+?)}}/g,
        "interpolate" : /{{=([\s\S]+?)}}/g,
        "escape" : /{{--([\s\S]+?)}}/g
    };
	
    console.log('Initializing router');
	require(['router'], function(router){
	   router.initialize(); 
		Backbone.history.start();
	});
        
});