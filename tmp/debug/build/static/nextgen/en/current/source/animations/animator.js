SC.mixin(Nextgen,{
	
	/*
		@param: 'string'	
	*/
	
	
	animations: function(viewName, animationType) {
		var centerLayout = {centerX: 0, centerY: 0, height: 248, width: 448 };
		var calculatedLayout = {left: $(document).width()  / 2 - 224, centerY: 0, height: 248, width: 448 };
		console.log("calculatedLayout = ",calculatedLayout);
		console.log("centerLayout = ",centerLayout);
		
		console.log("animations viewName = ", viewName );
		console.log("animations animationType = ", animationType );
		var someView = SC.View.views[viewName];		
		var someValue = $(document).width() ; //get value from controller
		var leftToCenter = someValue / 2 - 224; //calculate centerX
		var leftOut = leftToCenter * -2;
		var	rightToCenter = leftOut / -2;
		var rightOut = 2000;
		

		switch ( animationType ) {
			
			case 'slideLeftCenter': 
				console.log("slideLeftCenter");
				someView.animate('left', leftToCenter, { duration: 0.4,timing:'ease-in-out' },function(){
					someView.set('layout',centerLayout);
				});
				
				break;	
			case 'slideLeftOut':
				console.log("slideLeftOut");
				someView.set('layout',calculatedLayout);
				this.invokeLater('_doStartAnimation',100);
				this._doStartAnimation = function() {	someView.animate('left', leftOut, { duration: 0.3,timing:'ease-in-out' });}
				break;	
			case 'slideRightCenter':
				console.log("slideRightCenter");
				someView.animate('left', rightToCenter, { duration: 0.4,timing:'ease-in-out' },function(){
					someView.set('layout',centerLayout);
				});
				break;	
			case 'slideRightOut':
				console.log("slideRightOut");
				someView.set('layout',calculatedLayout);
				this.invokeLater('_doStartAnimation',100);
				this._doStartAnimation = function() {	someView.animate('left', rightOut, { duration: 0.3,timing:'ease-in-out' });}
		}
		
	},
	
	cleanupViews: function() {
		var v1 = SC.View.views['MenuBaseOne'];	 
		var v2 = SC.View.views['MenuBaseTwo'];
		var v3 = SC.View.views['MenuBaseThree'];
		var v4 = SC.View.views['MenuBaseFour'];
		
		this._defaultView = { left: 2000, centerY: 0, height: 248, width: 448 };
		this._centerLayout = {centerX: 0, centerY: 0, height: 248, width: 448 };
		
		v1.set('layout', this._centerLayout);
		v2.set('layout', this._defaultView);
		v3.set('layout', this._defaultView);
		v4.set('layout', this._defaultView);		
		
	}

}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');