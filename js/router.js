define(	'router', ['jquery', 'backbone', 'underscore'], function() {
		
        UTIL.Subrouters = [];
	
		// Create a new Backbone router object
		var Router = Backbone.Router.extend({
		
			// Routes evaluated most-to-least specific, with the last route becoming default
			// NOTE: Only edit this if your screen (or set of screens) does not have an existing subrouter!
			routes : {
				'home': 	'homeSubrouter',
				'wedding':	'weddingSubrouter',
				'bitcoin':	'bitcoinSubrouter',
				'umich':	'umichSubrouter',
			
				'*actions' : 	'unknownSubroute'
			},
			
			unknownSubroute : function( route ){
				console.log('Unknown route \'' + route + '\'');
                window.Router.navigate('home', {trigger: true});
			},
			
			homeSubrouter : function(subroute) {
				this.loadSubrouter( 'home' );
			},
			weddingSubrouter : function(subroute) {
				this.loadSubrouter( 'wedding' );
			},
			bitcoinSubrouter : function(subroute) {
				this.loadSubrouter( 'bitcoin' );
			},
			umichSubrouter : function(subroute) {
				this.loadSubrouter( 'umich' );
			},
			
			loadSubrouter : function( subrouterName ){
				if( UTIL.Subrouters[ subrouterName ] ){
					return;
				}
				
                require([ 'subrouters/' + subrouterName ], function( subrouter ){
                    UTIL.Subrouters[ subrouterName ] = new subrouter( subrouterName );
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
