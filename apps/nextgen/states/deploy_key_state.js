Nextgen.DeployKeyState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.deployKeyTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.deployKeyDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.deployKeyButtonTitle);
		Nextgen.deployMessageViewController.set('previousButtonState', Nextgen.DeployMessages.previousButtonTitle);
  },

	previousState: function() {
		this.gotoState('startDeployState');
	},
	
	nextState: function() {
		this.gotoState('deployBranchState');
	},

	exitState: function() {
		
	},

});