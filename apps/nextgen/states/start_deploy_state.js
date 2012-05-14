Nextgen.StartDeployState = SC.State.extend({ 
	
	enterState: function() {
		console.log("StartDeployState");
		var currentWidth = $(document).width();
		console.log("Current Width " + currentWidth);
		Nextgen.viewsController.set('animateSize', currentWidth);
		Nextgen.viewsController.set('isEnabled', YES);
		
		this.set('baseView', Nextgen.getPath('mainPage.mainPane'));
		this.set('deployMessagePage', COS.getPath('deployMessagePage.interfaceView'));
		this.invokeLater('appendRepositoryURLMessage', 100);
	  
	  this._deployMessagePage = SC.View.views['MenuBaseOne'];
		this._deployMessagePage.animate('opacity', 0.0, { duration: 0.1,timing:'ease-in-out' });
	
	},
	

	appendRepositoryURLMessage: function() {
		this.get('baseView').appendChild(this.get('deployMessagePage'));
	  this.get('baseView').buildInChild(this.get('deployMessagePage'));
		this._deployMessagePage = SC.View.views['MenuBaseOne'];
		this.invokeLater('scaleIn', 200);
	},
	
	scaleIn: function() {
		this._deployMessagePage.animate('scale', 0.9, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 1.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('bounceBack', 400);
	},

	bounceBack: function() {
		this._deployMessagePage.animate('scale', 1.0, { duration: 0.3,timing:'ease-in-out' });
	},
	
	slideInDeployKeyMenu: function() {
		console.log("slideInDeployKeyMenu");
		Nextgen.animations('MenuBaseOne', 'slideLeftOut'),
		this._deployMessagePage.animate('opacity', 1.0, { duration: 0.1,timing:'ease-in-out' });
		Nextgen.animations('MenuBaseTwo', 'slideLeftCenter')
	},
	
	slideInDeployKeyMenuReverse: function() {
		console.log("slideInDeployKeyMenuReverse");
		Nextgen.animations('MenuBaseOne', 'slideRightCenter'),
		Nextgen.animations('MenuBaseTwo', 'slideRightOut')
	},
	
	slideInRepositoryBranchMenu:function() {
		console.log("slideInRepositoryBranchMenu");
		Nextgen.animations('MenuBaseTwo', 'slideLeftOut'),
		Nextgen.animations('MenuBaseThree', 'slideLeftCenter')
	},
	
	slideInRepositoryBranchMenuReverse: function() {
		console.log("slideInRepositoryBranchMenuReverse");
		Nextgen.animations('MenuBaseTwo', 'slideRightCenter'),
		Nextgen.animations('MenuBaseThree', 'slideRightOut')
	},
	
	slideInIndexMenu: function() {
		console.log("slideInIndexMenu");
		Nextgen.animations('MenuBaseThree', 'slideLeftOut'),
		Nextgen.animations('MenuBaseFour', 'slideLeftCenter')
	},
	
	slideInIndexMenuReverse: function() {
		console.log("slideInIndexMenuReverse");
		Nextgen.animations('MenuBaseThree', 'slideRightCenter'),
		Nextgen.animations('MenuBaseFour', 'slideRightOut')
	},
	
	deployApplication: function() {
		console.log("Submitted your applications information.");
		Nextgen.viewsController.set('isEnabled', NO);
		this.invokeLater('checkForResponseBack', 500);
	},
	
	checkForResponseBack: function() {
		console.log("Deploy is succesful.");
		this.invokeLater('removeDeployMessages', 500);
	},
	
	removeDeployMessages: function() {
		console.log("removeDeployMessages");
		this._deployMessagePage.animate('scale', 0.0, { duration: 0.3,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 0.0, { duration: 0.5,timing:'ease-in-out' });
		this.invokeLater('gotoDesktopWithData', 650);
		this.invokeLater('Nextgen.cleanupViews',652);
	},
	
	gotoDesktopWithData: function() {
		console.log("gotoDesktopWithData");
		this.get('baseView').removeChild(this.get('deployMessagePage'));
		this.gotoState('desktopWithDataState');
		Nextgen.desktopViewsController.set('currentDesktopView', null);
	},
	
	scaleDown: function() {
		this._deployMessagePage.animate('scale', 0.0, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 0.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('removeRepositoryURLMessage', 400);
	},
	

	removeRepositoryURLMessage: function() {
		this.get('baseView').removeChild(this.get('deployMessagePage'));
		this.invokeLater('goBackToDesktop', 100);
	},
	
	goBackToDesktop: function() {
		this.gotoState('desktopState');
	},
	

});
	
