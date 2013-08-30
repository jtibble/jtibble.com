/**
 * Subrouter for Wedding
 */
define( ['text!templates/headers/headerUMichTemplate.html', 'plugins/backbone/backbone.subroute'], function(headerTemplate) {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule'
			},
			emptyRoute: function(){
				this.runModule( 'umich');
			},
			runModule: function( module ){
				if( module !== 'umich' ){
					module = 'umich/' + module;
				}
				
				UTIL.updateHeader( headerTemplate );
				UTIL.changeMainContent( module );
			}
		});	
});
