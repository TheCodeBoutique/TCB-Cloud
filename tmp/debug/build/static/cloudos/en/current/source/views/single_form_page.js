COS.singleFormPage = SC.Page.design ({
	
	formView: COS.singleFormView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		singleFormTitleBinding: 'Nextgen.deployMessageViewController.singleFormTitle'
	}),
		
	
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');