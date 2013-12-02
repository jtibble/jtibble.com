define(['text!templates/layouts/gifList.html',
	    'text!templates/layouts/gifListWrapper.html'], function(gifListTemplate, gifListWrapperTemplate){
	
	return {
		run: function( resultsContainer ){
			var list = [			
				{
					'destinationURL': 'img/graphics/lava.png',
					'imageURL': 'img/graphics/lava.png',
					'title': 'Lava GLSL pixel/vertex shader',
					'text': 'Built from an implementation of GLSL 2D simplex noise, the shader renders moving, flowing procedurally-generated lava.'
				},	
				{
					'destinationURL': 'http://www.youtube.com/watch?v=aRQ1kERO740',
					'imageURL': 'img/umich/fish.gif',
					'title': 'GLSL Skin Shader',
					'text': ''
				},	
				{
					'destinationURL': 'http://www.youtube.com/watch?v=06PcssicSjw',
					'imageURL': 'img/graphics/mayaTexturing.gif',
					'title': 'Maya Texturing and Lighting',
					'text': 'Using an HDR image for background and ambient light, each object was procedurally textured.'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=gZV20n8QwcM',
					'imageURL': 'img/graphics/blenderFirstTest.gif',
					'title': 'First Blender Animation',
					'text': ''
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=1uk8Ldmg-M8',
					'imageURL': 'img/graphics/blenderBulletPhysics.gif',
					'title': 'Blender 2.64 Physics Integration Test',
					'text': ''
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=azC6QjUZ2Lo',
					'imageURL': 'img/graphics/blenderShatter.gif',
					'title': 'Blender\'s "Cell Fracture" plugin',
					'text': ''
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=dWZDofaDH4Y',
					'imageURL': 'img/graphics/blenderBulletEmission.gif',
					'title': 'Blender Cycles Test Render',
					'text': 'Testing Blender\'s "Bullet" physics library and its Cycles renderer. Post-processing done in Blender'
				}		
			];
			
			var renderedTemplate = _.template( gifListTemplate, {'model': {'items':list}} );
			
			var renderedTemplate = _.template( gifListWrapperTemplate, {'model': {'gifList': renderedTemplate}});
			
            $( resultsContainer ).html( renderedTemplate );
		}		
	};
});