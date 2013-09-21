/**
 * Subrouter for Bitcoin
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
				
                UTIL.changeBackground( 'texturedGreySquares');
				UTIL.updateHeader( headerTemplate );
				UTIL.changeMainContent( module );
			}
		});	
});
