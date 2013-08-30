define([], function(){
	var UTIL = {};
	
	
	UTIL.updateHeader = function( headerTemplate ){
		$('#header').empty().html( headerTemplate );
	};
	
	UTIL.changeMainContent = function( controller ){
		
		console.log( 'Changing main-content to controllers/'+controller );
		
		try{
			require([ 'controllers/' + controller ], function( c ){
				if( !c || !c.run ){
					throw 'Malformed controller: missing \'run\' method!';
				}
				
				c.run( '.main-content');
			});
		} catch(e){
			throw e.message;	
		}
	};
	
	return UTIL;
});