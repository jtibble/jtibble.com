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
				this.runModule( 'graphics');
			},
			runModule: function( module ){
				if( module !== 'graphics' ){
					module = 'graphics/' + module;
				}
				
                UTIL.changeBackground( 'texturedGreySquares');
				UTIL.changeMainContent( module );
			}
		});	
});
