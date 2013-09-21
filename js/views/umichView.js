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
					'text': 'An OpenGL racing/combat game, built as part of my Senior Design class at U of M\'s College of Engineering. The game features a 3D model-loader (with textures), GLSL shaders, physics simulation, particle system, enemy AI, multiple weapons, menu-system, and original music by Evan Perry.'
				},			
				{
					'destinationURL': '#graphics',
					'imageURL': 'img/umich/fish.gif',
					'title': 'Computer Graphics Projects',
					'text': 'This from-scratch GLSL skin shader won the "Best Shader" competition in my Computer Graphics class<br><br>Click through to look at more Computer Graphics projects'
				},			
				{
					'destinationURL': '#robotics',
					'imageURL': 'img/robotics/robots.gif',
					'title': 'APRIL Robotics Laboratory',
					'text': 'I\'ve worked on many projects as part of the robotics team here on campus. Click through to check them out.'
				},			
				{
					'destinationURL': 'http://www.youtube.com/watch?v=J7tMyShg9-A',
					'imageURL': 'img/umich/pursuitRevealShort.gif',
					'title': '"Pursuit"',
					'text': 'Directed a special-effects action-scene as part of my Visual Effects class. Once filming was complete, I designed, rendered, and composited the Orb into several of the shots. Effects were built with After Effects and its Mocha tracker.<br><br>Click to see the video in its entirety.'
				}
			];
			
			var renderedGIFTemplate = _.template( gifListTemplate, {'model': {'items': list}} );
			
			var renderedTemplate = _.template( giftTemplateWrapperTemplate, {'model': {'gifList': renderedGIFTemplate}} );
			
			$( this.options.el ).html( renderedTemplate );
		}
	});
									
	return view;
});