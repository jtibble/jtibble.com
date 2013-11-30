define(['text!templates/wedding/wedding.html'], function( template ){
	var view = Backbone.View.extend({
		events: {
			'click #menuItemBoxStory': 		'showStory',
			'click #menuItemBoxCeremony': 	'showCeremony',
			'click #menuItemBoxParty': 		'showParty',
			'click #menuItemBoxRegistry': 	'showRegistry',
			'click #menuItemBoxInfo': 		'showInfo',
			'click #menuItemBoxPhotos': 	'showPhotos',
		},
		initialize: function(){
			this.render();
		},
		render: function(){
			if( !this.options.el ){
				throw 'No "el" element specified!';
			}
			
			$( this.options.el ).html( template );
		},
		showStory: function(){
			console.log('show story');	
		},
		showCeremony: function(){
			console.log('show ceremony');	
		},
		showParty: function(){
			console.log('show party');	
		},
		showRegistry: function(){
			console.log('show registry');	
		},
		showInfo: function(){
			console.log('show info');	
		},
		showPhotos: function(){
			console.log('show photos');	
		}
	});
									
	return view;
});