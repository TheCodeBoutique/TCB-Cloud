COS.desktopPage = SC.Page.design ({
	
	desktopView: COS.DesktopView.create ({
		layout: { top: 0, bottom: 0, left: 0, right: 0 },
		applicationIcon: '/static/cloudos/en/current/source/resources/images/atlas_icon_small.png?1336091981',
	//	applicationIconAlt: '/static/cloudos/en/current/source/resources/images/os_icon.png?1336089575',
	}),
		
	
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');