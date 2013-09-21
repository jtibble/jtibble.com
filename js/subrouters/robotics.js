/**
 * Subrouter for Robotics
 */
define( ['plugins/backbone/backbone.subroute'], function() {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'robotics');
			},
			runModule: function( module ){
				if( module !== 'robotics' ){
					module = 'robotics/' + module;
				}
				
                UTIL.changeBackground( 'texturedGreySquares');
				UTIL.changeMainContent( module );
			}
		});	
});
