define(['text!templates/graphics.html'], function(template){
	
	return {
		run: function( resultsContainer ){
            $( resultsContainer ).html( template );
		}		
	};
});