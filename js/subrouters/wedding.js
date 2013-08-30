/**
 * Subrouter for Wedding
 */
define( ['text!templates/headers/headerWeddingTemplate.html', 'plugins/backbone/backbone.subroute'], function(headerWeddingTemplate) {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'wedding');
			},
			runModule: function( module ){
				if( module !== 'wedding' ){
					module = 'wedding/' + module;
				}
				
				
				// Clear and re-render the header
				$('#header').empty().html( headerWeddingTemplate );
				
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
