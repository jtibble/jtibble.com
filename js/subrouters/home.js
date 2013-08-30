/**
 * Subrouter for Home
 */
define( ['text!templates/headers/headerHomeTemplate.html', 
		 'plugins/backbone/backbone.subroute'], 
	   function(headerHomeTemplate) {
		
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
				
				// Clear and re-render the header
				$('#header').empty().html( headerHomeTemplate );
				
				// Run the controller!
				require([ 'controllers/' + module ], function( controller ){
					if( !controller || !controller.run ){
						throw 'Malformed controller: missing \'run\' method!';
					}
					
					controller.run( '.main-content');
				});
			}
		});	
});
