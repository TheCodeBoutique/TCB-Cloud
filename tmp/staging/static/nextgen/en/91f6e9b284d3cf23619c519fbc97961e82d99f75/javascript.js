/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Nextgen
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Nextgen = SC.Application.create(
  /** @scope Nextgen.prototype */ {

  NAMESPACE: 'Nextgen',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;

/* >>>>>>>>>> BEGIN source/controllers/deploy_message_view_controller.js */
// ==========================================================================
// Project:   Nextgen.deployMessageViewController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nextgen.deployMessageViewController = SC.ObjectController.create(
/** @scope Nextgen.deployMessageViewController.prototype */ {
	
	deployTitle: '',
	descriptionContent: '',
	previousButtonState: '',
	buttonState: '',

	contentView: '',
	navigationView: ''
	

}) ;

/* >>>>>>>>>> BEGIN source/controllers/desktop_view_controller.js */
// ==========================================================================
// Project:   Nextgen.desktopViewController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nextgen.desktopViewController = SC.ObjectController.create(
/** @scope Nextgen.desktopViewController.prototype */ {

  currentDesktop: '',

}) ;

/* >>>>>>>>>> BEGIN source/controllers/views_controller.js */
// ==========================================================================
// Project:   Nextgen.viewsController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Nextgen.viewsController = SC.ObjectController.create(
/** @scope Nextgen.viewsController.prototype */ {

  nowShowing: '',

}) ;

/* >>>>>>>>>> BEGIN source/statechart.js */
Nextgen.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('Nextgen.ReadyState'),
  desktopState: SC.State.plugin('Nextgen.DesktopState'),
	startDeployState: SC.State.plugin('Nextgen.StartDeployState'),
	deployKeyState: SC.State.plugin('Nextgen.DeployKeyState'),
	deployBranchState: SC.State.plugin('Nextgen.DeployBranchState'),
	deployIndexState: SC.State.plugin('Nextgen.DeployIndexState')

});
/* >>>>>>>>>> BEGIN source/states/deploy_branch_state.js */
Nextgen.DeployBranchState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.branchTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.branchDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.branchButtonTitle);
  },

	previousState: function() {
		this.gotoState('deployKeyState');
	},
	
	nextState: function() {
		this.gotoState('deployIndexState')
	},

	exitState: function() {
		
	},

});
/* >>>>>>>>>> BEGIN source/states/deploy_index_state.js.js */
Nextgen.DeployIndexState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.indexTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.indexDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.indexButtonTitle);
  },

	previousState: function() {
		this.gotoState('deployBranchState');
	},
	
	nextState: function() {
		console.log("nextState");
	},

	exitState: function() {
		
	},

});
/* >>>>>>>>>> BEGIN source/states/deploy_key_state.js */
Nextgen.DeployKeyState = SC.State.extend ({
	
	enterState: function() {
   	Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.deployKeyTitle);
	 	Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.deployKeyDescription);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.deployKeyButtonTitle);
		Nextgen.deployMessageViewController.set('previousButtonState', Nextgen.DeployMessages.previousButtonTitle);
  },

	previousState: function() {
		this.gotoState('startDeployState');
	},
	
	nextState: function() {
		this.gotoState('deployBranchState');
	},

	exitState: function() {
		
	},

});
/* >>>>>>>>>> BEGIN source/states/desktop_state.js */
Nextgen.DesktopState = SC.State.extend({ 
  
  enterState: function() {
    Nextgen.viewsController.set('nowShowing', 'COS.desktopPage.desktopView');
		Nextgen.desktopViewController.set('currentDesktop', 'COS.emptyDesktopPage.interfaceView');
		Nextgen.viewsController.set('deployStage', 'COS.repositoryUrlPage.interfaceView');
  },

	gotoStartDeployState: function() {
		this.gotoState('startDeployState');
		this._deployMessageView = SC.View.views['DeployMessageMenuBase'];
		this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
	},
	
	signOut: function() {
		this.gotoState('readyState');
	},

	exitState: function() {
		
	},
	
});
/* >>>>>>>>>> BEGIN source/states/ready_state.js */
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


/* >>>>>>>>>> BEGIN source/states/start_deploy_state.js */
Nextgen.StartDeployState = SC.State.extend ({
	
	enterState: function() {
    this.set('desktopPage', COS.getPath('desktopPage.desktopView'));
		this.set('deployMessagePage', COS.getPath('deployMessagePage.platformView'));
		this.invokeLater('appendDeployMessages', 100);
  },

 	appendDeployMessages: function() {
		this.get('desktopPage').appendChild(this.get('deployMessagePage'));
    this.get('desktopPage').buildInChild(this.get('deployMessagePage'));
		Nextgen.deployMessageViewController.set('deployTitle', Nextgen.DeployMessages.repositoryTitle);
		Nextgen.deployMessageViewController.set('descriptionContent', Nextgen.DeployMessages.repositoryDescription);
		Nextgen.deployMessageViewController.set('previousButtonState', Nextgen.DeployMessages.repositoryPreviousButtonTitle);
		Nextgen.deployMessageViewController.set('buttonState', Nextgen.DeployMessages.repositoryButtonTitle);
		this._deployMessageView = SC.View.views['DeployMessageMenuBase'];
		// this._deployMessageView.animate('scale', 1.5, { duration: 0.1,timing:'ease-in-out' });
		this.invokeLater('scaleIn', 200);
	},
	
	scaleIn: function() {
		this._deployMessageView.animate('scale', 0.9, { duration: 0.4,timing:'ease-in-out' });
		this._deployMessageView.animate('opacity', 1.0, { duration: 0.6,timing:'ease-in-out' });
		this.invokeLater('bounceBack', 400);
	},
	
	bounceBack: function() {
		this._deployMessageView.animate('scale', 1.0, { duration: 0.3,timing:'ease-in-out' });
	},
	
	// We should wait for a response from the URL submission that says if this is a private repo or not.
	// If it is, gotoState('deployKeyState'), elseIf, gotoState('deployBranchState').
	// For now we will gotoState('deployKeyState').
	
	nextState: function() {
		this.gotoState('deployKeyState');
	},
	
	previousState: function() {
		this._deployMessageView.animate('scale', 0.0, { duration: 0.3,timing:'ease-in-out' });
		this._deployMessageView.animate('opacity', 0.0, { duration: 0.5,timing:'ease-in-out' });
		this.invokeLater('removeDeployMessages', 350);
	},
	
	removeDeployMessages: function() {
		this.get('desktopPage').removeChild(this.get('deployMessagePage'));
		this.invokeLater('gotoDesktopState', 100);
	},
	
	gotoDesktopState: function() {
		this.gotoState('desktopState');
	},
	
	exitState: function() {
	
	},
	
});
/* >>>>>>>>>> BEGIN source/strings/deploy_messages.js */
Nextgen.DeployMessages = {
	
	repositoryPreviousButtonTitle: "Cancel",
	repositoryButtonTitle: "Next",
	repositoryTitle: "Repository URL:",
	repositoryDescription: "This is the deploy description",
	
	previousButtonTitle: "Back",
	deployKeyButtonTitle: "Generate",
	deployKeyTitle: "Deploy Key:",
	deployKeyDescription: "Generate your deploy keys when your applications repository is private.",
	
	branchButtonTitle: "Next",
	branchTitle: "Repository Branch:",
	branchDescription: "This is the branch description",
	
	indexButtonTitle: "Deply",
	indexTitle: "Index Path:",
	indexDescription: "This is the index path description",
		
};
/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Nextgen - mainPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

// This page describes the main user interface for your application.  
Nextgen.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
		classNames: ['base_color'],
    childViews: ['textureView'],
    
    textureView: SC.View.design({
			classNames: ['texture no_opacity'],
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
			childViews: ['shadowDOM'],
			
			shadowDOM: SC.ContainerView.design({
	      layout: { top: 0, right: 0, bottom: 0, left: 0 },
	      nowShowingBinding: 'Nextgen.viewsController.nowShowing'
	    }),

    }),

  })

});

	

/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Nextgen
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Nextgen */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Nextgen.main = function main() {

  // Step 1: Tell your app it will load via states
  var statechart = Nextgen.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: MyApp.contactsController.set('content', MyApp.contacts);

} ;

function main() { Nextgen.main(); }

