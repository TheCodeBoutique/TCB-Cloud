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
	childViews: ['appIcon', 'actionButton', 'dynamicContent'],
	
	applicationIcon: '',
	
	appIcon: SC.ImageView.design({
	  layout: { top: 10, left: 10, height: 34, width: 173 },
	  valueBinding: '.parentView.applicationIcon',
	}),
	
	actionButton: SC.ButtonView.design({
		classNames: 'submit_button'.w(),
	  layout: { top: 10, right: 10, height: 31, width: 33 },
	  action: 'myMethod',
	  target: 'MyApp.Controller',
		icon: sc_static('images/upload_cloud.png'),
	}),
	
	dynamicContent: SC.ContainerView.design({
	  layout: { top: 50, right: 0, bottom: 0, left: 0 },
	  nowShowingBinding: 'Nextgen.viewsController.currentDesktop'
	}),
	
});