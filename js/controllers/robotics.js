define(['text!templates/layouts/gifList.html',
	    'text!templates/layouts/gifListWrapper.html'], function(gifListTemplate, gifListWrapperTemplate){
	
	return {
		run: function( resultsContainer ){
			
			
			var list = [			
				{
					'destinationURL': 'http://www.youtube.com/watch?v=MtgnZGaljbg',
					'imageURL': 'img/robotics/robots.gif',
					'text': 'MAGIC 2010 Autonomous Robotics Competition'
				},	
				{
					'destinationURL': 'http://www.youtube.com/watch?v=AcvheysmuvE',
					'imageURL': 'img/robotics/peopleTracker.gif',
					'text': 'LIDAR-based Person-Tracker'
				},	
				{
					'destinationURL': 'http://www.youtube.com/watch?v=0DDX7VSyCq0',
					'imageURL': 'img/robotics/odometry.gif',
					'text': 'Building a LIDAR map from pure odometry, collected on each wheel and integrated'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=P3-UXN2_yto',
					'imageURL': 'img/robotics/competition.gif',
					'text': 'Robotics class-competition, to follow the line using the tag-tracking data provided by a ceiling-mounted camera'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=TyW1BPpHy18',
					'imageURL': 'img/robotics/bicycle.gif',
					'text': '"Bicycle" driving algorithm simulation'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=uY96ye92m2s',
					'imageURL': 'img/robotics/robotArm.gif',
					'text': 'Arm uses Jacobian of joint angles to move, overhead camera to identify targets'
				}				
			];
			
			var renderedTemplate = _.template( gifListTemplate, {'model': {'items':list}} );
			
			var renderedTemplate = _.template( gifListWrapperTemplate, {'model': {'gifList': renderedTemplate}});
			
            $( resultsContainer ).html( renderedTemplate );
		}		
	};
});