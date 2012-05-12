COS.nonEmptyDesktopPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },	
	  childViews: ['deployedAppIcon'],
	
		deployedAppIcon: COS.DesktopAppIcon.create ({
			layout: { top: 20, left: 20, height: 175, width: 145 },
			// icon: '/static/cloudos/en/current/source/resources/images/default_app_icon.png?1336509839',
			appTitle: 'Demo App', // this needs to be binded to a text field during deploy
			action: 'gotoDirectoryState',
			target: 'Nextgen.statechart',
		}),

	}),
		
	
}); if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('cloudos');