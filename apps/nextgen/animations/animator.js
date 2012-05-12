SC.mixin(Nextgen,{
	
	/*
		@param: 'string'	
	*/
	
	
	animations: function(viewName, animationType) {
		console.log("animations viewName = ", viewName );
		console.log("animations animationType = ", animationType );
		var someView = SC.View.views[viewName];		
		var someValue = Nextgen.viewsController.get('animateSize'); //get value from controller
		var leftToCenter = someValue / 2 - 224; //calculate centerX
		var leftOut = leftToCenter * -2;
		var	rightToCenter = leftOut / -2;
		var rightOut = 2000;
		
		switch ( animationType ) {
			
			case 'slideLeftCenter': 
				console.log("slideLeftCenter");
				someView.animate('left', leftToCenter, { duration: 0.4,timing:'ease-in-out' });
				break;	
			case 'slideLeftOut':
				console.log("slideLeftOut");
				someView.animate('left', leftOut, { duration: 0.3,timing:'ease-in-out' });
				break;	
			case 'slideRightCenter':
				console.log("slideRightCenter");
				someView.animate('left', rightToCenter, { duration: 0.4,timing:'ease-in-out' });
				break;	
			case 'slideRightOut':
				console.log("slideRightOut");
				someView.animate('left', rightOut, { duration: 0.3,timing:'ease-in-out' });
		}
		
	},
	
})