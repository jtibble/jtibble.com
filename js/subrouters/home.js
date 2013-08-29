/**
 * Subrouter for Home
 */
define( ['plugins/backbone/backbone.subroute'], function() {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'home');
			},
			runModule: function( module ){
				if( module !== 'home' ){
					module = 'home/' + module;
				}
				
				// Run the controller!
				require([ 'controllers/' + module ], function( controller ){
					if( !controller || !controller.run ){
						debugger;
						throw 'Malformed controller: missing \'run\' method!';
					}
					
					controller.run( '.main-content');
				});
                console.log('in home subrouter');
			}
		});	
});
