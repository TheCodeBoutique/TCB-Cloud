Nextgen.StartDeployState = SC.State.extend({ 

  /*
		The enterState creates a var currentWidth to the current document width and sets it to foo in the viewsController.  
		We also create a var newWidthDuringResize.  newWidthDuringResize watches for the width of the document during 
		a resize event and passes that value to tmp in the viewsController. 
		Next, we set a string 'baseView' to the mainPage.mainPane.  And, we set a string 'deployMessagePage' to the 
		repositoryURLPage.interfaceView.  Finally, we invoke the next function: appendRepositoryURLMessage.
	*/	
  enterState: function() {
		console.log("StartDeployState");
		var currentWidth = $(document).width();
		console.log("Current Height " + currentWidth);
		Nextgen.viewsController.set('foo', currentWidth);
		
		window.onresize = function(event) {
			var newWidthDuringResize = $(document).width();
			console.log("New Height " + newWidthDuringResize);
			Nextgen.viewsController.set('tmp', newWidthDuringResize);						
		}
		
		this.set('baseView', Nextgen.getPath('mainPage.mainPane'));
		this.set('deployMessagePage', COS.getPath('repositoryURLPage.interfaceView'));
		this.invokeLater('appendRepositoryURLMessage', 100);
  },
	
	/*
		During appendRepositoryURLMessage, we get the 'baseView' and append 'deployMessagePage' to it then build it in as a child.
		We also grab the RepositoryMessageMenuBase which is declared in the COS.repositoryURLPage.interfaceView ( see deploy_repository_url_page.js) 		    	
		and set it to _deployMessagePage.  Followed by invoking the next function: scaleIn.
	*/
	appendRepositoryURLMessage: function() {
		this.get('baseView').appendChild(this.get('deployMessagePage'));
    this.get('baseView').buildInChild(this.get('deployMessagePage'));
		this._deployMessagePage = SC.View.views['RepositoryMessageMenuBase'];
		this.invokeLater('scaleIn', 200);
	},
	
	/*
		scaleIn does just that.  It scalesIn the _deployMessagePage from 1.5 to 0.9 and changes its opacity from 0.0 to 1.0.  Followed by invoking
		the next function:  bounceBack.
	*/
	scaleIn: function() {
		this._deployMessagePage.animate('scale', 0.9, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 1.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('bounceBack', 400);
	},
	
	/*
		bounceback bounces the _deployMessagePage from 0.9 to 1.0.
	*/
	bounceBack: function() {
		this._deployMessagePage.animate('scale', 1.0, { duration: 0.3,timing:'ease-in-out' });
	},
	
	/*
		During removeRepositoryURLMessage, we animate the _deployMessagePage left -1000.  This is a hack for now and snaps to this
		position.  This is due to the views layout property being centerX and centerY.  We also grab the MenuBaseTwo which is declared 
		in the COS.repositoryURLPage.interfaceView ( see deploy_repository_url_page.js) and set it to _menuBaseTwo.  Followed by invoking the
		next function: animateMenuBaseTwo.
	*/
	removeRepositoryURLMessage: function() {
		console.log("removeRepositoryURLMessage");
		this._deployMessagePage.animate('left', -1000, { duration: 0.5,timing:'ease-in-out' });
		this._menuBaseTwo = SC.View.views['MenuBaseTwo'];
		this.invokeLater('animateMenuBaseTwo', 100);
	},
	
	/*
		animateMenuBaseTwo has a bit more logic.  What we are doing here is creating a var called someValue.  someValue grabs the value being passed
		to viewsController.foo.  We also create another var called desirednewWidth.  desirednewWidth divides someValue by 2 and subtracts 224.  224 is
		half the size of the this deploy message views base.  Thus we are animating the deploy message views base to the center of the current screen
		size. 
	*/
	animateMenuBaseTwo: function() {
		var someValue = Nextgen.viewsController.foo
		var desirednewWidth = someValue / 2 - 224;
		console.log("Center of the Screen is: " + desirednewWidth);
		console.log("animateMenuBaseTwo");
		this._menuBaseTwo.animate('left', desirednewWidth, { duration: 0.5,timing:'ease-in-out' },this.banks);
	},
	
	banks: function() {
		// debugger;
		window.onresize = function(event) {
			this._menuBaseTwo = SC.View.views['MenuBaseTwo'];
			var tcb = $(document).width();
			var bct = tcb / 2 - 224;
			console.log("TCB " + tcb);				
			this._menuBaseTwo.adjust('left', bct);
		}
	},
	
	/*
		animateMenuBaseThree is similar to animateMenuBaseTwo.  To clarify, animateMenuBaseThree does the following: creating a var called someValue.  
		someValue grabs the value being passed to viewsController.foo.  We also create another var called desirednewWidth.  desirednewWidth divides 
		someValue by 2 and subtracts 224.  224 is half the size of the this deploy message views base.  It checks for this value again because the 
		value may have changed since the last time we grabbed it. Again we take this value and we are animating the deploy message views base to the 
		center of the current screen size. 
	*/
	animateMenuBaseThree: function() {
		this._menuBaseThree = SC.View.views['MenuBaseThree'];
		var someValue = Nextgen.viewsController.tmp
		var desirednewWidth = someValue / 2 - 224;
		console.log("Center of the Screen is: " + desirednewWidth);
		console.log("animateMenuBaseThree");
		this._menuBaseTwo.animate('left', -1000, { duration: 0.5,timing:'ease-in-out' });
		this._menuBaseThree.animate('left', desirednewWidth, { duration: 0.5,timing:'ease-in-out' });
	},
	
	/*
		animateMenuBaseFour does the following: creating a var called someValue. someValue grabs the value being passed to viewsController.foo.  We 
		also create another var called desirednewWidth.  desirednewWidth divides someValue by 2 and subtracts 224.  224 is half the size of the this 
		deploy message views base.  It checks for this value again because the value may have changed since the last time we grabbed it. Again we take 
		this value and we are animating the deploy message views base to the center of the current screen size. 
	*/
	animateMenuBaseFour: function() {
		this._menuBaseFour = SC.View.views['MenuBaseFour'];
		var someValue = Nextgen.viewsController.tmp
		var desirednewWidth = someValue / 2 - 224;
		console.log("Center of the Screen is: " + desirednewWidth);
		console.log("animateMenuBaseFour");
		this._menuBaseThree.animate('left', -1000, { duration: 0.5,timing:'ease-in-out' });
		this._menuBaseFour.animate('left', desirednewWidth, { duration: 0.5,timing:'ease-in-out' });
	},
	
	deployApplication: function() {
		console.log("Submitted your applications information.");
		this.invokeLater('checkForResponseBack', 500);
	},
	
	checkForResponseBack: function() {
		console.log("Deploy is succesful.");
		this.invokeLater('removeDeployMessages', 500);
	},
	
	removeDeployMessages: function() {
		console.log("removeDeployMessages");
		this._deployMessagePage.animate('scale', 0.0, { duration: 0.3,timing:'ease-in-out' });
		this._deployMessagePage.animate('opacity', 0.0, { duration: 0.5,timing:'ease-in-out' });
		this.invokeLater('gotoDesktopWithData', 650);
	},
	
	gotoDesktopWithData: function() {
		console.log("gotoDesktopWithData");
		this.get('baseView').removeChild(this.get('deployMessagePage'));
		this.gotoState('desktopWithDataState');
		Nextgen.desktopViewsController.set('currentDesktopView', null);
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

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');