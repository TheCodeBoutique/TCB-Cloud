Nextgen.DeployIndexState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.indexTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.indexDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.indexButtonTitle);
  },

	previousState: function() {
		this.gotoState('deployBranchState');
	},
	
	nextState: function() {
		console.log("nextState");
	},

	exitState: function() {
		
	},

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');