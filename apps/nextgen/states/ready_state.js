Nextgen.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Nextgen.getPath('mainPage.mainPane').append();
		this.invokeLater(this.loadLoginView, 100);
  },

	loadLoginView: function() {
		this.gotoState('loggedOutState');
	},

  exitState: function() {
	
  }

});

