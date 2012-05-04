Nextgen.DesktopState = SC.State.extend({ 
  
  enterState: function() {
    Nextgen.viewsController.set('nowShowing', 'COS.desktopPage.desktopView');
		Nextgen.viewsController.set('currentDesktop', 'COS.emptyDesktopPage.interfaceView');
  },

	exitState: function() {
		
	},
	
});