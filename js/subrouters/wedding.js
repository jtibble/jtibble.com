/**
 * Subrouter for Wedding
 */
define( ['plugins/backbone/backbone.subroute'], 
	   function() {
		
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
				
                UTIL.changeBackground( 'weddingGradient');
				UTIL.updateHeader( '' );
				UTIL.changeMainContent( module );
			}
		});	
});
