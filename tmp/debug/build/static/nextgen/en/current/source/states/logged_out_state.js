Nextgen.LoggedOutState = SC.State.extend({ 
  
  enterState: function() {
		console.log("LoggedOutState");
		Nextgen.viewsController.set('currentView', Nextgen.loginPage.interfaceView);
		// Clear out any data thats been enter during last session //
		Nextgen.authenticateController.set('userName', '');
		Nextgen.authenticateController.set('userPassword', '');
		
		this.set('baseView', Nextgen.getPath('mainPage.mainPane'));
		this.set('signupPage', COS.getPath('signupPage.signupView'));
	
		this.invokeLater(this.fadeIn, 500);
  },

	fadeIn: function() {
	  Nextgen.getPath('mainPage.mainPane.textureView').animate('opacity', 1.0, {duration: 0.8,timing:'ease-in-out'});
	},

	validateUserInput: function() {
		var userNameSigningIn = Nextgen.authenticateController.userName;
		var userPasswordSigningIn = Nextgen.authenticateController.userPassword;
		
		var userName = "admin";
		var userPassword = "admin";
		
		if (userNameSigningIn === userName && userPasswordSigningIn === userPassword) {
			Nextgen.desktopViewsController.set('currentDesktopView', COS.emptyDesktopPage.interfaceView); // This is a tmp solution
		  this.gotoState('desktopState');
		} else {
		  alert("Bad Credentials!  You should try admin / admin.");
		}
		
	},
	
	signup: function() {
		console.log("signup");
    this.get('baseView').appendChild(this.get('signupPage'));
    this.get('baseView').buildInChild(this.get('signupPage'));
		// this.invokeLater(this.showSignup, 100);
  },

  exitState: function() {
	
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');