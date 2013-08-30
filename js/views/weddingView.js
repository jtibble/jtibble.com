define(['text!templates/wedding.html'], function( template ){
	var view = Backbone.View.extend({
		initialize: function(){
			
			this.content = [
				{'text': 'Lorem Ipsum1'},
				{'text': 'Lorem Ipsum2'},
				{'text': 'Lorem Ipsum3'},
				{'text': 'Lorem Ipsum4'},
				{'text': 'Lorem Ipsum5'},
			]
			this.render();
		},
		render: function(){
			if( !this.options.el ){
				throw 'No "el" element specified!';
			}
			
			var compiledTemplate = _.template( template, {model: this.content} );	
				
			$( this.options.el ).html( compiledTemplate );
		}
	});
									
	return view;
});