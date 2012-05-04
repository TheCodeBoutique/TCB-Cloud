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
		applicationIcon: sc_static('images/atlas_icon.png'),
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