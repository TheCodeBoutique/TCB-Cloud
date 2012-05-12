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

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');