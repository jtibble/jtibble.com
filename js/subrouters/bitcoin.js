/**
 * Subrouter for Wedding
 */
define( ['text!templates/headers/headerBitcoinTemplate.html', 'plugins/backbone/backbone.subroute'], function(headerTemplate) {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'bitcoin');
			},
			runModule: function( module ){
				if( module !== 'bitcoin' ){
					module = 'bitcoin/' + module;
				}
				
				
				// Clear and re-render the header
				$('#header').empty().html( headerTemplate );
				
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
