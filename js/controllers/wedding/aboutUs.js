define(['views/wedding/aboutUsView'], function(AboutUsView){
	
	return {
		run: function( container ){
			var aboutUsView = new AboutUsView( {el: container} );
		}		
	};
});