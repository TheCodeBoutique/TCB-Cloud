Nextgen.StartDeployState = SC.State.extend ({
	
	enterState: function() {
    this.set('desktopPage', COS.getPath('desktopPage.desktopView'));
		this.set('deployMessagePage', COS.getPath('deployMessagePage.platformView'));
		this.invokeLater('appendDeployMessages', 100);
  },

 	appendDeployMessages: function() {
		this.get('desktopPage').appendChild(this.get('deployMessagePage'));
    this.get('desktopPage').buildInChild(this.get('deployMessagePage'));
		Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.repositoryTitle);
		Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.repositoryDescription);
		Nextgen.deployMessageViewController.set('previousButtonState', Nextgen.DeployMessages.repositoryPreviousButtonTitle);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.repositoryButtonTitle);
		this._deployMessageView = SC.View.views['DeployMessageMenuBase'];
		// this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
		this.invokeLater('scaleIn', 200);
	},
	
	scaleIn: function() {
		this._deployMessageView.animate('scale', 0.9, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessageView.animate('opacity', 1.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('bounceBack', 400);
	},
	
	bounceBack: function() {
		this._deployMessageView.animate('scale', 1.0, { duration: 0.3,timing:'ease-in-out' });
	},
	
	// We should wait for a response from the URL submission that says if this is a private repo or not.
	// If it is, gotoState('deployKeyState'), elseIf, gotoState('deployBranchState').
	// For now we will gotoState('deployKeyState').
	
	nextState: function() {
		this.gotoState('deployKeyState');
	},
	
	previousState: function() {
		this._deployMessageView.animate('scale', 0.0, { duration: 0.3,timing:'ease-in-out' });
		this._deployMessageView.animate('opacity', 0.0, { duration: 0.5,timing:'ease-in-out' });
		this.invokeLater('removeDeployMessages', 350);
	},
	
	removeDeployMessages: function() {
		this.get('desktopPage').removeChild(this.get('deployMessagePage'));
		this.invokeLater('gotoDesktopState', 100);
	},
	
	gotoDesktopState: function() {
		this.gotoState('desktopState');
	},
	
	exitState: function() {
	
	},
	
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');