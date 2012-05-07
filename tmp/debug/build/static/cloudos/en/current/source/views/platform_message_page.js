COS.deployMessagePage = SC.Page.design ({
	
	platformView: COS.DeployMessageView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
	})
		
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');