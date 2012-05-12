// ==========================================================================
// Project:   Cloud OS - Custom Components For Sproutcore
// Copyright: ©2012 The Code Boutique LLC.
// License:   Internal Purposes Only.  Not for public.
// Author: Chad Eubanks
// ==========================================================================



/**
  @class

  Displays a custom desktop view.  This is the standard login view used for all TCB internal applications.  Using the COS.DesktopView reduces the amount of time spent building common UI patterns.  To instantiate this view see the following example:

	directoryApp: COS.DesktopAppIcon.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		appTitle: 'Directory',
		action: 'gotoDirectoryState',
		target: 'Internalcloud.statechart',
	}),
	
	@appTitle:  pass in a string value for your applications name
	@action:  pass in an action to point to.
	@target:  pass in a target that has your desired action.
	
  @extends SC.View
  @since Cloud OS 1.1
  @author: Chad Eubanks
*/


COS.DesktopAppIcon = SC.View.extend ({
	childViews: ['appIcon', 'appName'],
	
	appTitle: '',
	action: '',
	target: '',
	
	appIcon: SC.ButtonView.design ({
		classNames: ['emtpy_button'],
	  layout: { top: 0, centerX: 0, width: 145, height: 145 },
		icon: sc_static('images/default_app_icon.png'),
	  actionBinding: '.parentView.action',
	  targetBinding: '.parentView.target'
	}),
	
	appName: SC.LabelView.design({
		classNames: ['text_style appName light'],
	  layout: { right: 0, bottom: 0, left: 0, height: 25 },
	  valueBinding: '.parentView.appTitle',
	}),
	
});