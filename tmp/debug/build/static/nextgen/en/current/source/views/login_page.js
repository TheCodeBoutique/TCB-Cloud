Nextgen.loginPage = SC.Page.design ({
	
	interfaceView: SC.View.design ({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['loginView', 'signUpText'],
		
		loginView: SC.View.design ({
			layerId: "LoginView",
			layout: { centerX: 0, centerY: 0, height: 465, width: 855 },
			childViews: ['appName', 'appIcon', 'appIconAlt', 'viewContainer'],
			
			appName: SC.LabelView.design({
				classNames: ['text_style absolute app_name'],
			  layout: { top: 25, left: 40, height: 40, width: 300 },
			  value: 'Atlas Developer',
			}),
			
			appIcon: SC.ImageView.design({
			  layout: { top: 10, left: 0, height: 49, width: 34 },
			  value: '/static/cloudos/en/current/source/resources/images/atlas_icon.png?1336089247',
			}),
			
			appIconAlt: SC.ImageView.design({
			  layout: { top: 35, left: 225, height: 17, width: 33 },
			  value: '/static/cloudos/en/current/source/resources/images/os_icon.png?1336089575',
			}),
			
			viewContainer: SC.View.design({
				classNames: ['embeded_gradient'],
			  layout: { top: 65, centerX: 0, height: 400, width: 855 },
				childViews: ['details', 'actionButton', 'viewDescription', 'userNameForm', 'passwordForm'],
				
				details: SC.View.extend({
					render: function(context){
						context.push([
							'<div class="shadow_view anchor_top absolute">','</div>',
							'<div class="shadow_view flipped_element anchor_bottom absolute">','</div>',
							'<div class="sign_in_text text_style absolute">',"Sign In",'</div>',	
							'<div class="line absolute">','</div>',
							'<div class="line_forms_signin absolute">','</div>',
							'<div class="forms signin_forms absolute">','</div>',		
						].join(''))		
					}
				}),
				
				actionButton: SC.ButtonView.design({
					classNames: ['submit_button'],
				  layout: { right: 50, bottom: 20, height: 25, width: 100 },
				  title: 'Sign In',
				  action: 'validateUserInput',
				  target: 'Nextgen.statechart',
					isDefault: YES
				}),
				
				viewDescription: SC.LabelView.design({
					classNames: ['text_style_paragraph'],
				  layout: { top: 120, left: 35, height: 100, width: 300 },
				  value: 'To use Atlas Developer OS, you must sign in with a registered account.  Once signed in, you can deploy your code to our cloud or build applications with no code using our application builder.',
				}),
				
				userNameForm: SC.TextFieldView.design({
					classNames: ['text_field_signin'],
				  layout: { top: 112, right: 98, height: 36, width: 260 },
					valueBinding: 'Nextgen.authenticateController.userName',
				  hint: 'User Name',
				  password: NO,
				  isTextArea: NO
				}),

				passwordForm: SC.TextFieldView.design({
					classNames: ['text_field_signin'],
				  layout: { top: 153, right: 98, height: 36, width: 260 },
					valueBinding: 'Nextgen.authenticateController.userPassword',
				  hint: 'Password',
				  password: YES,
				  isTextArea: NO
				}),
				
			}),
			
		}),
		
		signUpText: SC.ButtonView.design({
			classNames: ['text_style medium light emtpy_button'],
	  	layout: { top: 10, right: 10, height: 25, width: 100 },
	  	title: 'Sign Up',
	  	action: 'signup',
	  	target: 'Nextgen.statechart'
		}),
	 
	}),
	
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');