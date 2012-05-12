Nextgen.SSHDeployState = SC.State.extend({ 

  
  enterState: function() {
		console.log("SSHDeployState");
		
		window.onresize = function(event) {

			// Get the height of the window during a resize
			var newHeight = $(document).height();
			console.log("New Height " + newHeight);
			
			Nextgen.viewsController.set('tmp', newHeight);
						
		}
	this.set('baseView', Nextgen.getPath('mainPage.mainPane'));
	this.set('sshDeployMessagePage', COS.getPath('sshKeyPage.menuBase'));
	this.invokeLater('appendSSHMessage', 100);
  },

	appendSSHMessage: function() {
		console.log("appendSSHMessage");
		this.get('baseView').appendChild(this.get('sshDeployMessagePage'));
    this.get('baseView').buildInChild(this.get('sshDeployMessagePage'));
		// this._deployMessagePage = SC.View.views['RepositoryMessageMenuBase'];
		// this.invokeLater('scaleIn', 200);
	},
	
	scaleIn: function() {
		this._deployMessagePage.animate('scale', 0.9, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 1.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('bounceBack', 400);
	},
	
	bounceBack: function() {
		this._deployMessagePage.animate('scale', 1.0, { duration: 0.3,timing:'ease-in-out' });
	},
	
	removeRepositoryURLMessage: function() {
		console.log("removeRepositoryURLMessage");
		this._deployMessagePage.animate('left', -1000, { duration: 0.5,timing:'ease-in-out' });
	},

	fooState: function() {
		// This is working.  So theoretically I do this in different functions in this state to get the current center of the screen.
		// Once I have that value.  I use it for animating the deploy message pane
		// Maybe I can set a constant to the value width / 2.  This way I have the view layout set to left width / 2  without hard coding
		// centerX.  Thus allowing a smooth left and right animation
		console.log("foo");
		var someValue = Nextgen.viewsController.tmp
		console.log("Some Value " + someValue);
	},	

  exitState: function() {
	
  }

});

