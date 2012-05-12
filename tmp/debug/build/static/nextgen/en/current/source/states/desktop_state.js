Nextgen.DesktopState = SC.State.extend({ 
  
  enterState: function() {
		console.log("DesktopState");
		Nextgen.viewsController.set('currentView', Nextgen.desktopPage.interfaceView);
  },

	gotoDeployState: function() {
		console.log("gotoDeployState");
		this.gotoState('startDeployState');
		this._deployMessageView = SC.View.views['DeployMessageMenuBase'];
		this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
	},

	signOut: function() {
		this.gotoState('loggedOutState');
	},

  exitState: function() {
		
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');