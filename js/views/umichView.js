define(['text!templates/layouts/gifListWrapper.html', 
		'text!templates/layouts/gifList.html'], 
	   function( giftTemplateWrapperTemplate, 
				 gifListTemplate ){
		   
	var view = Backbone.View.extend({
		initialize: function(){
			this.render();
		},
		render: function(){
			if( !this.options.el ){
				throw 'No "el" element specified!';
			}
			
			var list = [			
				{
					'destinationURL': '#umich/TNB',
					'imageURL': 'img/umich/ThrashNBurnSmall.png',
					'title': 'Thrash N Burn',
					'text': '"Thrash \'N\' Burn", an OpenGL 3D racing/combat game for Senior Design'
				},			
				{
					'destinationURL': '#graphics',
					'imageURL': 'img/umich/fish.gif',
					'title': '',
					'text': 'Computer Graphics Projects'
				},			
				{
					'destinationURL': '#robotics',
					'imageURL': 'img/robotics/robots.gif',
					'title': '',
					'text': 'APRIL Robotics Lab'
				},			
				{
					'destinationURL': 'http://www.youtube.com/watch?v=J7tMyShg9-A',
					'imageURL': 'img/umich/pursuitRevealShort.gif',
					'title': '',
					'text': '"Pursuit", a live-action special-effects-demo chase scene'
				}
			];
			
			var renderedGIFTemplate = _.template( gifListTemplate, {'model': {'items': list}} );
			
			var renderedTemplate = _.template( giftTemplateWrapperTemplate, {'model': {'gifList': renderedGIFTemplate}} );
			
			$( this.options.el ).html( renderedTemplate );
		}
	});
									
	return view;
});