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