define(['text!templates/wedding.html'], function( template ){
	var view = Backbone.View.extend({
		initialize: function(){
			this.render();
		},
		render: function(){
			if( !this.options.el ){
				throw 'No "el" element specified!';
			}
			
			console.log('rendering weddingView');
			$( this.options.el ).html( template );
		}
	});
									
	return view;
});