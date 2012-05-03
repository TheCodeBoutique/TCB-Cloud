// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom signup view.  This is the standard signup view used for all TCB internal applications.  Using the COS.SignupView reduces the amount of time spent building common UI patterns.  To instatiate this view see the following example:

	signupView: COS.SignupView.create ({
		layout: { top: 1600, centerX: 0, height: 536, width: 537 },
		applicationName: 'Atlas',
		applicationIcon: '/static/cloudos/en/current/source/resources/images/atlas_icon.png?1334621618',
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


COS.SignupView = SC.View.extend ({
	classNames: 'overlay_pane'.w(),
	childViews: ['menuBase'],

  menuBase: SC.View.design({
    classNames: 'menu_view'.w(),
    layout:{ top: 1600, centerX: 0, height: 536, width: 537 },
	}),
	
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');