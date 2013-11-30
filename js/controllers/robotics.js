define(['text!templates/layouts/gifList.html',
	    'text!templates/layouts/gifListWrapper.html'], function(gifListTemplate, gifListWrapperTemplate){
	
	return {
		run: function( resultsContainer ){
			
			
			var list = [			
				{
					'destinationURL': 'http://www.youtube.com/watch?v=MtgnZGaljbg',
					'imageURL': 'img/robotics/robots.gif',
					'title': 'MAGIC 2010 Autonomous Robotics Competition',
					'text': 'The University of Michigan\'s April Robotics Laboratory participated in the MAGIC 2010 competition, passing through all qualification rounds, and finally winning the final round of competition in Australia. I am proud to have worked in the robotics lab with Dr. Edwin Olson and my fellow students, building and testing the hardware and software for this competition. This video shows our fleet of robots in-action for the judges\' site visit.'
				},	
				{
					'destinationURL': 'http://youtu.be/AcvheysmuvE?t=13m5s',
					'imageURL': 'img/robotics/peopleTracker.gif',
					'title': 'LIDAR-based Person-Tracker',
					'text': 'I built a system to allow snooping robots to track "mobile objects of interest", even as they were occluded by other people or static objects. The system estimates the speed of each tracked person to attempt to re-aquire them once they re-emerge from behind the obstacle.'
				},	
				{
					'destinationURL': 'http://www.youtube.com/watch?v=0DDX7VSyCq0',
					'imageURL': 'img/robotics/odometry.gif',
					'title': 'Odometry Mapping',
					'text': 'Using only the encoders built into each the robots\' four wheels, I built a system to more accurately estimate the position and motion of the robot as it completed a circuit of our building. This map could be used as a SLAM prior to dramatically improve the quality of generated maps. In this video, the robot travels roughly 60 meters.'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=TyW1BPpHy18',
					'imageURL': 'img/robotics/bicycle.gif',
					'title': '"Bicycle" Driving Algorithm',
					'text': 'As part of my robotics class, my team and I developed this bicycle driving algorithm to plan the most efficient route along a path given a look-ahead constraint.'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=P3-UXN2_yto',
					'imageURL': 'img/robotics/competition.gif',
					'title': 'Robotics Class Competition',
					'text': 'Used the above bicycle driving algorithm to follow the path. Odometry was provided by ceiling-mounted camera and tag-recognition software.'
				},
				{
					'destinationURL': 'http://www.youtube.com/watch?v=uY96ye92m2s',
					'imageURL': 'img/robotics/robotArm.gif',
					'title': 'Computer Vision and 3D Motion Planning',
					'text': 'An overhead camera looking down at the robotic arm detects the yellow balls (via HSV threshholding and image segmentation). The location of each ball is projected into arm-space through a camera calibration (using the white marks). The location of the robot\'s end-effector in 3D space is calculated as a function of the joint angles and lengths of each arm-segment. Our algorithm generates kinematically-reachable random points around the robot, and selects a path from point-to-point (Rapidly Exploring Randomized Tree, or RRT algorithm) that brings the end-effector towards the target (decending using a Jacobian and numerical integration). Once the arm has reached the target, the grippers close, and the robot plots a new route to the bowl to deliver the ball, and the process repeats.'
				}				
			];
			
			var renderedTemplate = _.template( gifListTemplate, {'model': {'items':list}} );
			
			var renderedTemplate = _.template( gifListWrapperTemplate, {'model': {'gifList': renderedTemplate}});
			
            $( resultsContainer ).html( renderedTemplate );
		}		
	};
});