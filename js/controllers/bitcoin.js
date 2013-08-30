define(['views/bitcoinView'], function(BitcoinView){
	
	return {
		run: function( container ){
			var weddingView = new BitcoinView( {el: container} );
		}		
	};
});