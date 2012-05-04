COS.loginPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
	  childViews: ['signUpText', 'loginView'],
	
		loginView: COS.LoginView.create ({
			layout: { centerX: 0, centerY: 0, height: 465, width: 855 },
			applicationName: 'Atlas Developer',
			applicationIcon: sc_static('images/atlas_icon.png'),
			applicationIconAlt: sc_static('images/os_icon.png'),
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