console.log('Running config.js');

require.config({
    baseUrl: 'js',
    paths:{
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'bootstrap': 'libs/bootstrap/js/bootstrap',
        'backbone': 'libs/backbone/backbone',
        
        'templates': '../templates'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
    }
         
});


//'jquery', 'underscore', 'bootstrap', 'backbone'
require(['jquery', 'underscore', 'backbone', 'bootstrap'], function($, _, Backbone) {
    
    _.templateSettings = {
        "evaluate" : /{{([\s\S]+?)}}/g,
        "interpolate" : /{{=([\s\S]+?)}}/g,
        "escape" : /{{--([\s\S]+?)}}/g
    };
    
    require( ['main'], function(main){
        main.init();
    });
});