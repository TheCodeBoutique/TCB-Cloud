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
	
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');