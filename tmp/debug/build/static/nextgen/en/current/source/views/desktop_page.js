Nextgen.desktopPage = SC.Page.design ({
	
	interfaceView: SC.View.design ({
	  layout: { top: 0, right: 0, bottom: 0, left: 0 },
		childViews: ['appIcon', 'actionButton', 'settingsButton', 'dynamicContent'],

		render: function(context){
			context.push([	
				'<div class="horizontal_line absolute">','</div>',	
			].join(''))		
		},

		appIcon: SC.ImageView.design({
		  layout: { top: 10, left: 10, height: 34, width: 173 },
		  value: '/static/cloudos/en/current/source/resources/images/atlas_icon_small.png?1336091981',
		}),

		actionButton: SC.ButtonView.design({
			classNames: 'submit_button'.w(),
		  layout: { top: 10, right: 10, height: 31, width: 33 },
		  action: 'gotoDeployState',
		  target: 'Nextgen.statechart',
			icon: '/static/cloudos/en/current/source/resources/images/upload_cloud.png?1336105391',
		}),

		settingsButton: SC.ButtonView.design({
			classNames: ['text_style medium light emtpy_button'],
		  layout: { top: 18, right: 65, height: 25, width: 75 },
		  title: 'Sign Out',
		  action: 'signOut',
		  target: 'Nextgen.statechart',
		}),

		dynamicContent: SC.ContainerView.design({
		  layout: { top: 50, right: 0, bottom: 0, left: 0 },
		  nowShowingBinding: 'Nextgen.desktopViewsController.currentDesktopView'
		}),
		
	})
	
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('nextgen');