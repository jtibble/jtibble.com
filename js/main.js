define(['text!templates/article.html', 'require', 'jquery', 'underscore', 'backbone' ], function(articleTemplate){
    var main = {};
    
    main.init = function(){
        console.log('Main is running');
        
        console.log('Initializing router');
        require(['router'], function(router){
           router.initialize(); 
            Backbone.history.start();
        });
        
        console.log('Loading content');
        var content = main.loadContent();
        
        console.log('Rendering content');
        main.renderContent( content );
    };
    
    // Loads content from JSON into memory
    main.loadContent = function(){
        
        //todo: load content from JSON file
        var content = {
            'articles': [
                {
                    'title': 'We\'re getting married!',
                    'text': 'Thanks for visiting our wedding site! We\'re glad to have you be a part of our celebration.'
                }
            ]
        };
        
        return content;
    }
    
    // Loads underscore template and renders content into DOM
    main.renderContent = function( content ){
        _.each( content.articles, function( article ){
            var renderedTemplate = _.template( articleTemplate, article );
            $('#articleList').append( renderedTemplate );
        });
    }
        
    return main;
});