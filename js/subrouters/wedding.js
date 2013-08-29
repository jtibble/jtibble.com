/**
 * Subrouter for Wedding
 */
define( ['plugins/backbone/backbone.subroute'], function() {
		
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
				
				// Run the controller!
				require([ 'controllers/' + module ], function( controller ){
					if( !controller || !controller.run ){
						throw 'Malformed controller: missing \'run\' method!';
					}
					
					controller.run( '.main-content');
				});
                
                console.log('in wedding subrouter');
			}
		});	
});
