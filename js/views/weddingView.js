define(['text!templates/wedding/wedding.html',
		
		'text!templates/wedding/story.html',
	    'text!templates/wedding/ceremony.html',
	    'text!templates/wedding/party.html' ], function( template, storyTemplate, ceremonyTemplate, partyTemplate ){
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
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
				$('#weddingContainer').html( storyTemplate );
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
			});	
		},
		showCeremony: function(){
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
				$('#weddingContainer').html( ceremonyTemplate );
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
			});
		},
		showParty: function(){
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
				$('#weddingContainer').html( partyTemplate );
				
				$('#partyCarousel').carousel({
					'interval': false	
				});
				
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
				
			});
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