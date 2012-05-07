Nextgen.DeployBranchState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.branchTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.branchDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.branchButtonTitle);
  },

	previousState: function() {
		this.gotoState('deployKeyState');
	},
	
	nextState: function() {
		this.gotoState('deployIndexState')
	},

	exitState: function() {
		
	},

});