Nextgen.DesktopState = SC.State.extend({ 
  
  enterState: function() {
    Nextgen.viewsController.set('nowShowing', 'COS.desktopPage.desktopView');
		Nextgen.desktopViewController.set('currentDesktop', 'COS.emptyDesktopPage.interfaceView');
		Nextgen.viewsController.set('deployStage', 'COS.repositoryUrlPage.interfaceView');
  },

	gotoStartDeployState: function() {
		this.gotoState('startDeployState');
		this._deployMessageView = SC.View.views['DeployMessageMenuBase'];
		this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
	},
	
	signOut: function() {
		this.gotoState('readyState');
	},

	exitState: function() {
		
	},
	
});