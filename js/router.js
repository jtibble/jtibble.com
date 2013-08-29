define(	'router', ['jquery', 'backbone', 'underscore'], function() {
		
        window.Subrouters = [];
	
		// Create a new Backbone router object
		var Router = Backbone.Router.extend({
		
			// Routes evaluated most-to-least specific, with the last route becoming default
			// NOTE: Only edit this if your screen (or set of screens) does not have an existing subrouter!
			routes : {
				'home': 	'homeSubrouter',
				'wedding':	'weddingSubrouter',
			
				'*actions' : 	'unknownSubroute'
			},
			
			unknownSubroute : function( route ){
                window.Router.navigate('home', {trigger: true});
			},
			
			homeSubrouter : function(subroute) {
				this.loadSubrouter( 'home' );
			},
			weddingSubrouter : function(subroute) {
				this.loadSubrouter( 'wedding' );
			},
			
			loadSubrouter : function( subrouterName ){
                require([ 'subrouters/' + subrouterName ], function( subrouter ){
                    window.Subrouters[ subrouterName ] = new subrouter( subrouterName );
                });
			}
		});
	
		return {
			initialize : function() {
				window.Router = new Router();
			}
		};
	
	}
);
