Nextgen.LoggedOutState = SC.State.extend({ 
  
  enterState: function() {
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
    this.get('baseView').appendChild(this.get('signupPage'));
    this.get('baseView').buildInChild(this.get('signupPage'));
		this.invokeLater(this.showSignup, 100);
  },

	showSignup: function() {
		// Get the hight of the document
	 	var heightOfDocument = $(document).height(); 
		
		// Divide the height by 2.  This finds the center point of our view
		var centerPointOfDocument = heightOfDocument / 2; 
		
		// Subtract the results of centerPointOfDocument from the center point of the signupView.
		// This will center the signupView based on the current screen size. 
		var desiredDestinationForSignUpView = centerPointOfDocument - 268; 
		
		// NOTE:
		// Follow up up on this solution.  If the desiredDestinationForSignUpView returns a negative value.  The view slides in too high and is bad.
		//  We might want to setup an observer on the windowSize to adjust the position accordingly.
		
    this._signupview = SC.View.views['SignUpMenuBase'];
		this._signupview.animate('top', desiredDestinationForSignUpView, {duration: 0.4,timing:'ease-in-out'});
  },

	submitNewSignup: function() {
		this._signupview = SC.View.views['SignUpMenuBase'];
    this._signupview.animate('top', 1600, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.newUserGoesToDesktopState, 400);
	},

	newUserGoesToDesktopState: function() {
		this.get('baseView').removeChild(this.get('signupPage'));
		this.invokeLater(this.goToDesktopState, 100);
	},

 	hideSignup: function() {
		this._signupview = SC.View.views['SignUpMenuBase'];
    this._signupview.animate('top', 1600, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.removeSignup, 500);
	},

  removeSignup:function() {
  	this.get('baseView').removeChild(this.get('signupPage'));
  },

	goToDesktopState: function() {
		Nextgen.desktopViewsController.set('currentDesktopView', COS.emptyDesktopPage.interfaceView); // This is a tmp solution
	  this.gotoState('desktopState');
	},

  exitState: function() {
	
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');