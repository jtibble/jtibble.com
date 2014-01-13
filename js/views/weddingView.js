define([ 'text!templates/wedding/wedding.html',
		
		 'text!templates/wedding/story.html',
	     'text!templates/wedding/ceremony.html',
	     'text!templates/wedding/party.html',
	     'text!templates/wedding/registry.html',
	     'text!templates/wedding/info.html',
         'text!templates/wedding/photos.html' ], function( template, 
                                                         storyTemplate,
                                                         ceremonyTemplate, 
                                                         partyTemplate,
                                                         registryTemplate,
                                                         infoTemplate,
                                                         photosTemplate){
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
			this.changeWeddingContentTemplate( storyTemplate );
		},
		showCeremony: function(){
			this.changeWeddingContentTemplate( ceremonyTemplate );
		},
		showParty: function(){
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
                
                var weddingParty = [
                    {
                        title:      'bryan cable',
                        subtitle:   'best man, college friend',
                        url:        'bryan.jpg'
                    },
                    {
                        title:      'amy wensley',
                        subtitle:   'maid of honor, bride\'s sister',
                        url:        'amy.jpg'
                    },
                    {
                        title:      'mark bishop',
                        subtitle:   'college friend',
                        url:        'mark.jpg'
                    },
                    {
                        title:      'sarah tibble',
                        subtitle:   'groom\'s sister',
                        url:        'sarah.jpg'
                    },
                    {
                        title:      'jim dinardo',
                        subtitle:   'college friend',
                        url:        'jim.jpg'
                    },
                    {
                        title:      'laura goben',
                        subtitle:   'college friend',
                        url:        'laura.jpg'
                    },
                    {
                        title:      'justin gibson',
                        subtitle:   'college friend',
                        url:        'justin.jpg'
                    },
                    {
                        title:      'analissa forsgren',
                        subtitle:   'college friend',
                        url:        'analissa.jpg'
                    }                    
                ]
                
                var renderedTemplate = _.template( partyTemplate, {model: weddingParty});
                
				$('#weddingContainer').html( renderedTemplate );
				
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
			this.changeWeddingContentTemplate( registryTemplate );	
		},
		showInfo: function(){
			this.changeWeddingContentTemplate( infoTemplate );	
		},
		showPhotos: function(){
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
				$('#weddingContainer').html( photosTemplate );
				
				$('#photosCarousel').carousel({
					'interval': false	
				});
				
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
				
			});
		},
        
        changeWeddingContentTemplate: function( template ){
            
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
            var animationTime = 500;
				
			$('#weddingContainer').animate( setting, animationTime, function(){
				$('#weddingContainer').html( template );
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
			});
		},
		showInfo: function(){
			var setting = {
				opacity: 0.0,
				height: 'toggle'
			};
			
			$('#weddingContainer').animate( setting, 500, function(){
				$('#weddingContainer').html( infoTemplate );
				$('#weddingContainer').animate( {
					opacity: 1.0,
					height: 'toggle'
				});
			});	
		}
	});
									
	return view;
});