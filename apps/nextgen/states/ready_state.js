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
		this.invokeLater(this.loginAnimation, 100);
  },

  loginAnimation: function() {
      this._ani = this.getPath('COS.SignupView.menuBase.layout');

      if (this._ani.top !== 140) {
        this.getPath('COS.SignupView.menuBase').animate('top', 140, {duration: 0.4,timing:'ease-in-out'});
      } else {
        this.getPath('SignupView.menuBase').animate('top', 1600, {duration: 0.4,timing:'ease-in-out'});
        this.invokeLater(this.removeLogin, 500);
      }
    },

    removeLogin:function() {
      this.get('loginPage').removeChild(this.get('signupPage'));
    },

  exitState: function() {
    Nextgen.getPath('mainPage.mainPane').remove();
  }

});

