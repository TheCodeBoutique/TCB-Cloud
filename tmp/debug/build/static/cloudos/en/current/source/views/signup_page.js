COS.signupPage = SC.Page.design ({
	
	signupView: COS.SignupView.create ({
		layout: { top: 0, right: 0, bottom: 0, left: 0 },
		firstFormText: 'Chad Eubanks',
		secondFormText: 'ceubanks',
		thirdFormText: 'ceubanks@thecodeboutique.com'
	}),
		
	
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');