/**
 * Subrouter for Home
 */
define( ['plugins/backbone/backbone.subroute'], function() {
		
		return Backbone.SubRoute.extend({
			routes:{
				'' :		'emptyRoute',
				'*actions':	'runModule',
			},
			emptyRoute: function(){
				this.runModule( 'home');
			},
			runModule: function( module ){
				if( module !== 'home' ){
					module = 'home/' + module;
				}
				
				//var layout = GECA.Router.LayoutEnforcer.getDefaultLayout();
				
				//GECA.Router.MainContentWrapper.changeMainContent( module, {}, layout );
                
                console.log('in home subrouter');
			}
		});	
});
