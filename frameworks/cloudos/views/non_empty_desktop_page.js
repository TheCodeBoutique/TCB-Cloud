COS.nonEmptyDesktopPage = SC.Page.design ({
	
	interfaceView: SC.View.design({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },	
	  childViews: ['deployedAppIcon'],
	  
	  deployedAppIcon: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      contentView: SC.GriView.design({
        contentBinding: 'MyApp.itemsController.arrangedObjects',
          selectionBinding: 'MyApp.itemsController.selection',
          rowHeight: 175,
          columnWidth:220,
          isSelectable:YES,
          // exampleView:MyApp.MyListItemView
      }),
      
    }),
	
	// deployedAppIcon: COS.DesktopAppIcon.create ({
	// 	layout: { top: 20, left: 20, height: 175, width: 145 },
	// 	// icon: sc_static('images/default_app_icon.png'),
	// 	appTitle: 'Demo App', // this needs to be binded to a text field during deploy
	// 	action: 'gotoDirectoryState',
	// 	target: 'Nextgen.statechart',
	// }),

	}),
		
	
})