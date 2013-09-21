define(['text!templates/umich.html', 'text!templates/layouts/gifList.html'], function( template, gifTemplate ){
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
					'text': '"Thrash \'N\' Burn", an OpenGL 3D racing/combat game for Senior Design'
				},			
				{
					'destinationURL': '#graphics',
					'imageURL': 'img/umich/fish.gif',
					'text': 'Computer Graphics Projects'
				},			
				{
					'destinationURL': '#robotics',
					'imageURL': 'img/robotics/robots.gif',
					'text': 'APRIL Robotics Lab'
				},			
				{
					'destinationURL': 'http://www.youtube.com/watch?v=J7tMyShg9-A',
					'imageURL': 'img/umich/pursuitRevealShort.gif',
					'text': '"Pursuit", a live-action special-effects-demo chase scene'
				}
			];
			
			var renderedGIFTemplate = _.template( gifTemplate, {'model': {'items': list}} );
			
			var renderedTemplate = _.template( template, {'model': {'gifList': renderedGIFTemplate}} );
			
			$( this.options.el ).html( renderedTemplate );
		}
	});
									
	return view;
});