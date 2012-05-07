Nextgen.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Nextgen.getPath('mainPage.mainPane').append();
		Nextgen.viewsController.set('nowShowing', 'COS.loginPage.interfaceView');
		this.set('loginPage', COS.getPath('loginPage.interfaceView'));
		this.set('signupPage', COS.getPath('signupPage.signupView'));
		this.invokeLater(this.fadeIn, 500);
  },

	fadeIn: function() {
	  Nextgen.getPath('mainPage.mainPane.textureView').animate('opacity', 1.0, {duration: 0.8,timing:'ease-in-out'});
	},
	
	signup: function() {
    this.get('loginPage').appendChild(this.get('signupPage'));
    this.get('loginPage').buildInChild(this.get('signupPage'));
		this.invokeLater(this.showSignup, 100);
  },

  showSignup: function() {
    this._signupview = SC.View.views['SignUpMenuBase'];
		this._signupview.animate('top', 120, {duration: 0.4,timing:'ease-in-out'});
  },

	submitNewSignup: function() {
		this._signupview = SC.View.views['SignUpMenuBase'];
    this._signupview.animate('top', 1600, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.newUserGoesToDesktopState, 400);
	},
	
	newUserGoesToDesktopState: function() {
		this.get('loginPage').removeChild(this.get('signupPage'));
		this.gotoState('desktopState');
	},

 	hideSignup: function() {
		this._signupview = SC.View.views['SignUpMenuBase'];
    this._signupview.animate('top', 1600, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.removeSignup, 500);
	},

  removeSignup:function() {
  	this.get('loginPage').removeChild(this.get('signupPage'));
  },

	gotoDesktopState: function() {
		this.gotoState('desktopState');
	},

  exitState: function() {
		Nextgen.viewsController.set('nowShowing', '');
  }

});

