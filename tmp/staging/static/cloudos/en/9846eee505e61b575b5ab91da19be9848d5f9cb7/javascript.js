/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Cloud OS
// Copyright: @2012 The Code Boutique LLC.
// ==========================================================================
/*globals COS */

/** @namespace

  My cool new framework.  Describe your framework.
  
  @extends SC.Object
*/
COS = SC.Object.create(
  /** @scope COS.prototype */ {

  NAMESPACE: 'COS',
  VERSION: '0.1.0',


}) ;

/* >>>>>>>>>> BEGIN source/custom_componets/deploy_message_view.js */
// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom desktop view.  This is the standard login view used for all TCB internal applications.  Using the COS.DesktopView reduces the amount of time spent building common UI patterns.  To instantiate this view see the following example:

	platformView: COS.DeployMessageView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
	}),
	
	@applicationName:  pass in a string value for your applications name
	@applicationIcon:  pass in an image path to display your applications icon.  The prefered size is no larger then 60 x 60.
	@buttonTitle:  pass in a string for the action buttons title.  This is usually a 'submit' or 'login' value.
	@descriptionText: pass in a string that describes what your application does.  This should be short and sweet.
	@firstFormText: pass in a string to display a hint for the first forms desired value.  This is usually a 'user' name or an 'email' value.	
	
  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks
*/


COS.DeployMessageView = SC.View.extend ({
	classNames: 'overlay_pane'.w(),
	childViews: ['menuBase'],
	
	menuBase: SC.View.design({
		layerId:['DeployMessageMenuBase'],
	  layout: { centerX: 0, centerY: 0, height: 248, width: 448 },
	  classNames: ['blue_gradient_fliped', 'radius_six', 'no_opacity', 'menu_shadow'],
		childViews: ['titleView', 'descriptionView', 'contentView', 'cancelButton', 'nextButton'],
		
		render: function(context){
			context.push([	
				'<div class="line message_line absolute">','</div>',	
			].join(''))		
		},
		
		titleView: SC.LabelView.design({
			classNames: ['message_title'],
		  layout: { top: 10, right: 0, left: 0, height: 30 },
		   valueBinding: 'Nextgen.deployMessageViewController.deployTitle'
		}),
		
		descriptionView: SC.LabelView.design({
			classNames: ['message_description'],
		  layout: { top: 50, right: 40, left: 40, height: 50 },
		   valueBinding: 'Nextgen.deployMessageViewController.descriptionContent'
		}),
		
		contentView: SC.ContainerView.design({
		  layout: { top: 112, right: 0, left: 0, height: 36 },
		  nowShowingBinding: 'Nextgen.deployMessageViewController.contentView'
		}),
		
		cancelButton: SC.ButtonView.design({
			classNames: 'cancel_button'.w(),
		  layout: { bottom: 10, left: 100, height: 25, width: 100 },
		  titleBinding: 'Nextgen.deployMessageViewController.previousButtonState',
		  action: 'previousState',
		  target: 'Nextgen.statechart'
		}),
		
		nextButton: SC.ButtonView.design({
			classNames: 'submit_button'.w(),
		  layout: { bottom: 10, right: 100, height: 25, width: 100 },
		  titleBinding: 'Nextgen.deployMessageViewController.buttonState',
		  action: 'nextState',
		  target: 'Nextgen.statechart'
		}),
		
	//	navigationView: SC.ContainerView.design({
	//	  layout: { bottom: 0, left: 0, right: 0, height: 54 },
	//	  nowShowingBinding: 'Nextgen.deployMessageViewController.navigationView'
	//	}),
		
// childViews: ['titleView', 'descriptionView', 'contentView', 'currentViewIndicator', 'navigationView'],
// 
// render: function(context){
// 	context.push([	
// 		'<div class="line message_line absolute">','</div>',	
// 	].join(''))		
// },
// 
// titleView: SC.LabelView.design({
// 	classNames: ['message_title'],
//   layout: { top: 10, right: 0, left: 0, height: 30 },
//    valueBinding: 'Nextgen.deployMessageViewController.deployTitle'
// }),
// 
// descriptionView: SC.LabelView.design({
// 	classNames: ['message_description'],
//   layout: { top: 50, right: 40, left: 40, height: 50 },
//    valueBinding: 'Nextgen.deployMessageViewController.descriptionContent'
// }),
// 
// contentView: SC.ContainerView.design({
// 	backgroundColor: "white",
//   layout: { top: 112, right: 0, left: 0, height: 36 },
//   nowShowingBinding: 'Nextgen.deployMessageViewController.contentView'
// }),
// 
// currentViewIndicator: SC.ContainerView.design({
// 	backgroundColor: "silver",
//   layout: { bottom: 54, centerX: 0, height: 10, width: 50 },
//   nowShowingBinding: 'Nextgen.deployMessageViewController.currentViewIndicator'
// }),
// 
// navigationView: SC.ContainerView.design({
//   //backgroundColor: "gray",
//   layout: { bottom: 0, left: 0, right: 0, height: 34 },
//   nowShowingBinding: 'Nextgen.deployMessageViewController.navigationView'
// }),
	  
	}),

});
/* >>>>>>>>>> BEGIN source/custom_componets/desktop_view.js */
// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom desktop view.  This is the standard login view used for all TCB internal applications.  Using the COS.DesktopView reduces the amount of time spent building common UI patterns.  To instantiate this view see the following example:

	desktopView: COS.DesktopView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
	}),
	
	@applicationName:  pass in a string value for your applications name
	@applicationIcon:  pass in an image path to display your applications icon.  The prefered size is no larger then 60 x 60.
	@buttonTitle:  pass in a string for the action buttons title.  This is usually a 'submit' or 'login' value.
	@descriptionText: pass in a string that describes what your application does.  This should be short and sweet.
	@firstFormText: pass in a string to display a hint for the first forms desired value.  This is usually a 'user' name or an 'email' value.	
	
  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks
*/


COS.DesktopView = SC.View.extend ({
	childViews: ['appIcon', 'actionButton', 'settingsButton', 'dynamicContent'],
	
	render: function(context){
		context.push([	
			'<div class="horizontal_line absolute">','</div>',	
		].join(''))		
	},
	
	applicationIcon: '',
	
	appIcon: SC.ImageView.design({
	  layout: { top: 10, left: 10, height: 34, width: 173 },
	  valueBinding: '.parentView.applicationIcon',
	}),
	
	actionButton: SC.ButtonView.design({
		classNames: 'submit_button'.w(),
	  layout: { top: 10, right: 10, height: 31, width: 33 },
	  action: 'gotoStartDeployState',
	  target: 'Nextgen.statechart',
		icon: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/upload_cloud.png',
	}),
	
	settingsButton: SC.ButtonView.design({
		classNames: ['text_style medium light emtpy_button'],
	  layout: { top: 18, right: 65, height: 25, width: 75 },
	  title: 'Sign Out',
	  action: 'signOut',
	  target: 'Nextgen.statechart',
	//	icon: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/upload_cloud.png',
	}),
	
	dynamicContent: SC.ContainerView.design({
	  layout: { top: 50, right: 0, bottom: 0, left: 0 },
	  nowShowingBinding: 'Nextgen.desktopViewController.currentDesktop'
	}),
	
});
/* >>>>>>>>>> BEGIN source/custom_componets/login_view.js */
// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom login view.  This is the standard login view used for all TCB internal applications.  Using the COS.LoginView reduces the amount of time spent building common UI patterns.  To instatiate this view see the following example:

	loginView: COS.LoginView.create ({
		layout: { centerX: 0, centerY: 0, height: 465, width: 855 },
		applicationName: 'Atlas',
		applicationIcon: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/atlas_icon.png',
		buttonTitle: 'Sign In',
		descriptionText: 'This is the description of your login view.',
		firstFormText: 'User Name',
	}),
	
	@applicationName:  pass in a string value for your applications name
	@applicationIcon:  pass in an image path to display your applications icon.  The prefered size is no larger then 60 x 60.
	@buttonTitle:  pass in a string for the action buttons title.  This is usually a 'submit' or 'login' value.
	@descriptionText: pass in a string that describes what your application does.  This should be short and sweet.
	@firstFormText: pass in a string to display a hint for the first forms desired value.  This is usually a 'user' name or an 'email' value.	
	
  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks
*/


COS.LoginView = SC.View.extend ({
	childViews: ['appName', 'appIcon', 'appIconAlt', 'viewContainer'],
	
	buttonTitle: '',
	descriptionText: '',
	applicationName: '',
	applicationIcon: '',
	applicationIconAlt: '',
	firstFormText: '',
	
	appIcon: SC.ImageView.design({
	  layout: { top: 10, left: 0, height: 49, width: 34 },
	  valueBinding: '.parentView.applicationIcon',
	}),
	
	appName: SC.LabelView.design({
		classNames: ['text_style absolute app_name'],
	  layout: { top: 25, left: 40, height: 40, width: 300 },
	  valueBinding: '.parentView.applicationName',
	}),
	
	appIconAlt: SC.ImageView.design({
	  layout: { top: 35, left: 225, height: 17, width: 33 },
	  valueBinding: '.parentView.applicationIconAlt',
	}),
	
	viewContainer: SC.View.design({
		classNames: ['embeded_gradient'],
	  layout: { top: 65, centerX: 0, height: 400, width: 855 },
	  childViews: ['actionButton', 'viewDescription', 'userNameForm', 'passwordForm'],
	
		render: function(context){
			context.push([
				'<div class="shadow_view anchor_top absolute">','</div>',
				'<div class="shadow_view flipped_element anchor_bottom absolute">','</div>',
				'<div class="sign_in_text text_style absolute">',"Sign In",'</div>',	
				'<div class="line absolute">','</div>',
				'<div class="line_forms_signin absolute">','</div>',
				'<div class="forms signin_forms absolute">','</div>',		
			].join(''))		
		},

		actionButton: SC.ButtonView.design({
			classNames: ['submit_button'],
		  layout: { right: 50, bottom: 20, height: 25, width: 100 },
		  titleBinding: '.parentView.parentView.buttonTitle',
		  action: 'gotoDesktopState',
		  target: 'Nextgen.statechart'
		}),

		viewDescription: SC.LabelView.design({
			classNames: ['text_style_paragraph'],
		  layout: { top: 120, left: 35, height: 100, width: 300 },
		  valueBinding: '.parentView.parentView.descriptionText'
		}),
		
		userNameForm: SC.TextFieldView.design({
			classNames: ['text_field_signin'],
		  layout: { top: 112, right: 98, height: 36, width: 260 },
		  hintBinding: '.parentView.parentView.firstFormText',
		  isPassword: NO,
		  isTextArea: NO
		}),
		
		passwordForm: SC.TextFieldView.design({
			classNames: ['text_field_signin'],
		  layout: { top: 153, right: 98, height: 36, width: 260 },
		  hint: 'Password',
		  isPassword: YES,
		  isTextArea: NO
		}),
	  
	}),	
 
});
/* >>>>>>>>>> BEGIN source/custom_componets/shadow_view.js */
// ==========================================================================
// Project:   Cloud OS - Clientside Application Framework
// Copyright: ©2012 The Code Boutique.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================


/**
  @class

  Displays a shadow which gives the effect of a embeded view. 

  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks. Kyle Carriedo
*/


COS.ShadowView = SC.View.extend(
/** @scope COS.ShadowView.prototype */ {
	
	render: function(context) {
		context.push('<div class="shadow_view"></div>')
	},
  
});
/* >>>>>>>>>> BEGIN source/custom_componets/signup_view.js */
// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom signup view with on semi-opaque overlay.  This is the standard signup view used for all TCB internal applications.  Using the COS.SignupView reduces the amount of time spent building common UI patterns.  To instatiate this view see the following example:

	signupView: COS.SignupView.create ({
		layout: { top: 0, right: 0, bottom: 0, left: 0 },
		firstFormText: 'Chad Eubanks',
		secondFormText: 'ceubanks',
		thirdFormText: 'ceubanks@thecodeboutique.com'
	}),
	
	@applicationName:  pass in a string value for your applications name
	@applicationIcon:  pass in an image path to display your applications icon.  The prefered size is no larger then 60 x 60.
	@buttonTitle:  pass in a string for the action buttons title.  This is usually a 'submit' or 'login' value.
	@descriptionText: pass in a string that describes what your application does.  This should be short and sweet.
	@firstFormText: pass in a string to display a hint for the first forms desired value.  This is usually a 'user' name or an 'email' value.	
	
  @extends SC.View
  @since Cloud OS 1.0
  @author: Chad Eubanks
*/


COS.SignupView = SC.View.extend ({
	classNames: 'overlay_pane'.w(),
	childViews: ['menuBase'],
	
	firstFormText: '',
	secondFormText: '',
	thirdFormText: '',

  menuBase: SC.View.design({
		layerId:['SignUpMenuBase'],
    classNames: ['base_color', 'radius_six', 'menu_shadow'],
		childViews: ['textureView', 'blueToolbar', 'fullNameForm', 'userNameForm', 'emailForm', 'passwordForm', 'confirmPasswordForm'],
    layout:{ top: 1600, centerX: 0, height: 536, width: 537 },

		render: function(context){
			context.push([
				'<div class="fill_out_text text_style absolute">',"Fill out the following to create your account:",'</div>',	
				'<div class="signup_shadow absolute">','</div>',
				'<div class="full_name_text medium text_style absolute">',"Full Name:",'</div>',
				'<div class="forms full_name_forms absolute">','</div>',
				'<div class="user_name_text medium text_style absolute">',"User Name:",'</div>',
				'<div class="forms user_name_forms absolute">','</div>',
				'<div class="email_text medium text_style absolute">',"Email:",'</div>',
				'<div class="forms email_forms absolute">','</div>',
				'<div class="password_text medium text_style absolute">',"Password:",'</div>',
				'<div class="forms password_forms absolute">','</div>',
				'<div class="line_forms_signup absolute">','</div>',	
				'<div class="user_image_text medium text_style absolute">',"User Image:",'</div>',
				'<div class="user_image_placeholder absolute">','</div>',	
			].join(''))		
		},

		textureView: SC.View.design({
			classNames: ['texture', 'radius_six'],
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
    }),	

		blueToolbar: SC.ToolbarView.design ({
			classNames: ['toolbar', 'blue_gradient', 'radius_six_top'],
			childViews: ['backButton', 'signupButton', 'menuTitle'],
			layout: { top: 0, left: 0, right: 0, height: 43 },
			
			backButton: SC.ButtonView.design({
        classNames: 'cancel_button'.w(),
        layout:{ left: 5, centerY: 0, height: 25 ,width: 43},
        title:"Back",
        target:'Nextgen.statechart',
        action:'hideSignup'
      }),
      
      signupButton: SC.ButtonView.design({
        classNames: 'submit_button'.w(),
        layout:{ right: 5, centerY: 0, height: 25 ,width: 55},
        title:"Submit",
        target:'Nextgen.statechart',
        action:'submitNewSignup'
      }),
      
      menuTitle: SC.LabelView.design({
        classNames: ['toolbar_title'],
        layout: { centerX: 0, centerY: 0, height: 25, width: 70},
        value: 'Sign Up'
      }),
			
		}),
		
		fullNameForm: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index'],
		  layout: { top: 151, left: 56, height: 36, width: 255 },
		  hintBinding: '.parentView.parentView.firstFormText',
		  isPassword: NO,
		  isTextArea: NO
		}),
		
		userNameForm: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index'],
		  layout: { top: 231, left: 56, height: 36, width: 255 },
		  hintBinding: '.parentView.parentView.secondFormText',
		  isPassword: NO,
		  isTextArea: NO
		}),
		
		emailForm: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index'],
		  layout: { top: 311, left: 56, height: 36, width: 255 },
		  hintBinding: '.parentView.parentView.thirdFormText',
		  isPassword: NO,
		  isTextArea: NO
		}),
		
		passwordForm: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index'],
		  layout: { top: 391, left: 56, height: 36, width: 255 },
		  hint: 'password',
		  isPassword: NO,
		  isTextArea: NO
		}),
		
		confirmPasswordForm: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index'],
		  layout: { top: 428, left: 56, height: 36, width: 255 },
		  hint: 'confirm password',
		  isPassword: NO,
		  isTextArea: NO
		}),

	}),
	
});
/* >>>>>>>>>> BEGIN source/views/desktop_page.js */
COS.desktopPage = SC.Page.design ({
	
	desktopView: COS.DesktopView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		applicationIcon: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/atlas_icon_small.png',
	//	applicationIconAlt: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/os_icon.png',
	}),
		
	
})
/* >>>>>>>>>> BEGIN source/views/empty_desktop_page.js */
COS.emptyDesktopPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },	
	  childViews: ['message'],
	
		message: SC.View.design({
		  layout: { bottom: 0, centerX: 0, height: 150, width: 500},
		  
			render: function(context){
				context.push([
					'<div class="main_deploy_text text_style absolute">',"No Deployed Applications",'</div>',
					'<div class="description_deploy_text text_style absolute">',"Deploy your application by clicking on the upper right button.",'</div>',	
				].join(''))		
			},
		  
		}),

	}),
		
	
})
/* >>>>>>>>>> BEGIN source/views/login_page.js */
COS.loginPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['signUpText', 'loginView'],
	
		loginView: COS.LoginView.create ({
			layout: { centerX: 0, centerY: 0, height: 465, width: 855 },
			applicationName: 'Atlas Developer',
			applicationIcon: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/atlas_icon.png',
			applicationIconAlt: '/static/cloudos/en/9846eee505e61b575b5ab91da19be9848d5f9cb7/source/resources/images/os_icon.png',
			buttonTitle: 'Sign In',
			descriptionText: 'To use Atlas Developer OS, you must sign in with a registered account.  Once signed in, you can deploy your code to our cloud or build applications with no code using our application builder.',
			firstFormText: 'User Name',
		}),
		
		signUpText: SC.ButtonView.design({
			classNames: ['text_style medium light emtpy_button'],
		  layout: { top: 10, right: 10, height: 25, width: 100 },
		  title: 'Sign Up',
		  action: 'signup',
		  target: 'Nextgen.statechart'
		}),
	  
	}),
	
})	
/* >>>>>>>>>> BEGIN source/views/multi_navigation_page.js */
COS.deployMessageNavigationPage = SC.Page.design ({
	
	interfaceView: SC.View.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		childViews: ['cancelButton', 'nextButton'],
		
		cancelButton: SC.ButtonView.design({
			classNames: 'cancel_button'.w(),
		  layout: { bottom: 10, left: 20, height: 25, width: 100 },
		  title: 'Cancel',
		  action: 'myMethod',
		  target: 'MyApp.Controller'
		}),
    
		nextButton: SC.ButtonView.design({
			classNames: 'submit_button'.w(),
		  layout: { bottom: 10, right: 20, height: 25, width: 100 },
		  title: 'Generate',
		  action: 'myMethod',
		  target: 'MyApp.Controller'
		}),
		
	}),
		
	
})
/* >>>>>>>>>> BEGIN source/views/platform_message_page.js */
COS.deployMessagePage = SC.Page.design ({
	
	platformView: COS.DeployMessageView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
	})
		
});
/* >>>>>>>>>> BEGIN source/views/repository_message_page.js */
COS.repositoryMessagePage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['titleView', 'descriptionView', 'keyTextArea'],
		
		render: function(context){
			context.push([	
				'<div class="line message_line absolute">','</div>',	
				'<div class="forms key_form absolute">','</div>',	
			].join(''))		
		},
		
		titleView: SC.LabelView.design({
			classNames: ['message_title'],
		  layout: { top: 10, right: 0, left: 0, height: 30 },
		  value: 'Deploy Key:'
		}),
		
		descriptionView: SC.LabelView.design({
			classNames: ['message_description'],
		  layout: { top: 50, right: 40, left: 40, height: 50 },
		  value: 'Generate your deploy keys when your applications repository is private.'
		}),
		
		keyTextArea: SC.TextFieldView.design({
			classNames: ['text_field_signin', 'top_index', 'radius_six'],
		  layout: { top: 105, left: 15, right: 15, height: 80 },
		  hint: 'ssh-rsa...',
		  isPassword: NO,
		  isTextArea: YES
		})
	  
	}),
		
})
/* >>>>>>>>>> BEGIN source/views/repository_url_page.js */
// COS.repositoryUrlPage = SC.Page.design ({
// 	
// 	interfaceView: SC.View.design({
// 	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
// 	}),
// 		
// })
/* >>>>>>>>>> BEGIN source/views/signup_page.js */
COS.signupPage = SC.Page.design ({
	
	signupView: COS.SignupView.create ({
		layout: { top: 0, right: 0, bottom: 0, left: 0 },
		firstFormText: 'Chad Eubanks',
		secondFormText: 'ceubanks',
		thirdFormText: 'ceubanks@thecodeboutique.com'
	}),
		
	
})
