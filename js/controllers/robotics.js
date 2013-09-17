define(['text!templates/robotics.html'], function(template){
	
	return {
		run: function( resultsContainer ){
            $( resultsContainer ).html( template );
		}		
	};
});