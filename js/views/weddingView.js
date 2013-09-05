define(['text!templates/wedding.html'], function( template ){
	var view = Backbone.View.extend({
		initialize: function(){
			
			this.content = [
				{
					'date': 	'September 5, 2013', 
				 	'title':	'Big Changes!',
				 	'text':		'I\'ve added two new sections, \'Wedding Information\' and \'Registry\'. They\'re empty for now, but soon will filled with info. There have been lots of changes behind-the-scenes, and hopefully a new layout and design are coming soon!'
				},
				{
					'date': 	'August 28, 2013', 
				 	'title':	'New "About Us" Section!',
				 	'text':		'I added an "About Us" section in the links at the top! Check it out.'
				},
				{
					'date': 	'August 29, 2013', 
				 	'title':	'Content with HTML',
				 	'text':		'Lorem Ipsum<br><img class="thumbnail" src="img/pictureOfUs.jpg"/>'
				},
				{
					'date': 	'August 28, 2013', 
				 	'title':	'Website Being Built!',
				 	'text':		'This is the first post with content in our new wedding website!'
				}
			];
			
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