Nextgen.DesktopWithDataState = SC.State.extend({ 
  
  enterState: function() {
		console.log("DesktopWithDataState");
		Nextgen.desktopViewsController.set('currentDesktopView', COS.nonEmptyDesktopPage.interfaceView);
    Nextgen.store.find(Nextgen.ApplicationQuery);
  },

	gotoDeployState: function() {
		console.log("gotoDeployState");
		this.gotoState('startDeployState');
		this._deployMessageView = SC.View.views['MenuBaseOne'];
		this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
	},

	signOut: function() {
		this.gotoState('loggedOutState');
	},

  exitState: function() {
		
  }

});

