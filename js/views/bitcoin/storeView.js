define(['text!templates/bitcoin/store.html'], function( template ){
	var view = Backbone.View.extend({
		initialize: function(){
			this.render();
		},
		render: function(){
			if( !this.options.el ){
				throw 'No "el" element specified!';
			}
			
			var productList = [
				{
					'name': 'Package 1',
					'description': 'Includes 1 digital Bitcoin and 15 minutes of in-person instruction',
					'price': '$150.00'
				},
				{
					'name': 'Package 1',
					'description': 'Includes 1 digital Bitcoin and 15 minutes of in-person instruction',
					'price': '$150.00'
				},
				{
					'name': 'Package 1',
					'description': 'Includes 1 digital Bitcoin and 15 minutes of in-person instruction',
					'price': '$150.00'
				}
			];
			
			var renderedTemplate = _.template( template, {model: {'productList': productList}} );
			
			$( this.options.el ).html( renderedTemplate );
		}
	});
									
	return view;
});