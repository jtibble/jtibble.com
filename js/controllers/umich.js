define(['views/umichView'], function(UmichView){
	
	return {
		run: function( container ){
			var weddingView = new UmichView( {el: container} );
		}		
	};
});