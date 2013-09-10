/**
 * Subrouter for Wedding
 */
define( ['text!templates/headers/headerWeddingTemplate.html', 
		 'plugins/backbone/backbone.subroute'], 
	   function(headerTemplate) {
		
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
				
                $('body').removeClass();
				UTIL.updateHeader( headerTemplate );
				UTIL.changeMainContent( module );
			}
		});	
});
