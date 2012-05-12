Nextgen.DesktopWithDataState = SC.State.extend({ 
  
  enterState: function() {
		console.log("DesktopWithDataState");
		Nextgen.desktopViewsController.set('currentDesktopView', COS.nonEmptyDesktopPage.interfaceView);
  },

	
	
	signOut: function() {
		this.gotoState('loggedOutState');
	},

  exitState: function() {
		
  }

});

