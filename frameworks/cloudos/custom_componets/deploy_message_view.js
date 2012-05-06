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