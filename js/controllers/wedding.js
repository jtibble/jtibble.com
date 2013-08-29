define(['views/weddingView'], function(WeddingView){
	
	return {
		run: function( container ){
			var weddingView = new WeddingView( {el: container} );
		}		
	};
});